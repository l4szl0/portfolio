import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-blue-600">About</p>
          <h2 className="py-8">Who I Am</h2>
          <p  className="py-4 text-gray-600">I'm a career changer </p>

          <p className="py-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non atque
            perspiciatis velit cupiditate labore deserunt quis nisi vero maiores
            recusandae possimus ex nesciunt nihil, optio ducimus temporibus
            nostrum! Officia, iure.
          </p>

          <p className="py-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
            possimus incidunt accusantium exercitationem repellat repellendus
            odit tempore voluptates, eaque vitae, in magnam voluptatibus? Vel
            assumenda dolores saepe ipsum harum?
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <Image
          className="rounded-xl"
            src="/../public/assets/me.jpg"
            alt="/"
            width="350"
            height="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
