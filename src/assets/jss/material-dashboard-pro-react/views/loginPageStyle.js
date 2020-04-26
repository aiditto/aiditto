import {
  container,
  cardTitle,
  blackColor,
  hexToRgb,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

const loginPageStyle = theme => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  container: {
    ...container,
    zIndex: "4",
    marginTop: "15vh",
    paddingBottom: "100px"
  },
  cardLogin: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)"
  },
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    marginTop: "inherit",
    marginBottom: "inherit"
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center !important"
  },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: whiteColor
    },
    marginLeft: "5px",
    marginRight: "5px"
  },
  inputAdornment: {
    marginRight: "18px"
  },
  inputAdornmentIcon: {
    color: grayColor[6]
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  cardHeader: {
    marginBottom: "20px"
  },
  socialLine: {
    padding: "0.9375rem 0"
  },
  cardHeaderColor: {
    backgroundColor: "#333"
  },
  btnColor: {
    backgroundColor: "#e35756 !important"
  },
  errorMsg: {
    color: "red",
    textAlign: "center"
  },
  signupLink: {
    textAlign: "center",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem"
  }
});

export default loginPageStyle;
