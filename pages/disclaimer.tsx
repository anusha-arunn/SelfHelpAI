import { Pavanam } from "@next/font/google";

import Head from "next/head";
const pavanam = Pavanam({
  weight: "400",
  subsets: ["latin"],
});

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer</title>
      </Head>
      <div className="py-10 items-center">
        <div lang="en" className={pavanam.className}>
          <div className="text-center py-7 text-3xl">Disclaimer</div>
          <div className="text-center text-xl">
            This AI is intented to just support you and does not provide
            professional help. A medical disclaimer declares that this site
            content is for informational purposes only, and should not be taken
            as professional medical advice.
          </div>
        </div>
      </div>
    </>
  );
}
