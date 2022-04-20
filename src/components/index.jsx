import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="">
      {/* <img src={require("../img/star.png")} alt="Logo" className="" /> */}

      {/* Nav section */}
      <nav>
        <div className="flex justify-around">
          <div className="md:ml-28 mt-2">
            {" "}
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
          <div className="bg-red-500b">
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
          <button className="bg-primary p-2 hover:bg-black hover:border-2 hover:border-primary w-48">
            Get in touch{" "}
          </button>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="grid md:grid-cols-2 mt-16">
        <div className="md:col-span-1 mt-28 ml-20">
          <p>Yup!!! You found me</p>
        
          <p>I am a full stack developer who build software application</p>
          <div>
            <button>Ring me </button>
            <button> Resume</button>
          </div>
        </div>
        <div className="md:col-span-1 hidden md:block">
          <div>
            <img
              src={require("../img/face.png")}
              alt="Logo"
              className="h-96"
            />
          </div>
        </div>
      </section> */}
      {/* Job Section */}

      {/* Contact Section */}
    </div>
  );
}

export default Index;
