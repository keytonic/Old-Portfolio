import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "Coder",
            "Problem-Solver",
            "Tinkerer",
            "Developer",
            "Innovator",
            "Digital Creator",
            "Programmer",
            "Techie",
            "JavaScript Junkie"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;