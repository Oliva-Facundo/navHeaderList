import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul className="block list-disc my-4 px-20">
          <li className="bg-green-200 w-[50px] h-[50px] list-none relative flex justify-center duration-300 my-5 rounded-full">
            <i className="ai-home-alt1 text-[18px] duration-300 py-3"></i>
            <a href="#" className="absolute p-0 w-[50px] h-[50px] group-[]: ">
              <span className="text-[15px] absolute top-0 right-0 opacity-0 text-black leading-[50px] font-medium transition-all duration-300 rounded-3xl uppercase h-[50px] px-[30px] my-4">
                Inicio
              </span>
            </a>
          </li>
          <li className="bg-green-200 w-[50px] h-[50px] list-none relative flex justify-center duration-300 my-5 rounded-full">
            <i className="ai-person text-[18px] duration-300 py-3"></i>
            <a href="#" className="absolute p-0 w-[50px] h-[50px] group-[]: ">
              <span className="text-[15px] absolute top-0 right-0 opacity-0 text-black leading-[50px] font-medium transition-all duration-300 rounded-3xl uppercase max-h-[50px] px-[30px] my-4">
                Acerca
              </span>
            </a>
          </li>
          <li className="bg-green-200 w-[50px] h-[50px] list-none relative flex justify-center duration-300 my-5 rounded-full">
            <i className="ai-briefcase text-[18px] duration-300 py-3"></i>
            <a href="#" className="absolute p-0 w-[50px] h-[50px] group-[]: ">
              <span className="text-[15px] absolute top-0 right-0 opacity-0 text-black leading-[50px] font-medium transition-all duration-300 rounded-3xl uppercase h-[50px] px-[30px] my-4">
                Proyectos
              </span>
            </a>
          </li>
          <li className="bg-green-200 w-[50px] h-[50px] list-none relative flex justify-center duration-300 my-5 rounded-full">
            <i className="ai-envelope text-[18px] duration-300 py-3"></i>
            <a href="#" className="absolute p-0 w-[50px] h-[50px] group-[]: ">
              <span className="text-[15px] absolute top-0 right-0 opacity-0 text-black leading-[50px] font-medium transition-all duration-300 rounded-3xl uppercase h-[50px] px-[30px] my-4">
                Contacto
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
