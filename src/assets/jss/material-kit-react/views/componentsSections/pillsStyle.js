import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "50px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  infoText: {
    fontSize: "1.2rem",
    lineHeight: "1.6rem"
  },
  tab: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    maxHeight: "700px",
    width: "100%"
  },
  '@media (max-width: 1279px)': {
    tab: {
      maxHeight: "900px",
    }
  },
  '@media (max-width: 991px)': {
    tab: {
      maxHeight: "2000px",
    }
  }
};

export default pillsStyle;
