import { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"

import {AsideCartFooter, AsideCartPanel, CartItems, CartItemsWrapper, HeaderWrapper, Icon, PurchaseItemsButton} from '@/styles/header'
import Link from "next/link"

import logoImg from '@/assets/logo.svg'

import Image from "next/image"
import { Handbag, X } from "../../node_modules/@phosphor-icons/react"
import { CartItemsCard } from "./CartItemsCard"

export function Header() {
  const [showCartItems, setShowCartItems] = useState(false)
  const [status, setStatus] = useState('idle')

  const { cartCount, cartDetails, formattedTotalPrice, redirectToCheckout } = useShoppingCart()

  async function handleClickToCheckout(event) {
    event.preventDefault()

    if (cartCount! > 0) {
      setStatus('idle')
      try {
        const result = await redirectToCheckout()
        if (result?.error) {
          console.error(result)
          setStatus('redirect-error')
        }
      } catch (error) {
        console.error(error)
        setStatus('redirect-error')
      }
    } else {
      setStatus('missing-items')
    }
  }

  function handleToggleCartItems() {
    if (!showCartItems) {
      setShowCartItems(true)
    } else {
      setShowCartItems(false)
    }
  }

  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Icon onClick={() => handleToggleCartItems()}>
          {cartCount ? <span>{cartCount}</span> : <></>}
          <Handbag size={24} weight="bold" />
        </Icon>
      </HeaderWrapper>

      <AsideCartPanel data-active={showCartItems ? 'on' : 'off'}>
        <header>
          <X onClick={() => handleToggleCartItems()} size={24} />
        </header>
        <CartItemsWrapper>
          <h2>Sacola de compras</h2>
          {cartCount ? Object.values(cartDetails ?? {}).map((entry) => (
            <CartItemsCard key={entry?.id} item={entry} />
          )) : <></>}
        </CartItemsWrapper>
        <AsideCartFooter>
          <div>
            <h4>Quantidade</h4>
            <p>{cartCount ?? 0} itens</p>
          </div>
          <div>
            <strong>Valor total</strong>
            <b>{formattedTotalPrice}</b>
          </div>
        </AsideCartFooter>
        <PurchaseItemsButton onClick={handleClickToCheckout}>Finalizar compra</PurchaseItemsButton>
      </AsideCartPanel>
    </>
  )
}
