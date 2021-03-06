import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <meta name="yandex-verification" content="84cbc1cfcc06b958" />
            <script dangerouslySetInnerHTML={{
               __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-WVQVC2X');`
               }}></script>
            <title>Oblic</title>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVQVC2X" height="0" width="0"style={{display:'none', visibility:'hidden'}}></iframe>
            </noscript>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
