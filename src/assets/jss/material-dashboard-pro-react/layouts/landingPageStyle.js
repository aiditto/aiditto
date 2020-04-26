import { containerFluid } from "assets/jss/material-dashboard-pro-react.js";

const pagesStyle = theme => ({
  root: {
    // clearfix for RightLandingPage
    "&:before,&:after": {
      content: "''",
      display: "table"
    },
    "&:after": {
      clear: "both"
    }
  },

  introSection: {
    ...containerFluid,
    paddingTop: "82px",
    paddingRight: "62px",
    paddingLeft: "62px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "32px",
      paddingLeft: "32px"
    }
  },

  lowerSection: {
    margin: "50px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },

  landingHeaderText: {
    color: "white",
    fontSize: "30px",
    lineHeight: "34px",
    fontWeight: "800"
  },

  introText: {
    marginTop: "22px",
    lineHeight: "26px",
    color: "white",
    fontSize: "22px"
  },
  lowerHeaderText: {
    color: "white",
    fontSize: "30px",
    lineHeight: "34px",
    fontWeight: "800",
    width: "90%",
    maxWidth: "90%",
    textAlign: "left",
    paddingLeft: "60px"
  },
  lowerText: {
    marginTop: "22px",
    lineHeight: "26px",
    color: "white",
    fontSize: "22px",
    width: "90%",
    maxWidth: "90%",
    textAlign: "left",
    paddingLeft: "60px"
  },
  lowerAlign: {
    alignSelf: "center!important"
  },

  humansImage: {
    width: "80%",
    maxWidth: "300px",
    margin: "30px 0",
    verticalAlign: "top"
  },

  maskImage: {
    width: "80%",
    maxWidth: "400px",
    margin: "15px 0",
    paddingLeft: "30px"
  },

  landingButton: {
    marginTop: "20px",
    height: "50px",
    color: "#c73737",
    fontFamily: "'Montserrat', Arial, sans-serif",
    fontSize: "1.2em",
    fontWeight: "600",
    textTransform: "none",
    backgroundColor: "#fdb4b4",
    borderRadius: "9px",
    boxShadow: "none",
    padding: "5px 23px"
  },
  map: {
    margin: "40px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});

export default pagesStyle;
