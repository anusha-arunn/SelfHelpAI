import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Merriweather_Sans } from "@next/font/google";

const roboto = Merriweather_Sans({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="mt-11">
          <nav className={roboto.className}>
            <div className="flex flex-wrap items-center justify-between">
              <Link
                href="/"
                className="flex-1 justify-start items-start text-4xl font-semibold"
              >
                {/* <svg
                  width="150"
                  height="150"
                  viewBox="0 0 329.99999999999994 198.0233637241006"
                  className="css-1j8o68f"
                >
                  <defs id="SvgjsDefs4955">
                    <linearGradient id="SvgjsLinearGradient4962">
                      <stop
                        id="SvgjsStop4963"
                        stop-color="#fbb040"
                        offset="0"
                      ></stop>
                      <stop
                        id="SvgjsStop4964"
                        stop-color="#f9ed32"
                        offset="1"
                      ></stop>
                    </linearGradient>
                    <linearGradient id="SvgjsLinearGradient4965">
                      <stop
                        id="SvgjsStop4966"
                        stop-color="#ef4136"
                        offset="0"
                      ></stop>
                      <stop
                        id="SvgjsStop4967"
                        stop-color="#fbb040"
                        offset="1"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="SvgjsG4956"
                    transform="matrix(1.676870769186681,0,0,1.676870769186681,81.15646154066596,-24.59089557631175)"
                    fill="url(#SvgjsLinearGradient4962)"
                  >
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path d="M59.0075378,52.6043282c0.1792603-6.9205933,1.2346191-16.3547974,1.2346191-16.3547974   s1.0553589,9.4342041,1.2346191,16.3547974c3.6539917-1.4689331,6.4446411-9.3453369,6.4446411-18.8453369   c0-10.5454712-7.6792603-19.0942383-7.6792603-19.0942383s-7.6792603,8.548768-7.6792603,19.0942383   C52.5628967,43.2589912,55.3535461,51.1353951,59.0075378,52.6043282z"></path>
                      <path d="M94.7261658,28.4791451c0,0-11.4838257,0.4169312-19.0680542,7.7442017   C68.8258362,42.8240547,65.1001892,50.30373,66.58255,53.9522285c5.1018677-4.6796265,12.6200562-10.475647,12.6200562-10.475647   s-6.0517578,7.3139648-10.9042969,12.2515259c3.5952148,1.6071167,11.1987915-1.8584595,18.0311279-8.4591675   C93.9136047,39.9417305,94.7261658,28.4791451,94.7261658,28.4791451z"></path>
                      <path d="M52.1860046,55.7281075c-4.8525391-4.937561-10.9042969-12.2515259-10.9042969-12.2515259   s7.5181885,5.7960205,12.6200562,10.475647c1.4823608-3.6484985-2.2432861-11.1281738-9.0755615-17.7288818   c-7.5842285-7.3272705-19.0680542-7.7442017-19.0680542-7.7442017s0.812561,11.4625854,8.3967285,18.7897949   C40.9872131,53.869648,48.5907898,57.3352242,52.1860046,55.7281075z"></path>
                      <path d="M48.9385681,35.7539864c0.1955566,0.1889648,0.3793945,0.3807983,0.5698242,0.5709839   c-0.0040283-0.187439-0.010376-0.3735352-0.010376-0.5635376c0-3.8574219,1.0309448-7.4413452,2.3342285-10.4438477   c-4.6583862-5.7332764-10.7262573-8.6503906-10.7262573-8.6503906s-2.1807251,6.1956177-1.5039673,13.4282227   C42.7235413,31.2424507,46.103363,33.0149117,48.9385681,35.7539864z"></path>
                      <path d="M70.9759216,36.3249702c0.1904297-0.1901855,0.3742676-0.382019,0.5698242-0.5709839   c2.8352051-2.7390747,6.2150269-4.5115356,9.3365479-5.6585693c0.6767578-7.232605-1.5039673-13.4282227-1.5039673-13.4282227   s-6.0678711,2.9171143-10.7262573,8.6503906c1.3032837,3.0025024,2.3342285,6.5864258,2.3342285,10.4438477   C70.9862976,35.9514351,70.97995,36.1375313,70.9759216,36.3249702z"></path>
                      <path d="M84.0071716,61.0729561c-0.8648071,0.2922974-1.8551025,0.763855-2.9842529,1.4868774l-6.3217773,6.3613853   c0,0-15.0617065,15.4889526-30.932312,2.6154175c-2.5349121-2.048584-5.0822144-4.81073-7.5973511-8.4775963   c0,0,19.6791992,9.5303917,27.3157349-0.458313c0,0-3.9238892-0.7211914-10.8745728-2.4703369   c-6.9522095-1.7575684-13.295105-6.59021-20.444519-10.0585327c-7.1578979-3.4668579-19.9959106-2.1779175-25.7272339,4.4631958   l-1.1670532,0.9042969c0,0,4.2974854,1.798584,10.381897,5.760376c0.0199585,0.0139771,0.0413818,0.036377,0.0697632,0.0488281   c4.1689453,2.9995079,8.8564453,6.8588829,13.4458008,11.6955528c0,0,1.5092163,1.9243164,5.3745117,4.1919556   c2.4367676,1.9874268,7.4785767,5.234314,16.3745728,7.3731689c12.8970337,3.0994873,21.7461548-3.1844482,25.9555054-7.9161377   c4.2008667-4.7302246,12.0758667-14.900692,12.0758667-14.900692S87.5565491,59.8702583,84.0071716,61.0729561z"></path>
                      <path d="M74.5517273,68.0748444l6.3217163-6.3614464c1.1292114-0.7229614,2.1195068-1.1945801,2.984314-1.4868774   c0.8682251-1.1134033,1.4083862-1.8109131,1.4083862-1.8109131s-0.6553345-0.8443604-2.1842651-1.0021362   c-1.2631836-0.1348877-3.1337891,0.1953735-5.7446289,1.8694458l-6.3232422,6.3530235   c0,0-12.9000244,13.2481689-27.3945923,5.0543213c0.0298462,0.020874,0.0612183,0.050293,0.0910645,0.071167   C59.5487366,83.5009918,74.5517273,68.0748444,74.5517273,68.0748444z"></path>
                      <path d="M70.8645935,64.789505l6.3232422-6.3529625c2.6108398-1.6741333,4.4814453-2.0043335,5.7446289-1.8694458   c-0.9893799-0.6109009-3.2493896-1.2504883-7.3164673,1.2217407l-6.4716797,6.2046509   c0,0-13.1967163,12.9514732-27.505188,4.4279747c0.6453247,0.5407104,1.2831421,1.0390625,1.921936,1.4935913   c-0.0299072-0.020874-0.0612183-0.050293-0.0910645-0.071228C57.9645691,78.037674,70.8645935,64.789505,70.8645935,64.789505z"></path>
                    </g>
                  </g>
                  <g
                    id="SvgjsG4957"
                    transform="matrix(2.722323192926326,0,0,2.722323192926326,-0.7622521198957022,122.50272160663906)"
                    fill="#0e2a39"
                  >
                    <path d="M8.52 16.9 l-0.98 0.02 l-2.8 0 l-0.98 -0.02 l-0.94 3.12 q-0.42 0.1 -1.19 0.1 t-1.25 -0.18 l-0.1 -0.14 l4.46 -13.46 q0.74 -0.1 1.6 -0.1 t1.5 0.12 l4.38 13.46 q-0.58 0.34 -1.39 0.34 t-1.16 -0.3 t-0.59 -1.14 z M4.42 14.780000000000001 l0.9 -0.02 l1.72 0 l0.84 0.02 l-0.6 -2.04 q-0.68 -2.28 -1.08 -3.88 l-0.12 0 q-0.18 0.86 -0.88 3.38 z M14.22 20 l0 -13.66 q0.5 -0.1 1.31 -0.1 t1.37 0.1 l0 13.66 q-0.56 0.1 -1.37 0.1 t-1.31 -0.1 z M29.380000000000003 8.56 l0.02 1.48 l0 9.96 q-0.58 0.1 -1.35 0.1 t-1.35 -0.1 l0 -9.96 l0.02 -1.48 l-1.22 0.02 l-2.22 0 q-0.1 -0.5 -0.1 -1.12 t0.1 -1.12 l9.56 0 q0.14 0.5 0.14 1.09 t-0.34 0.87 t-1.1 0.28 l-0.94 0 l-1.22 -0.02 l0 0 z M42.32000000000001 11.84 l-0.02 -1.48 l0 -4.02 q0.52 -0.1 1.33 -0.1 t1.37 0.1 l0 13.66 q-0.58 0.1 -1.37 0.1 t-1.33 -0.1 l0 -4.46 l0.02 -1.48 l-1.06 0.02 l-2.82 0 l-1.08 -0.02 l0.02 1.48 l0 4.46 q-0.52 0.1 -1.34 0.1 t-1.34 -0.1 l0 -13.66 q0.52 -0.1 1.34 -0.1 t1.34 0.1 l0 4.02 l-0.02 1.48 l1.08 -0.02 l2.82 0 z M50.96000000000001 16.58 l-0.02 1.24 l1.4 -0.04 l4.9 0 q0 0.64 -0.06 0.98 q-0.22 1.28 -1.72 1.28 l-5.62 0 q-0.72 0 -1.13 -0.43 t-0.41 -1.17 l0 -11.96 l0.14 -0.14 l8.34 0 q0.1 0.5 0.1 1.07 t-0.22 1.19 l-5.72 0 l0.02 1.38 l0 2.06 l1.3 -0.02 l3.38 0 q0.16 0.46 0.16 1.1 t-0.16 1.1 l-4.68 0 l0 2.36 z M69.12 10.46 q0 0.66 -0.19 1.25 t-0.53 1.06 t-0.79 0.82 t-0.99 0.53 q0.52 0.18 0.87 0.62 t0.61 1.14 l0.74 2.02 q0.18 0.5 0.4 0.86 t0.54 0.6 q-0.26 0.36 -0.75 0.58 t-1.11 0.22 q-0.6 0 -0.96 -0.36 t-0.66 -1.22 l-0.84 -2.38 q-0.26 -0.7 -0.66 -1.07 t-1.2 -0.37 l-1.22 0 l0 5.24 q-0.28 0.04 -0.62 0.07 t-0.74 0.03 q-0.74 0 -1.3 -0.1 l0 -13.56 l0.14 -0.12 q1.62 -0.04 2.75 -0.06 t1.81 -0.02 q2.16 0 3.43 1.08 t1.27 3.14 z M62.38000000000001 8.28 l0 4.4 q1.04 -0.06 1.84 -0.06 q2.14 0 2.14 -2.16 t-2.14 -2.16 l-1.07 0 t-0.77 -0.02 z M78.74000000000001 16.9 l-0.98 0.02 l-2.8 0 l-0.98 -0.02 l-0.94 3.12 q-0.42 0.1 -1.19 0.1 t-1.25 -0.18 l-0.1 -0.14 l4.46 -13.46 q0.74 -0.1 1.6 -0.1 t1.5 0.12 l4.38 13.46 q-0.58 0.34 -1.39 0.34 t-1.16 -0.3 t-0.59 -1.14 z M74.64000000000001 14.780000000000001 l0.9 -0.02 l1.72 0 l0.84 0.02 l-0.6 -2.04 q-0.68 -2.28 -1.08 -3.88 l-0.12 0 q-0.18 0.86 -0.88 3.38 z M88.9 15.46 l-1.84 0 l0 4.54 q-0.56 0.1 -1.34 0.1 t-1.34 -0.1 l0 -13.56 l0.14 -0.12 q1.62 -0.04 2.71 -0.06 t1.67 -0.02 q2.16 0 3.45 1.18 t1.29 3.42 q0 1.12 -0.34 1.98 t-0.96 1.44 t-1.49 0.89 t-1.95 0.31 z M87.06000000000002 8.32 l0 5.1 q0.78 -0.02 1.33 -0.02 t0.94 -0.07 t0.66 -0.26 t0.49 -0.57 q0.2 -0.34 0.3 -0.77 t0.1 -0.87 q0 -0.46 -0.1 -0.91 t-0.34 -0.81 t-0.64 -0.58 t-1 -0.22 l-1.01 0 t-0.73 -0.02 z M96.02000000000001 20 l0 -13.66 q0.5 -0.1 1.31 -0.1 t1.37 0.1 l0 13.66 q-0.56 0.1 -1.37 0.1 t-1.31 -0.1 z M100.86000000000001 18.8 q0.06 -0.56 0.37 -1.13 t0.71 -0.91 q2.06 1.32 4.04 1.32 q0.96 0 1.52 -0.45 t0.56 -1.13 q-0.04 -1.16 -1.54 -1.82 l-2.36 -1 q-1.4 -0.58 -2.1 -1.49 t-0.7 -2.09 q0 -0.9 0.35 -1.64 t1 -1.27 t1.54 -0.83 t1.97 -0.3 q2.2 0 4.32 1.1 q-0.06 1.22 -0.94 2.04 q-2.02 -0.96 -3.52 -0.96 q-0.96 0 -1.47 0.44 t-0.51 1.08 q0 0.92 1.42 1.52 l2.36 1 q1.44 0.6 2.22 1.58 t0.78 2.26 q0 0.9 -0.32 1.67 t-0.97 1.32 t-1.62 0.86 t-2.29 0.31 q-2.56 0 -4.82 -1.48 z M117.90000000000002 8.56 l0.02 1.48 l0 9.96 q-0.58 0.1 -1.35 0.1 t-1.35 -0.1 l0 -9.96 l0.02 -1.48 l-1.22 0.02 l-2.22 0 q-0.1 -0.5 -0.1 -1.12 t0.1 -1.12 l9.56 0 q0.14 0.5 0.14 1.09 t-0.34 0.87 t-1.1 0.28 l-0.94 0 l-1.22 -0.02 l0 0 z"></path>
                  </g>
                  <g
                    id="SvgjsG4958"
                    transform="matrix(0.6893646339827858,0,0,0.6893646339827858,56.58638128535326,184.02925955047613)"
                    fill="url(#SvgjsLinearGradient4965)"
                  >
                    <path d="M12.7 6 l-5.22 7.54 l0 6.46 l-1.66 0 l0 -6.46 l-5.22 -7.54 l1.9 0 l4.14 6.02 l4.16 -6.02 l1.9 0 z M31.548000000000002 5.800000000000001 c3.64 0 7.16 2.96 7.16 7.2 s-3.52 7.2 -7.16 7.2 c-3.66 0 -7.16 -2.96 -7.16 -7.2 s3.5 -7.2 7.16 -7.2 z M31.548000000000002 18.62 c2.74 0 5.44 -2.32 5.44 -5.62 s-2.7 -5.62 -5.44 -5.62 c-2.76 0 -5.44 2.32 -5.44 5.62 s2.68 5.62 5.44 5.62 z M59.495999999999995 6 l1.66 0 l0 8.92 c0 3.44 -2.24 5.38 -5.08 5.38 s-5.08 -1.94 -5.08 -5.38 l0 -8.92 l1.66 0 l0 8.92 c0 2.62 1.56 3.8 3.42 3.8 s3.42 -1.18 3.42 -3.8 l0 -8.92 z M84.024 20 l-1.8 0 l-3.54 -5.04 l-0.38 0 l-2.9 0 l0 5.04 l-1.66 0 l0 -14 l4.56 0 c3.14 0 4.96 1.92 4.96 4.52 c0 2 -1.08 3.56 -3 4.16 z M75.404 7.5600000000000005 l0 5.92 l2.86 0 c2.02 0 3.34 -1.04 3.34 -2.96 c0 -1.94 -1.32 -2.96 -3.34 -2.96 l-2.86 0 z M116.5 5.76 c2.18 0 3.78 1.44 4.38 2.94 l-1.26 0.68 c-0.64 -1.28 -1.66 -2.12 -3.12 -2.12 c-1.54 0 -2.6 0.88 -2.6 2.1 c0 1.14 0.72 1.86 2.24 2.44 l1.02 0.38 c2.52 0.94 4.1 2.02 4.1 4.24 c0 2.4 -2.3 3.88 -4.68 3.88 s-4.34 -1.44 -4.88 -3.44 l1.34 -0.64 c0.48 1.48 1.74 2.56 3.54 2.56 c1.6 0 2.96 -0.92 2.96 -2.34 c0 -1.6 -1.12 -2.2 -2.78 -2.84 l-1.04 -0.4 c-2.12 -0.8 -3.48 -1.9 -3.48 -3.88 c0 -2.04 1.8 -3.56 4.26 -3.56 z M144.668 20 l-1.44 -3.3 l-7.48 0 l-1.44 3.3 l-1.76 0 l6.24 -14 l1.38 0 l6.26 14 l-1.76 0 z M136.368 15.3 l6.24 0 l-3.12 -7.12 z M166.476 7.5 l-6.56 0 l0 4.74 l5.42 0 l0 1.42 l-5.42 0 l0 6.34 l-1.7 0 l0 -14 l8.26 0 l0 1.5 z M180.224 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M219.91999999999996 6 c3.14 0 4.96 1.92 4.96 4.52 s-1.82 4.44 -4.96 4.44 l-2.9 0 l0 5.04 l-1.66 0 l0 -14 l4.56 0 z M219.87999999999997 13.48 c2.02 0 3.34 -1.04 3.34 -2.96 c0 -1.94 -1.32 -2.96 -3.34 -2.96 l-2.86 0 l0 5.92 l2.86 0 z M238.628 18.44 l6.28 0 l0 1.56 l-7.94 0 l0 -14 l1.66 0 l0 12.44 z M268.41599999999994 20 l-1.44 -3.3 l-7.48 0 l-1.44 3.3 l-1.76 0 l6.24 -14 l1.38 0 l6.26 14 l-1.76 0 z M260.116 15.3 l6.24 0 l-3.12 -7.12 z M293.52399999999994 18.5 c-1.28 1.1 -2.9 1.7 -4.7 1.7 c-3.64 0 -7.16 -2.96 -7.16 -7.2 s3.52 -7.2 7.16 -7.2 c1.78 0 3.38 0.6 4.64 1.66 l-1.02 1.16 c-0.98 -0.78 -2.24 -1.24 -3.5 -1.24 c-2.86 0 -5.56 2.32 -5.56 5.62 s2.7 5.62 5.56 5.62 c1.28 0 2.56 -0.48 3.54 -1.28 z M307.272 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z"></path>
                  </g>
                </svg> */}
                {`AI Therapist`}
              </Link>

              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center outline-black"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden md:block w-full md:w-auto"
                id="mobile-menu"
              >
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium">
                  <li>
                    <Link
                      href="/"
                      className="md:bg-transparent text-gray-700 hover:bg-gray-50 block pl-3 pr-4 py-2 md:text-cyan-900 md:p-0 rounded focus:outline-none"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/meditate"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-700 md:p-0"
                    >
                      Meditate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chatAI"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-700 md:p-0"
                    >
                      AI-Therapist
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/alone"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-700 md:p-0"
                    >
                      Alone
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disclaimer"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-700 md:p-0"
                    >
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/connect"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-700 md:p-0"
                    >
                      Connect
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></Script>

        <main className="flex-grow py-7">{children}</main>

        <footer className="mt-auto w-full">
          <div className="flex flex-row justify-center items-center">
            <div className="flex-1">
              <div className="flex flex-row grow gap-1">
                <p className="text-sm text-gray-500">© 2023 AI Therapist</p>
                <p className="text-sm text-gray-500"> | </p>
                <Link href="/about" className="text-sm text-gray-500">
                  About
                </Link>
                <p className="text-sm text-gray-500"> | </p>
                <Link href="/mission" className="text-sm text-gray-500">
                  Mission
                </Link>
              </div>
            </div>
            <Link
              href="https://twitter.com/AiTherapist"
              className="text-sm text-gray-500"
              target="_blank"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/selftherapistai/"
              className="text-sm text-gray-500"
              target="_blank"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
