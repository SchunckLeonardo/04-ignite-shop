import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    currency: string
  }
}

export default function Product({ product }: ProductProps) {
  // const router = useRouter()
  // router.push('/')

  const [isCratingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { addItem } = useShoppingCart()

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramente de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <>
      <Head>
        <title>Home | {product.name}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{(product.price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</span>

          <p>{product.description}</p>

          <button disabled={isCratingCheckoutSession} onClick={() => addItem(product, { count: 1 })}>
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos/mais acessados

  return {
    paths: [
      { params: { id: 'prod_PpJIsLfccEDjR3' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1
  }
}
