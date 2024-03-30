import { CartItems } from "@/styles/header"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"

interface CartItemsCardProps {
  item: {
    id: string
    name: string
    price: number
    imageUrl: string
  }
}

export function CartItemsCard({ item }: CartItemsCardProps) {
  const { removeItem } = useShoppingCart()

  return (
    <CartItems>
      <figure>
        <Image src={item?.imageUrl} width={94} height={94} alt="" />
      </figure>
      <section>
        <h5>{item?.name}</h5>
        <strong>{(item?.price / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</strong>
        <button onClick={() => removeItem(item.id)}>Remover</button>
      </section>
    </CartItems>
  )
}
