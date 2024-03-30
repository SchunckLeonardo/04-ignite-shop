import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import { Container } from "@/styles/pages/app";

import { CartProvider } from "use-shopping-cart";

import { Header } from '@/components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY!}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      allowedCountries={["BR"]}
      shouldPersist={true}
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
