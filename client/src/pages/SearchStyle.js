import React from 'react'

const styles = {
  // *: {},
  // *::before: {},
  // *::after: {
  //   boxSizing: "border-box",
  //   position: "relative"
  // },  

  html,
  body: {
    height: "100%",
    width: "100%",
    margin: "0",
    padding: "0",
    fontSize: "3vmin"

  },

  html: {
    background: "#151515",
    color: "#fff",
    overflow: "hidden"
  },

  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  slides: {
    display: "grid",
    slide: {gridArea: "1 / -1"}
  },

  button: {
    appearance: "none",
    background: "transparent",
    border: "none",
    color: "white",
    position: "absolute",
    fontSize: "5rem",
    width: "5rem",
    height: "5rem",
    top: "30%",
    transition: "opacity 0.3s",
    opacity: "0.7",
    zIndex: "5",

    hover: {
      opacity: "1",
    },

    focus: {
      outline: "none"
    },

    firstChild: {
      left: "-50%"
    },
    lastChild: {
      right: "-50%"
    }
  },


  // .slide {
    //transform-style: preserve-3d;
    // border: solid 1px red;

    // &[data-active] {
    //   .slideContent > * {
    //     transform: none;
    //     opacity: 1;
    //   }
    // }
  // }

  slideContent: {
    width: "30vw",
    height: "40vw",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    transition: "transform 0.5s ease-in-out",
    opacity: "0.7",

    display: "grid",
    alignContent: "center",

    transformStyle: "preserve-3d",
    // transform: "perspective(1000px) translateX(calc(100% * var(--offset)))
    //   rotateY(calc(-45deg * var(--dir)))",
  },

  slideContentInner: {
    transformStyle: "preserve-3d",
    transform: "translateZ(2rem)",
    transition: "opacity 0.3s linear",
    textShadow: "0 0.1rem 1rem #000",
    opacity: "0",

    slideSubtitle,
    slideTitle: {
      fontSize: "2rem",
      fontWeight: "normal",
      letterSpacing: "0.2ch",
      textTransform: "uppercase",
      margin: "0"
    },

  // slideSubtitle ::before: {
  //   content: "— "
  // }

    slideDescription: {
      margin: "0",
      fontSize: "0.8rem",
      letterSpacing: "0.2ch"
    },
  },

  slideBackground: {
    position: "fixed",
    top: "0",
    left:" -10%",
    right: "-10%",
    bottom: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: "-1",
    opacity: "0",
    transition: "opacity 0.3s linear, transform 0.3s ease-in-out",
    pointerEvents: "none",

    transform: "translateX(calc(10% * var(--dir)))"
  },

  // slide data-active
  slide: {
    zIndex: "2",
    pointerEvents: "auto",

    slideBackground: {
      opacity: "0.2",
      transform: "none"
    },

    slideContentInner: {
      opacity: "1"
    },

    slideContent: {
      x: "calc(var(--px) - 0.5)",
      y: "calc(var(--py) - 0.5)",
      opacity:" 1",

      transform: "perspective(1000px)",

      hover: {
        transition: "none"
        // transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
        //   rotateX(calc(var(--y) * -45deg));
      }
    }
  }
}

const SearchStyle = () => {
  return (
    <div>

    </div>
  )
}

export default SearchStyle
