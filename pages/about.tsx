import { Pavanam } from "@next/font/google";

const pavanam = Pavanam({
  weight: "400",
  subsets: ["latin"],
});

export default function ABout() {
  return (
    <div className="py-10 items-center">
      <div lang="en" className={pavanam.className}>
        <div className="text-xl text-justify">
          Sometimes you feel alone, or like no one will understand, take comfort
          in the fact that you are part of the 1 in 13 people worldwide who
          suffers from anxiety, according to the World Health Organization
          (WHO). That's hundreds of millions of people who get it! <br />
          <br />
          You do not have to worry about anything. We are here to help you here!
          <br />
          <br />
          AI therapist is a form of artificial intelligence that is designed to
          provide therapy or counseling services. It uses natural language
          processing and machine learning techniques to understand and respond
          to a user's input. AI therapists can be used to provide support for
          mental health issues, such as anxiety and depression, and can be
          accessed through a computer or mobile device. They may offer a range
          of therapeutic interventions, such as cognitive behavioral therapy,
          mindfulness practices, and emotional support. However, it's important
          to note that AI therapists are not a substitute for professional human
          therapists and should be used in conjunction with traditional therapy.
        </div>
      </div>
    </div>
  );
}
