/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-phone"} /> 
            <Typography>(03) 9798 1765</Typography>
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="mailto:brisford@brisford.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-envelope"} />
            <Typography>brisford@brisford.com</Typography>
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip title={<h5 style={{textAlign: "center"}}>Factory 2, 25 Cambria RD, Victoria 3173</h5>}>
          <Button
            color="transparent"
            href="https://www.google.com/maps/place/25+Cambria+Rd,+Keysborough+VIC+3173/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-map-marker-alt"} />
            <Typography>Keysborough, VIC</Typography>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
