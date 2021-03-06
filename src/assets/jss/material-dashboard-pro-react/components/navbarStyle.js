import {
  containerFluid,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  boxShadow,
  drawerWidth,
  transition,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

const pagesHeaderStyle = theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginBottom: "0",
    width: "100%",
    zIndex: "1029",
    color: grayColor[6],
    border: "0",
    borderRadius: "3px",
    transition: "all 150ms ease 0s",
    display: "block"
  },
  container: {
    ...containerFluid,
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingRight: "23px",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "16px",
      paddingRight: "6px"
    }
  },
  flex: {
    flex: 1
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    marginRight: "-15px",
    paddingLeft: "0",
    listStyle: "none",
    color: blackColor,
    paddingTop: "0",
    paddingBottom: "0"
  },
  listItem: {
    float: "left",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      zIndex: "999",
      width: "100%",
      paddingRight: "15px"
    }
  },
  navLink: {
    color: blackColor,
    margin: "0 5px",
    paddingTop: "15px",
    paddingBottom: "15px",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    textDecoration: "none",
    "&:hover,&:focus": {
      color: "#353535",
      background: "rgba(" + hexToRgb(grayColor[17]) + ", 0.2)"
    }
  },
  listItemIcon: {
    marginTop: "-3px",
    top: "0px",
    position: "relative",
    marginRight: "3px",
    width: "20px",
    height: "20px",
    verticalAlign: "middle",
    color: "inherit",
    display: "inline-block"
  },
  listItemText: {
    flex: "none",
    padding: "0",
    minWidth: "0",
    margin: 0,
    display: "inline-block",
    position: "relative",
    whiteSpace: "nowrap"
  },
  navLinkActive: {
    backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.1)"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    ...boxShadow,
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    "&:before,&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      top: "0"
    },
    "&:after": {
      background: whiteColor,
      opacity: ".8"
    }
  },
  sidebarButton: {
    "&,&:hover,&:focus": {
      color: whiteColor
    }
  },
  aidLogo: {
    display: "flex",
    fontSize: "1.6em",
    fontWeight: "bold",
    fontFamily: '"Montserrat", "Arial", sans-serif',
    "&,&:hover,&:focus": {
      color: "white"
    }
  },
  cityName: {
    marginLeft: "1em",
    fontSize: ".7em",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      marginLeft: ".5em"
    }
  },
  logoutBtn: {
    cursor: "pointer"
  },
  adminNavWrap: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
  },
  adminDropDown: {
    color: "white",
    position: "fixed",
    backgroundColor: primaryColor[0],
    zIndex: 1,
    borderRadius: "0 0 5px 5px"
  },
  adminDropDownLinks: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: " bold",
    fontSize: "14px",
    color: "#FFFFFF",
    "&:hover": {
      color: blackColor
    },
    "&:visited": {
      color: whiteColor
    }
  },
  navDropdownItem: {
    "&:hover": {
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.1)"
    }
  },
  adminMobileDropDown: {
    color: "black",
    "&:hover": {
      color: "gray"
    },
    "&:visited": {
      color: "black"
    }
  }
});

export default pagesHeaderStyle;
