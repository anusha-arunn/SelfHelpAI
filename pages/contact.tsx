import { Lato } from "@next/font/google";

const roboto = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function contact() {
  return (
    <div className="py-10 flex justify-center items-center">
      <div className={roboto.className}>
        <div className="text-justify text-xl">
          Our team at AI Therapist is dedicated to providing accessible and
          personalized support to help improve mental health outcomes and
          overall well-being. We value your feedback and questions, and we're
          here to help. Please feel free to reach out to us through our email to
          share your thoughts or to ask any questions you may have about our
          platform. We look forward to hearing from you and working together to
          make a positive impact on people's lives.
        </div>
        <h1 className="text-xl text-center py-8">Email us at </h1>
        <h1 className="text-3xl text-center">
          <a href="mailto:selfaitherapist@gmail.com">
            📫selfaitherapist@gmail.com
          </a>
        </h1>
      </div>
    </div>
  );
}
