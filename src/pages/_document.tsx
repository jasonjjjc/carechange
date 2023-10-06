import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>CareChange | Communication made better</title>
        <meta
          name="description"
          content="Streamlined communication between clients and professionals."
        />
        <meta name="author" content="Jason Chalangary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
