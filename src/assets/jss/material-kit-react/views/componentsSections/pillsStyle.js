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
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

export default pillsStyle;
