import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
      <Typewriter
        options={{
          strings: [
            "Developer",
            "Software Engineer",
            "MERN Stack Developer",
            "BU MSCS Student"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
        }}
      />
  );
}

export default Type;
