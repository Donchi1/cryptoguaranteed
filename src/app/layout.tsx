import { Providers } from "@/redux/Providers";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Cryptoguarantee",
  description: "Trading made easier, smoother and faster",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=" />
      <link rel="icon" href="./favicon.ico" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta
        name="description"
        content="cryptocurrency, trading, bitcoins, investment"
      />
      <meta
        property="og:title"
        content="Trading made easier, smoother and faster"
      />
      <meta property="og:description" content="" />
      <meta property="og:image" content="./ogpic.png" />

      <link rel="apple-touch-icon" href="./apple-touch.icon.png" />

      <body className="darker">
        <Providers>{children}</Providers>
        <Script
          src="https://kit.fontawesome.com/9704e077c0.js"
          crossOrigin="anonymous"
        ></Script>
        <Script
          id="jquery"
          src="https://code.jquery.com/jquery-3.7.0.min.js"
          integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
          crossOrigin="anonymous"
        ></Script>
        <Script
          id="popper"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
        {/* All Plugins js */}
        <Script src="https://ico-tailwindcss.netlify.app/assets/js/plugins.js"></Script>
        <Script src="https://ico-tailwindcss.netlify.app/assets/js/jquery.syotimer.min.js"></Script>
        <Script src="https://ico-tailwindcss.netlify.app/assets/js/script.js"></Script>
      </body>
    </html>
  );
}
