import React from "react";
import { DisclosureComponent } from "./DisclosureComponent";

export const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto gap-10" id="faqs">
      <h1 className="text-center text-glow text-4xl md:text-6xl max-w-[15ch] mx-auto font-semibold text-white pb-8">
        frequently asked questions
      </h1>
      <div className="mx-auto rounded-2xl transition-all delay-100 ease-in my-12">
        <DisclosureComponent
          heading={"Where and how to register for HackGLB '23?"}
        >
          <p>Registrations are being accepted via the Devfolio website.</p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"Do I need to pay a registration fee for the hackathon?"}
        >
          <p>
            Like all our other events, HackGLB is also free-of-cost and you
            don’t need to pay anything to register for it. We plan to keep all
            of our future events free too.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"Can students outside GLBITM participate in HackGLB '23?"}
        >
          <p>
            Yes, this hackathon is for students studying in any college.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "Are there any solo events under HackGLB '23 or do I need to team up?"
          }
        >
          <p>
            Team up! Each team can have a minimum of 2 and maximum of 4 members.
            Each team should have one team leader, who will be responsible for
            forwarding all necessary information to his/her team.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "If we have an idea, should that be fully working, or can it have some margin for further development?"
          }
        >
          <p>
            The entirety of your idea need not be fully implemented. However,
            the submission should be functional so that it can be reviewed by
            the judges.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "Can HackGLB '23 environment allow us to code in any language or will there be an IDE and  DB provided to us?"
          }
        >
          <p>
            Any language. Make sure you constantly update your GitHub repository
            comprising your project and submit its link. Update the README.md
            with all the details about your application and the instructions to
            run the code.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"What is the mode of organization of the hackathon?"}
        >
          <p>This will be a completely offline hackathon.</p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"Will there be a demonstration of my creation?"}
        >
          <p>
            The top 20 teams, qualifying for the 2nd round will get the
            opportunity to present their work/project to the judges.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "Who will own the Intellectual Property (IP) rights of the projects that we build?"
          }
        >
          <p>
            The developer(s) will have all the rights to own the IP of the
            product. However, all the code needs to be in the public domain
            (open source) as mentioned earlier. so that it can be thoroughly
            evaluated by the judges.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"In case of further doubts, how do I approach?"}
        >
          <p>
            Write to us at{" "}
            <a
              href="mailto:shrinikclub@glbitm.ac.in"
              className="text-blue-400 hover:underline"
            >
              shrinikclub@glbitm.ac.in
            </a>{" "}
            or DM us at{" "}
            <a
              className="text-blue-400 hover:underline"
              href="https://www.instagram.com/shrinik_glbajaj/"
            >
              @shrinik_glbajaj
            </a>
          </p>
        </DisclosureComponent>
      </div>
    </div>
  );
};
