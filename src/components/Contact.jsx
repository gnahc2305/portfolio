import React from "react";

function Contact({ mode, language }) {
  return (
    <div className="flex flex-col mb-10 mx-5 mt-[120px]">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/4045b2a2-0f11-473e-b960-e8e9a81111c9"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <h1
            className={`text-[40px] mb-[5px] ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          >
            {language === 'english' ? 'Contact' : 'Contáctame'}
          </h1>
          <input
            type="text"
            name="name"
            placeholder={language === 'english' ? 'Name' : 'Nombre'}
            className={`p-2 bg-transparent border-2 border-stone-900 rounded-md focus:outline-none ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={`my-2 p-2 bg-transparent border-2 border-stone-900 rounded-md focus:outline-none ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          />
          <textarea
            name="message"
            placeholder={language === 'english' ? 'Message' : 'Mensaje'}
            rows="10"
            className={`p-2 mb-4 bg-transparent border-2 border-stone-900 rounded-md focus:outline-none ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          />
          <button
            // type='button'
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-black"
          >
            {language === 'english' ? 'Submit' : 'Mandar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
