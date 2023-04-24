import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Button } from "../components/Chat/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center justify-center">
      <Head>
        {/* SEO */}

        <title>AI Therapist</title>

        <meta name="description" content="AI Therapy curated for you." />
        <meta
          name="keywords"
          content="AI Therapist, Mental Health, WHO, mental fitness, meditation, therapy"
        />
        <meta property="og:url" content="https://aitherapist.co/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="all" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6169174361219593"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Script
        id="0"
        dangerouslySetInnerHTML={{
          __html: `
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("2281307306");
   `,
        }}
      />

      <div className="text-center font-light items-center object-center justify-center">
        <p className="text-4xl pt-5">Support Better Mental Health</p>
        <p className="text-2xl pt-5">
          It's time to break the silence and break the stigma
        </p>
        <p className="text-2xl pt-5">Take the first step towards healing</p>
        <p className="text-2xl pt-5">Find your inner peace</p>
        <br />
        <h1>
          We live in a world where you can be surrounded by people, but still
          feel lonely, with nobody to turn to when things get rough. But being
          heard is an important part of being human. There is great power in
          listening, but we knew not everyone had someone to talk to. We started
          to wonder. "How can I make being heard a reality for everyone?" That's
          why AI Therapist was born.
        </h1>
        <br />
        <p>
          Click on the Chat button to start a chat with a our personally trained
          AI now!
        </p>
        <div className="pt-2">
          <Button className="ml-8 flex-grow-0">
            <Link href="/chatAI">Chat now</Link>
          </Button>
        </div>
      </div>
      <div className="flex py-2 items-center object-center justify-center">
        <Image alt="logo" src={"/Logo.png"} height={250} width={250}></Image>
      </div>
    </div>
  );
}
