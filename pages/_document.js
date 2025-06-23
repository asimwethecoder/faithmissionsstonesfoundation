import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="ThttXsJ2cU4SW9kPCir2UWvCAs2rwXKL_HZiKv-2yiQ" />
        <meta name="description" content="Faith Missions Stone Foundation - Leading South African charity supporting street children, orphans, and vulnerable youth in townships. Also operating in DRC mining regions." />
        <meta name="keywords" content="South Africa charity, street children, orphans, township development, child welfare, DRC mining, nonprofit organization" />
        <meta name="author" content="Faith Missions Stone Foundation" />
        <meta name="theme-color" content="#f36233" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://faithmissionsstonefoundation.org" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('Service Worker registration successful with scope: ', registration.scope);
                    },
                    function(err) {
                      console.log('Service Worker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </Html>
  )
}