import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from '@/assets/logo.svg'
import Image from "next/image";
import { AsideCartFooter, AsideCartPanel, CartItems, CartItemsWrapper, Container, Header, Icon, PurchaseItemsButton } from "@/styles/pages/app";
import Link from "next/link";
import { Handbag } from "../../node_modules/@phosphor-icons/react";
import { useState } from "react";
import { X } from "../../node_modules/@phosphor-icons/react/dist/ssr";

import image1 from '@/assets/camisetas/1.png'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [showCartItems, setShowCartItems] = useState(false)

  function handleToggleCartItems() {
    if (!showCartItems) {
      setShowCartItems(true)
    } else {
      setShowCartItems(false)
    }
  }

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Icon onClick={() => handleToggleCartItems()}>
          <span>1</span>
          <Handbag size={24} weight="bold" />
        </Icon>
      </Header>

      <AsideCartPanel data-active={showCartItems ? 'on' : 'off'}>
        <header>
          <X onClick={() => handleToggleCartItems()} size={24} />
        </header>
        <CartItemsWrapper>
          <h2>Sacola de compras</h2>
          <CartItems>
            <figure>
              <Image src={image1} width={94} height={94} alt=""  />
            </figure>
            <section>
              <h5>Camiseta Beyond the Limits</h5>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </section>
          </CartItems>
        </CartItemsWrapper>
        <AsideCartFooter>
          <div>
            <h4>Quantidade</h4>
            <p>3 itens</p>
          </div>
          <div>
            <strong>Valor total</strong>
            <b>R$ 270,00</b>
          </div>
        </AsideCartFooter>
        <PurchaseItemsButton>Finalizar compra</PurchaseItemsButton>
      </AsideCartPanel>

      <Component {...pageProps} />
    </Container>
  )
}
