import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(() => ({
  input: {
    margin: "0 0 40px 0",
    position: "relative",
    border: "unset"
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: "0 0 40px 0",
    minWidth: 290,
    position: "relative",
    border: "unset"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontFamily: "Montserrat !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "30px !important",
    lineHeight: "37px !important"
  }
}));

export default function FilterNews() {
  const classes = useStyles();
  const [origin, setNewsOrigin] = React.useState("");
  const handleChange = event => {
    setNewsOrigin(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={origin}
          onChange={handleChange}
          displayEmpty
          input={<BootstrapInput />}
          className={classes.selectEmpty}
        >
          <MenuItem value="">Visa alla kommuner</MenuItem>
          <MenuItem value={"Malmö"}>Malmö</MenuItem>
          <MenuItem value={"Lund"}>Lund</MenuItem>
          <MenuItem value={"Halmstad"}>Halmstad</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
