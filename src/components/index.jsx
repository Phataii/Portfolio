import { GiWindSlap } from "react-icons/gi";
import { FiCodesandbox } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3Full } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiExpress } from "react-icons/si";
function Index() {
  return (
    <div className="">
      {/* <img src={require("../img/star.png")} alt="Logo" className="" /> */}

      {/* Nav section */}
      <nav>
        <div className="flex justify-around">
          <div className="md:ml-28 mt-2">
            <img
              src={require("../img/logo.png")}
              alt="Logo"
              className="h-16 w-24"
              width=""
            />
          </div>

          <ul className="flex mt-4">
            <li className="mr-5 text-primary p-2 ">About</li>
            <li className="mr-5 p-2 ">Works</li>
            <li className="mr-5 p-2 ">Contact</li>
            <li className="mr-5 p-2 border-2 border-primary hover:bg-primary w-32 h-12 text-center">
              My Resmue
            </li>
          </ul>
        </div>
        <span>
          <svg
            class="w-6 h-6 cursor-pointer md:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </span>
      </nav>
      {/* Home Section */}
      <section className="grid md:grid-cols-2 mt-16">
        <div className="md:col-span-1 hidden md:block">
          <div className="">
            <img
              src={require("../img/bg1.png")}
              alt="Logo"
              className="ml-20"
              width="60%"
            />
          </div>
        </div>
        <div className="md:col-span-1 mt-20 ml-20">
          <p>Yup!!! You found me😃</p>
          <p>I'm</p>
          <h2 className="text-primary text-bold text-3xl mb-3">
            SANNI ABDULFATAI.
          </h2>
          <h4 className="text-5xl uppercase text-primary">
            I bring ideas and imaginations to life.
          </h4>
          <p className="mb-2">
            I am a full stack developer who build software application
          </p>
          <button className="bg-primary border-2  p-2 hover:bg-transparent border-primary w-48">
            Get in touch{" "}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-16">
        <div className="grid md:grid-cols-2 mx-16 bg-neutral-900">
          <div className="md:col-span-1 mx-10">
            <h1 className="mt-48 text-4xl">About Me</h1>

            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              deserunt voluptate saepe, accusamus atque consequuntur odio illo
              natus quis provident ut labore aspernatur veritatis maiores ea eum
              maxime omnis. Qui!
            </p>
            <br />
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              deserunt voluptate saepe, accusamus atque consequuntur odio illo
              natus quis provident ut labore aspernatur veritatis maiores ea eum
              maxime omnis. Qui!
            </p>
          </div>
          <div className="md:col-span-1 hidden md:block">
            <div>
              <img
                src={require("../img/programmer.png")}
                alt="Logo"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Job Section */}
      <section className="mt-32">
        <h1 className="text-center text-4xl mt-10">What I Offer</h1>
        <div className="grid md:grid-cols-3">
          <div className="text-center">
            <FiCodesandbox className="text-primary text-10xl ml-48" />
            <h3 className="font-bold text-2xl">Aesthetics</h3>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              repellendus mollitia. Quos voluptatibus officiis velit quasi eum
              deserunt magni excepturi, sequi, aut ad nesciunt dolorem ut quae
              nobis commodi impedit.
            </p>
          </div>
          <div className="text-center">
            <FaCode className="text-primary text-10xl ml-48" />
            <h3 className="font-bold text-2xl">Creativity</h3>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              repellendus mollitia. Quos voluptatibus officiis velit quasi eum
              deserunt magni excepturi, sequi, aut ad nesciunt dolorem ut quae
              nobis commodi impedit.
            </p>
          </div>
          <div className="text-center">
            <GiWindSlap className="text-primary text-10xl ml-48" />
            <h3 className="font-bold text-2xl">Speed</h3>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              repellendus mollitia. Quos voluptatibus officiis velit quasi eum
              deserunt magni excepturi, sequi, aut ad nesciunt dolorem ut quae
              nobis commodi impedit.
            </p>
          </div>
        </div>
      </section>
      {/* Tech Section */}
      <section>
        <h1 className="text-center text-4xl mb-20">Tech I Use</h1>
        <div id="default-carousel" class="relative" data-carousel="static">
          <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
              data-carousel-item=""
            >
              <div className="md:grid md:grid-cols-6">
                <FaReact className="text-primary text-10xl ml-16" />
                <FaNode className="text-primary text-10xl ml-16" />
                <SiExpress className="text-primary text-10xl ml-16" />
                <SiMongodb className="text-primary text-10xl ml-16" />
                <SiTailwindcss className="text-primary text-10xl ml-16" />
                <DiJavascript className="text-primary text-10xl ml-16" />
              </div>
            </div>
            <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
              data-carousel-item=""
            >
              <div className="md:grid md:grid-cols-6">
                <TiHtml5 className="text-primary text-10xl ml-16" />
                <DiCss3Full className="text-primary text-10xl ml-16" />
                <SiBootstrap className="text-primary text-10xl ml-16" />
                <SiCsharp className="text-primary text-10xl ml-16" />
                <FaGitAlt className="text-primary text-10xl ml-16" />
              </div>
            </div>
          </div>

          <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="">
        
        <div className="grid md:grid-cols-2 mx-16 bg-neutral-900">
          <div>
          
            <form className="mt-24 mx-5">
            <h2 className=" text-5xl mb-10">Let's Talk</h2>
            <h2>Send me a message via esanni5@gmail.com or fill the form below</h2>
            <input
                type="text"
                placeholder="Name"
                className="border-t-0 border-r-0 border-l-0 text-gray-900 border-primary w-full mt-1 mb-3 bg-transparent"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                className="border-t-0 border-r-0 border-l-0 text-gray-900 border-primary w-full mt-1 mb-3 bg-transparent"
              />
              <br />
              <textarea
                type="text"
                placeholder="Message"
                className="border-t-0 border-r-0 border-l-0 text-gray-900 border-primary w-full mb-3 mt-6 bg-transparent"
              />
              <br />
              <button type="submit" className="bg-primary font-bold p-2 w-1/5">Submit</button>
            </form>
          </div>

          <div>
            <img
              src={require("../img/contact.png")}
              alt="Logo"
              className=""
              width="80%"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
