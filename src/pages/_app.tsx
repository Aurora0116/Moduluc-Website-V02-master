import { useState } from "react";
import type { AppProps } from "next/app"
import Header from "../components/Header"
import "../assets/scss/style.scss"
import MarketsModal from "../components/MarketsModal"

export default function ModulucWebsite({ Component, pageProps }: AppProps) {
  const [marketsModal, setMarketsModal] = useState(false);

  return (
    <>
      <Header
        onCloseMarketsModal={() => setMarketsModal(false)}
        onOpenMarketsModal={() => setMarketsModal(true)}
      />
      <MarketsModal
        open={marketsModal}
        onClose={() => setMarketsModal(false)}
      />
      <Component {...pageProps}
        onCloseMarketsModal={() => setMarketsModal(false)}
        onOpenMarketsModal={() => setMarketsModal(true)}
      />
    </>
  )
}
