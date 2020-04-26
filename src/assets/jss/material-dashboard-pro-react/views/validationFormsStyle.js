import {
  cardTitle,
  dangerColor,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const validationFormsStyle = {
  root: {
    width: "90%"
  },
  ...customCheckboxRadioSwitch,
  cardTitle: {
    ...cardTitle,
    color: whiteColor
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  formCategory: {
    marginBottom: "0",
    color: grayColor[0],
    fontSize: "14px",
    padding: "10px 0 10px"
  },
  labelHorizontal: {
    display: "flex !important",
    alignItems: "center !important",
    float: "left",
    color: "#000"
  },
  center: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  registerButton: {
    float: "right"
  },
  danger: {
    color: dangerColor[0] + "!important"
  },
  btnWrapper: {
    textAlign: "right"
  },
  btnColor: {
    backgroundColor: "#e35756 !important"
  }
};

export default validationFormsStyle;
