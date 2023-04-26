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
          In today's fast-paced world, it is easy to feel disconnected from
          others despite being surrounded by people. Even with the prevalence of
          social media and online communication, feelings of loneliness and
          isolation are common. In times of hardship, having someone to turn to
          for support is essential. However, not everyone has access to this
          type of support system. That's where AI Therapist comes in. At AI
          Therapist, we believe that being heard is a fundamental aspect of
          being human. It's essential to have someone to talk to, someone who
          will listen without judgment and provide a safe space to express your
          thoughts and emotions. But what do you do if you don't have anyone to
          talk to? That's where our AI-powered platform comes in. We recognized
          that there are many people who don't have access to traditional
          therapy or support systems. This could be due to a lack of resources,
          stigma surrounding mental health, or simply a lack of time. Our goal
          was to create a solution that would make being heard a reality for
          everyone, regardless of their circumstances. With AI Therapist, users
          can access a virtual therapist at any time, from anywhere. Our
          platform uses advanced algorithms to provide personalized support and
          guidance based on the user's input. Whether you need help with
          managing stress, dealing with anxiety, or simply want to talk to
          someone, our virtual therapists are available to listen and offer
          guidance. The power of listening cannot be understated. By providing a
          safe space for people to express their thoughts and feelings, we aim
          to improve mental health outcomes and overall well-being. At AI
          Therapist, we believe that everyone deserves to be heard. Our mission
          is to use the power of AI to provide a safe and accessible space for
          people to express themselves and receive personalized support. We are
          committed to improving mental health outcomes and making a positive
          impact on people's lives.
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
      <div className="flex py-2 items-center object-center justify-center">
        <Image alt="logo" src={"/Logo.png"} height={250} width={250}></Image>
      </div>
    </div>
  );
}
