import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

import "@/styles/globals.scss";
import clsx from "clsx";

import "swiper/css";

import LayoutMain from "@/layouts/Main";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--var-plusJakartaSans",
  weight: ["400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--var-poppins",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GIMY GAMY",
  description: "GIMY GAMY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T263FCG6');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CHLRDDT1TC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CHLRDDT1TC');
            `,
          }}
        />
      </head>
      <body className={clsx(plusJakartaSans.variable, poppins.variable)}>
        <LayoutMain>{children}</LayoutMain>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T263FCG6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
