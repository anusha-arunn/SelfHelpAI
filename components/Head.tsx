import Head from "next/head";

export default function Main() {
  return (
    <>
      <Head>
        {/* SEO */}

        <title>AI Therapist</title>

        <meta
          name="description"
          content="Quick solutions for your mental health."
        />
        <meta
          name="keywords"
          content="AI therapist, mental health, counseling, virtual therapy, AI-powered therapy, mental well-being, personalized support, virtual counseling, AI therapy, mental health support, mental health services, mental health help, mental health resources, mental health technology."
        />
        <meta property="og:url" content="https://aitherapist.co/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="all" />

        {/* Open Graph
        <meta property="og:title" content="HandCraftWeb" />
        <meta
          property="og:description"
          content="Quick solutions for your website."
        />
        <meta property="og:url" content="https://handcraftweb.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:image"
          content="https://handcraftweb.com/og_image/og_image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

        {/* Favicons
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicons/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <meta name="msapplication-TileColor" content="#ffffff" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@aitherapist" />
        <meta name="twitter:creator" content="@aitherapist" />
        <meta name="twitter:title" content="AI Therapist" />
        <meta
          name="twitter:description"
          content="Quick solutions for your website."
        />

        {/* Tab color */}
        <meta
          name="theme-color"
          content="#FFFFFF"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
    </>
  );
}
