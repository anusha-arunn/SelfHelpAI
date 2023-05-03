import { Lato } from "@next/font/google";

const roboto = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function contact() {
  return (
    <div className="py-10 flex justify-center items-center">
      <div className={roboto.className}>
        <div className="text-justify text-l">
          Welcome to AI Therapist. Please read the following terms carefully as
          they govern your use of our platform.
          <br />
          <br />
          <ul>
            1. Use of Platform: By accessing and using our platform, you agree
            to be bound by these terms of service. You also acknowledge that you
            have read and understand our privacy policy.
          </ul>
          <ul>
            2. Personal Information: Our platform collects personal information
            to provide personalized support and guidance. We take privacy
            seriously and will never share or sell your information to third
            parties.
          </ul>
          <ul>
            3. Virtual Therapists: Our virtual therapists are powered by
            advanced algorithms designed to provide personalized support and
            guidance. While our platform can provide helpful guidance, it should
            not be used as a substitute for professional medical advice or
            treatment.
          </ul>
          <ul>
            4. User Content: By using our platform, you agree to provide
            accurate and truthful information. You also acknowledge that any
            content you provide may be used by AI Therapist to improve our
            platform and services.
          </ul>
          <ul>
            5. Termination: AI Therapist reserves the right to terminate your
            account at any time for any reason.
          </ul>
          <ul>
            6. Intellectual Property: All content on our platform is the
            property of AI Therapist and is protected by intellectual property
            laws.
          </ul>
          <ul>
            7. Limitation of Liability: AI Therapist is not liable for any
            damages arising from your use of our platform. You agree to use our
            platform at your own risk.
          </ul>
          <ul>
            8. Governing Law: These terms of service are governed by the laws of
            the state of California.
            <br />
            <br /> By using AI Therapist, you agree to these terms of service.
            If you do not agree to these terms, please do not use our platform.
            We reserve the right to update these terms at any time, and your
            continued use of our platform constitutes acceptance of any changes.
          </ul>
        </div>
      </div>
    </div>
  );
}
