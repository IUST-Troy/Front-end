import React from "react";
import Typewriter from "typewriter-effect";

function Typewriters() {
  return (
    <div className="container md:flex text-xl font-bold dark:text-white text-black">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["your ultimate travel companion. We offer a wide range of travel services and experiences to help you plan your next adventure <br> Explore our website to find the best deals and start planning your dream vacation today!"]
          }}
        />
      </h1>
    </div>
  );
}

export default Typewriters;
