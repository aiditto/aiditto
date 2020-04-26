import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& .MuiInput-underline:before": {
      borderBottom: "unset"
    },
    "& .MuiFormLabel-root": {
      color: "#D8D8D8"
    },
    "& .MuiInputLabel-formControl": {
      position: "unset"
    },
    "& .MuiInputLabel-asterisk": {
      color: "transparent"
    }
  },
  label: {
    "& .MuiFormLabel-root": {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "49px"
    }
  },
  breadText: {
    "& .MuiFormLabel-root": {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "23px"
    }
  },
  btnWrapper: {
    marginTop: "3em",
    textAlign: "right !important",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    "& .MuiButton-root": {
      fontWeight: "400"
    }
  },
  btnColor: {
    backgroundColor: "#e35756 !important"
  }
}));

export default function AddNews() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  // type validation
  const [disabled, setDisabled] = useState(true);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid item xs={12}>
          <TextField className={classes.label} required id="standard-full-width" label="Titel" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.breadText}
            required
            id="standard-multiline-flexible"
            label="Brödtext"
            multiline
            fullWidth
            value={value}
            onChange={handleChange}
          />
        </Grid>
      </form>
      <Grid item xs={12} className={classes.btnWrapper}>
        <Button square="true" className={classes.btnColor}>
          Skapa post
        </Button>
      </Grid>
    </div>
  );
}
