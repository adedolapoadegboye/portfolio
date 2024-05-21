import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ashok from "../images/ashok.jpeg";
import tom from "../images/tom.jpeg";
import maheeka from "../images/maheeka.jpeg";
import alhamd from "../images/alhamd.jpeg";
import maulin from "../images/maulin.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";

const Recommendations = () => {
  return (
    <div
      id="recommendations"
      className="flex flex-col gap-16 md:gap-20 pb-10 text-justify"
    >
      {" "}
      <div className="flex flex-col gap-16 md:gap-20 pb-10 text-justify">
        <h1 className="font-extrabold text-slate-200 text-lg md:text-2xl">
          Recommendations
        </h1>
        <div className="h-200 sm:h-200 lg:h-400 2xl:h-800">
          <div>
            <div className="flex pb-3">
              <img
                src={ashok}
                alt="Ashok Narayanan"
                width={90}
                className="rounded-full ps-3 me-3"
              ></img>
              <div>
                <a
                  href="https://www.linkedin.com/in/ashok-n-t/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-teal-300"
                >
                  <h1 className="font-bold pe-3"> Ashok Narayanan </h1>
                  <FaExternalLinkAlt size={12} />
                </a>
                <h3 className="font-light text-sm">
                  October 18, 2023, Ashok was senior to Adedolapo but didn't
                  manage Adedolapo directly
                </h3>
              </div>
            </div>
            <FaQuoteLeft size={25} />
            <h2 className="text-justify pt-3 pb-3 italic">
              Having worked with Ade for the past 2 years, I can say Ade is a
              very hard working person. We have worked together on multiple
              projects, and his enthusiasm to learn and understand the
              products/process is commendable. Ade has excellent communication
              skills and is a great team player. In a short time Ade became the
              go-to person for multiple projects and took ownership of various
              aspects of system development. He is very organized and
              prioritizes his tasks well to be able to meet the demands of
              multiple projects in a timely manner. I highly recommend Ade.
            </h2>
            <div className="flex justify-end">
              <FaQuoteRight size={25} />
            </div>
            <br></br>
            <br></br>
          </div>
          <div>
            <div className="flex pb-3">
              <img
                src={tom}
                alt="Tom Danshin"
                width={90}
                className="rounded-full ps-3 me-3"
              ></img>
              <div>
                <a
                  href="https://www.linkedin.com/in/tom-danshin-8156025/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-teal-300"
                >
                  <h1 className="font-bold pe-3"> Tom Danshin </h1>
                  <FaExternalLinkAlt size={12} />
                </a>{" "}
                <h3 className="font-light text-sm">
                  October 16, 2023, Tom managed Adedolapo directly
                </h3>
              </div>
            </div>
            <FaQuoteLeft size={25} />
            <h2 className="text-justify pt-3 pb-3 italic">
              Ade is a highly talented and motivated IoT designer with with
              great analytical skills and a strong commitment to meeting product
              deliverables. Coupled with an innovative approach to learning, Ade
              brings strong organizational skills to bear in managing multiple
              simultaneous projects. He is a strong team player and is
              comfortable filling what ever role is required, whether that is
              starting from a blank canvas or taking care of the final details
              to ensure a product is successfully delivered. Ade is an effective
              communicator within the development team and across multiple
              levels of management and is an essential contributor to the
              TEKTELIC sensor development team. It has been a pleasure to get to
              know Ade and to work with him on multiple interesting projects.
              Thank you, Ade!
            </h2>
            <div className="flex justify-end">
              <FaQuoteRight size={25} />
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="flex pb-3">
              <img
                src={alhamd}
                alt="Alhamd Khan"
                width={90}
                className="rounded-full ps-3 me-3"
              ></img>
              <div>
                <a
                  href="https://www.linkedin.com/in/alhamd-khan-srm/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-teal-300"
                >
                  <h1 className="font-bold pe-3"> Alhamd Khan </h1>
                  <FaExternalLinkAlt size={12} />
                </a>
                <h3 className="font-light text-sm">
                  October 10, 2023, Alhamd worked with Adedolapo on the same
                  team
                </h3>
              </div>
            </div>
            <FaQuoteLeft size={25} />
            <h2 className="text-justify pt-3 pb-3 italic">
              During my time at Tektelic Communications, I had the privilege of
              collaborating with Ade on the development of a GNSS-based
              asset-tracking solution. Ade exhibited outstanding proficiency in
              systems engineering, particularly in conducting comprehensive
              end-to-end product assessments and performance evaluations under
              both controlled laboratory environments and challenging field
              conditions. His unwavering commitment and dedication were pivotal
              in expediting the product's journey from conceptualization to
              successful market launch within a notably expedited timeframe. Ade
              is not only a dedicated and hardworking individual but also a
              valuable team player. I wholeheartedly endorse him for roles
              within any organization seeking a systems engineer or technical
              leader, as his expertise and work ethic make him an invaluable
              asset to any team.
            </h2>
            <div className="flex justify-end">
              <FaQuoteRight size={25} />
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="flex pb-3">
              <img
                src={maheeka}
                alt="Maheeka Wijesinghe"
                width={90}
                className="rounded-full ps-3 me-3"
              ></img>
              <div>
                <a
                  href="https://www.linkedin.com/in/maheekawijesinghe/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-teal-300"
                >
                  <h1 className="font-bold pe-3"> Maheeka Wijesinghe </h1>
                  <FaExternalLinkAlt size={12} />
                </a>{" "}
                <h3 className="font-light text-sm">
                  June 20, 2023, Maheeka worked with Adedolapo on the same team
                </h3>
              </div>
            </div>
            <FaQuoteLeft size={25} />
            <h2 className="text-justify pt-3 pb-3 italic">
              I had the pleasure of working with Ade at Tektelic, where he was
              the System Engineer for two projects I was managing. What I
              appreciated the most about having Ade on my team was how he took
              the initiative and communicated clearly. Even as a new hire, he
              showed exceptional leadership skills while navigating the complex
              and challenging demands of the projects with the rest of the
              technical team. Ade would be an asset to any team.
            </h2>
            <div className="flex justify-end">
              <FaQuoteRight size={25} />
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="flex pb-3">
              <img
                src={maulin}
                alt="Maulin Lodhia"
                width={90}
                className="rounded-full ps-3 me-3"
              ></img>
              <div>
                <a
                  href="https://www.linkedin.com/in/maulin-lodhia-p-eng-058743/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-teal-300"
                >
                  <h1 className="font-bold pe-3"> Maulin Lodhia </h1>
                  <FaExternalLinkAlt size={12} />
                </a>{" "}
                <h3 className="font-light text-sm">
                  June 19, 2023, Maulin was senior to Adedolapo but didn't
                  manage Adedolapo directly
                </h3>
              </div>
            </div>
            <FaQuoteLeft size={25} />
            <h2 className="text-justify pt-3 pb-3 italic">
              Thorough is the word that comes to mind when I think about Ade. We
              worked closely together for few months on number of projects, and
              I was constantly amazed not only by his technical systems
              engineering skills, but also by his ability and eagerness to learn
              new tools and concepts. Ade would be an asset to any team.
            </h2>
            <div className="flex justify-end">
              <FaQuoteRight size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
