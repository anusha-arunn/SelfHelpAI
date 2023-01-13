import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="">
        <Head />
        <body className="bg-gradient-to-tl to-color1 from-color2 dark:bg-black max-w-6xl mx-auto px-4">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
