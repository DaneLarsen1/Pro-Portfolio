import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
  } from "react-icons/fa";
  
  function Contact() {
    return (
      <main>
        <div className="w-screen h-screen bg-gradient-to-r from-orange-500 to-rose-600">
          <div className="w-screen flex items-center">
            <h1 className="text-4xl font-bold mb-6 mt-6 ml-[12.5%] text-white">
              Contact
            </h1>
          </div>
  
          <div className="flex justify-between px-[12.5%] bg-gradient-to-r from-[#fdfdfd] to-[#fcf9f3] w-[100%] h-[100%]">
            <div className="w-1/2 mt-[3%]">
              <h2 className="text-2xl font-bold mb-8">Find me at:</h2>
              <div className="flex flex-col space-y-6">
                <a
                  href="mailto:landonkimber33@gmail.com"
                  className="flex items-center text-gray-600 hover:text-blue-500 text-xl"
                >
                  <FaEnvelope size={32} className="mr-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/landonkimber"
                  className="flex items-center text-gray-600 hover:text-black text-xl"
                >
                  <FaGithub size={32} className="mr-4" />
                  <span>Github</span>
                </a>
                <a
                  href="https://instagram.com/landon.kimber"
                  className="flex items-center text-gray-600 hover:text-pink-500 text-xl"
                >
                  <FaInstagram size={32} className="mr-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  className="flex items-center text-gray-600 hover:text-blue-600 text-xl"
                >
                  <FaLinkedin size={32} className="mr-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://facebook.com/landon.kimber"
                  className="flex items-center text-gray-600 hover:text-blue-700 text-xl"
                >
                  <FaFacebook size={32} className="mr-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
  
            <div className="w-1/2 mt-[3%]">
              <h2 className="text-2xl font-bold mb-4">Send me a message:</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
  
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />{" "}
                </div>
  
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default Contact;