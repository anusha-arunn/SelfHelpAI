import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="text-center justify-center">
      <Head>
        <title>AI Therapist</title>
      </Head>

      <div className="text-center justify-center">
        <p className="text-4xl pt-5">Support Better Mental Health</p>
        <br />
      </div>
    </div>
  );
}
