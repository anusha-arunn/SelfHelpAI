import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="text-center justify-center">
      <Head>
        {/* SEO */}

        <title>AI Therapist</title>

        <meta name="description" content="Quick solutions for your website." />
        <meta name="keywords" content="AI Therapist, Mental Health, WHO" />
        <meta property="og:url" content="https://aitherapist.co/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="all" />
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
