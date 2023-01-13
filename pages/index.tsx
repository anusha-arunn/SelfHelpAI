import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center justify-center">
      <Head>
        <title>AI Therapist</title>
      </Head>

      <div className="text-center items-center justify-center">
        <p className="text-4xl pt-5">Support Better Mental Health</p>
        <p className="text-2xl pt-5">
          It's time to break the silence and break the stigma
        </p>
        <p className="text-2xl pt-5">Take the first step towards healing</p>
        <p className="text-2xl pt-5">Find your inner peace</p>
        <br />

        <Image
          src="/heartinhand.png"
          alt="hih"
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
