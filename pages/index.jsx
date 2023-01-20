import Head from "next/head";
import { useEffect } from "react";
import {
  About,
  Main,
  Navbar,
  Sponsors,
  Tracks,
  Rules,
  Timeline,
  Footer,
  FAQ,
  DevfolioPrizes,
  Prizes,
} from "../components";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>HACKGLB 23 | Hackathon</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <script
          defer
          data-domain=""
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <div className="flex flex-col gap-1">
      <div class="page-bg"></div>
        <Navbar />
        
        <div class="container">
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
</div>


       
         <Main />
        
        
        <About />
        
        <Timeline />
        <Prizes />
        <DevfolioPrizes />
        <Rules />
        <Tracks />
        <Sponsors />
        <FAQ />
        <Footer />
        
      </div>
    </>
  );
};
