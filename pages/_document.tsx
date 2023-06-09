import NavBar from "@/components/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="overflow-x-hidden scroll-smooth">
      <Head>
        <title>Nick Triano</title>
      </Head>
      <body className="bg-neutral-50 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
