import { Pavanam } from "@next/font/google";

const pavanam = Pavanam({
  weight: "400",
  subsets: ["latin"],
});

export default function Alone() {
  return (
    <div className="py-10 items-center">
      <div lang="en" className={pavanam.className}>
        <div className="text-justify text-xl">
          You Are Not Alone According to the Anxiety & Depression Association of
          America, anxiety disorders are the most common mental illness in the
          United States, affecting some 40 million adults, or about 18% of the
          population. <br />
          <br />
          Childhood anxiety disorders are even more common, affecting
          one-quarter of those ages 13 to 18 in the U.S. And nearly half of
          those diagnosed with depression — which affects 17.3 million adults 18
          and older in the U.S. and 264 million people worldwide — are also
          diagnosed with anxiety. <br />
          <br />
          So the next time you feel alone, or like no one will understand, take
          comfort in the fact that you are part of the 1 in 13 people worldwide
          who suffers from anxiety, according to the World Health Organization
          (WHO). That's hundreds of millions of people who get it! <br />
          <br />
          You do not have to worry about anything. We are here to help you here!
        </div>
      </div>
    </div>
  );
}
