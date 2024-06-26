import { HomeContainer, Icon, Product } from "@/styles/pages/home";

import Head from "next/head";

import { useKeenSlider } from 'keen-slider/react'

import Link from "next/link";

import Image from "next/image";

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { Handbag } from "../../node_modules/@phosphor-icons/react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    currency: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    },
  })

  return (
    <>
      <Head>
        <title>Home | IgniteShop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{(product.price / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}</span>
                </div>
                <Icon>
                  <Handbag size={32} />
                </Icon>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      currency: price.currency
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}
