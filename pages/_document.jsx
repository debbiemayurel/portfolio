import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        {/* Viewport para diseño responsive */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}