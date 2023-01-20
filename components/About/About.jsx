import React from "react";
import { AboutRow } from "./AboutRow";
import MainImage from "../../public/images/main-img.png";

export const About = () => {
  return (
    
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      
      <AboutRow heading={"what is HackGLB'23?"} img={"./images/hackglb.png"}>
        <p>
          Our hackathon, HACKGLB is ready for it&apos;s 2023 edition. It is an
          exciting learning opportunity for students who are passionate about
          technology and are interested in solving real-world problems with
          cutting-edge solutions.
        </p>
        <p>
          With the first edition of HACKGLB &apos;23, we&apos;re
          hoping to see much more innovative, improved and effective solutions
          to the issues at hand and share them with the rest of the world by
          bringing back the community of student developers together yet again.
        </p>
      </AboutRow>
      
      <AboutRow
        heading={"About GLBITM"}
        img={"./images/gl.png"}
        isReverse
      >
        <p>GL Bajaj Institute of Technology and Management is the 6th Institute established under the prestigious banner of Rajeev Memorial Academic Welfare Society (Registered Under Societies Registration Act 1860). The institute is approved by All India Council for Technical Education (AICTE), Ministry of HRD, Govt. of India and Affiliated to Dr. A.P.J. Abdul Kalam Technical University (Formerly UPTU Lucknow).

GL Bajaj Institute of Technology and Management is one of the quality driven Educational Institute in the Greater Noida/Delhi-NCR Region. GL Bajaj stands out as one of the best engineering and management college in UP. It also stands out in its approach to assist and equip the students for their overall development, giving them a strong foundation for a successful future. The institute offers B.Tech, MBA and MCA programs.{" "}
        </p>
        <p>
          We organise various workshops and hackathons. Our goal is to build an inclusive community of
          students who want to learn about tech and grow together
          solving real world issues and improving the lives of everyone around
          us.
        </p>
      </AboutRow>
    </div>
  );
};
