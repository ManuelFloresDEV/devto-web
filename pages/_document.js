import SvgDEV from "@/svg/SvgDEV";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>DEV community</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>

      <body className="antialiased bg-[#ebebeb]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
