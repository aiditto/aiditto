import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Chip from "@material-ui/core/Chip";
// import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";

import NewDemandForm from "components/ValidationForms/NewDemandForms.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "60px"
  },
  heading: {
    fontSize: "1.1rem"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center",
    paddingTop: "0"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  expandBorder: {
    boxShadow: "unset",
    borderRadius: "8px !important",
    border: "1px solid #BDBDBD",
    padding: "4px 0 !important"
  }
}));

export default function CreateNewDemand() {
  const classes = useStyles();

  const [expandable, setExpandable] = useState(false);

  const toggleExpansionPanel = () => {
    setExpandable(!expandable);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expandable} className={classes.expandBorder}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={toggleExpansionPanel}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Skapa nytt behov</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <NewDemandForm toggleExpansion={toggleExpansionPanel} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
