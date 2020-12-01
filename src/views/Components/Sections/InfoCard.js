import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle
};

const useStyles = makeStyles(styles);

export default function InfoCard(props) {
  const classes = useStyles();
  return (
    <Card style={{width: "18rem"}}>
      <CardBody>
        <h4 className={classes.cardTitle}>{props.cardTitle}</h4>
        <p>
          {props.cardContent}
        </p>
      </CardBody>
    </Card>
  );
}