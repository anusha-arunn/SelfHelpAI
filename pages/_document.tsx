import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="">
        <Head />
        <body className="from-teal-200 via-cyan-400 to-cyan-600 bg-gradient-to-br dark:bg-black max-w-4xl px-4 mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
