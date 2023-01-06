import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="">
        <Head />
        <body className="from-red-100 via-red-300 to-blue-500 bg-gradient-to-br dark:bg-black max-w-4xl px-4 mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
