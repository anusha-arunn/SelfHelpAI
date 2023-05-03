import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Button } from "../components/Chat/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [jokes, setJoke] = useState([{ joke: "joke" }]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch("https://aitherapist.co/api/joke")
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        console.log(data);
        setJoke(data);
      });
  }, []);

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
        <p className="text-2xl pt-3">
          It's time to break the silence and break the stigma
        </p>
        <p className="text-2xl pt-3">Take the first step towards healing</p>
        <p className="text-2xl pt-3">Find your inner peace</p>
        <br />
        <h1>
          In our fast-paced world, it's easy to feel disconnected from others,
          despite being surrounded by people. This is especially true when it
          comes to mental health. Loneliness and isolation are common, and many
          people don't have access to traditional therapy or support systems. AI
          Therapist is a solution that aims to make being heard a reality for
          everyone, regardless of their circumstances. Our platform is powered
          by advanced algorithms that provide personalized support and guidance
          based on the user's input. Whether you're dealing with stress,
          anxiety, or just need someone to talk to, our virtual therapists are
          available to listen and offer guidance. We believe that being heard is
          a fundamental aspect of being human, and we're committed to using the
          power of AI to provide a safe and accessible space for people to
          express themselves. The importance of listening cannot be understated.
          When people feel heard and understood, they're more likely to
          experience positive mental health outcomes and overall well-being.
          Unfortunately, not everyone has someone to turn to for support. This
          could be due to a lack of resources, stigma surrounding mental health,
          or simply a lack of time. AI Therapist is a solution that addresses
          these issues by providing a virtual therapist that can be accessed at
          any time, from anywhere. Our mission is to improve mental health
          outcomes and make a positive impact on people's lives. We believe that
          everyone deserves to be heard, and we're committed to using the power
          of AI to make that a reality. Our platform is designed to provide
          personalized support and guidance that's tailored to each user's
          unique needs. We're constantly improving our algorithms and expanding
          our services to ensure that we're providing the best possible support
          to our users. In conclusion, AI Therapist is a platform that's
          designed to provide accessible and personalized support to people who
          need it most. We believe that being heard is a fundamental aspect of
          being human, and we're committed to using the power of AI to make that
          a reality for everyone. Our goal is to improve mental health outcomes
          and make a positive impact on people's lives, and we're constantly
          working to achieve that mission.
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
      <p className="text-m pt-5 font-light">
        Let's have a laugh! Laughter is good for health and lights up your mood.
      </p>
      {jokes.map((joke, i) => {
        return (
          <div key={i} className="text-m pt-5 font-mono">
            {joke.joke} 😂😂
          </div>
        );
      })}
    </div>
  );
}
