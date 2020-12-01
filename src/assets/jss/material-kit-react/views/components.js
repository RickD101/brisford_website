import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "800px",
    margin: "10px 0 0",
    fontStyle: "italic"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    minHeight: "200px"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  '@media (max-width: 1199px)': {
    title: {
      fontSize: "2.5rem"
    },
    subtitle: {
      fontSize: "1.2rem"
    }
  },
  '@media (max-width: 991px)': {
    title: {
      fontSize: "2.2rem"
    },
    subtitle: {
      fontSize: "1.1rem"
    }
  },
  '@media (max-width: 767px)': {
    title: {
      fontSize: "1.6rem"
    },
    subtitle: {
      fontSize: "1rem"
    }
  }
};

export default componentsStyle;
