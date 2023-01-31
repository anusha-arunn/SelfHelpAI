import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="">
        <Head />
        <body className="bg-gradient-to-tl to-blue-100/90 from-pink-100/90 max-w-7xl mx-auto px-4">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
