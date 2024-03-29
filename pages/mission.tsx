import { Pavanam } from "@next/font/google";
import Head from "next/head";

const pavanam = Pavanam({
  weight: "400",
  subsets: ["latin"],
});

export default function Mission() {
  return (
    <>
      <Head>
        <title>Our Mission</title>
      </Head>
      <div className="py-10 items-center">
        <div lang="en" className={pavanam.className}>
          <div className="text-center py-7 text-3xl">Our Mission</div>
          <div className="text-justify text-xl">
            The mission of an AI therapist is to provide accessible and
            convenient mental health support to individuals who may not have
            access to traditional therapy services. This technology aims to
            empower individuals to take control of their mental well-being and
            provide them with the tools and resources they need to improve their
            emotional and psychological health. Additionally, AI therapists can
            help to reduce the burden on traditional therapy services by
            providing an alternative option for those who may be unable to
            access them. Overall, the goal of an AI therapist is to improve the
            mental well-being of individuals and promote positive mental health
            outcomes.
          </div>
        </div>
      </div>
    </>
  );
}
