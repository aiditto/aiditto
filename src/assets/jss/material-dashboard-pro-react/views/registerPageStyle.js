import { container, cardTitle, blackColor, hexToRgb, grayColor } from "assets/jss/material-dashboard-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const registerPageStyle = {
  ...customCheckboxRadioSwitch,
  cardTitle: {
    ...cardTitle,
    textAlign: "center"
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  container: {
    ...container,
    position: "relative",
    zIndex: "3"
  },
  cardSignup: {
    position: "relative",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    marginBottom: "100px",
    padding: "40px 0px",
    marginTop: "15vh",
    "& .MuiCollapse-container": {
      width: "100%"
    }
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  form: {
    width: "100%"
  },
  socialTitle: {
    fontSize: "18px"
  },
  inputAdornment: {
    marginRight: "18px",
    position: "relative"
  },
  inputAdornmentIcon: {
    color: grayColor[6]
  },
  customFormControlClasses: {
    margin: "0 12px"
  },
  checkboxLabelControl: {
    margin: "0"
  },
  checkboxLabel: {
    fontSize: "0.875rem",
    marginLeft: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)"
  },
  btnColor: {
    backgroundColor: "#e35756 !important"
  },
  errorMsg: {
    color: "red",
    textAlign: "center"
  },
  switchStyle: {
    height: "50px"
  },
  switchButton: {
    minWidth: "70px"
  },
  inactiveButton: {
    background: "#D8D8D8",
    "&:hover": {
      backgroundColor: "#D8D8D8"
    }
  },
  activeButton: {
    background: "#E25757",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#E25757"
    }
  },
  boldSmallText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "29px",
    color: "#000000"
  },
  switchWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  registerInput: {
    margin: "0px 12px",
    width: "100% !important",
    "& .MuiAutocomplete-root": {
      paddingTop: "27px",
      width: "100% !important"
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid rgb(210, 210, 210)"
    },
    "& .MuiInputLabel-root": {
      color: "#b8b8b8"
    },
    "& input::placeholder": {
      color: "#626262",
      opacity: 1
    }
  },
  btnWrapper: {
    marginTop: "20px"
  },
  userForm: {
    width: "100%",
    "& input::placeholder": {
      color: "#626262"
    }
  },
  personIcon: {
    position: "absolute",
    top: "-40px",
    backgroundColor: "#e35756",
    color: "white",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 9px 3px rgba(0,0,0,0.55)",
    left: "5%",
    borderRadius: "9px"
  }
};

export default registerPageStyle;
