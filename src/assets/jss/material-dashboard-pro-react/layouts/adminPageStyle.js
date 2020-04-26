import { primaryColor, whiteColor } from "assets/jss/material-dashboard-pro-react.js";

const pagesStyle = theme => ({
  root: {
    backgroundColor: "#fff !important",
    padding: "54px 0",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"
  },

  dialogRoot: {
    padding: "20px !important"
  },

  center: {
    textAlign: "center"
  },
  firstOuterColumn: {
    border: "0 solid #ddd",
    borderRightWidth: "1px",
    [theme.breakpoints.down("xs")]: {
      borderWidth: "0 0 1px"
    }
  },
  sectionTitle: {
    marginTop: "0",
    lineHeight: "34px",
    fontSize: "30px",
    fontWeight: "800",
    color: "#4F4F4F",
    textAlign: "center"
  },

  visaTitle: {
    marginTop: "45px",
    lineHeight: "21px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#4F4F4F",
    textAlign: "center"
  },

  summariesWrapper: {
    width: "100% !important",
    padding: "80px 40px"
  },
  summarySection: {
    background: primaryColor,
    padding: "10px",
    borderRadius: "8px"
  },

  summaryTitle: {
    marginTop: "0",
    color: whiteColor,
    textAlign: "center",
    fontFamily: "Roboto",
    // font-style: normal;
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "19px",
    textTransform: "uppercase"
  },
  summaryLeftSection: {
    paddingRight: "48px"
  },
  summaryRightSection: {
    paddingLeft: "48px"
  },

  // FIXME Copied from AssetsListItemStyle
  assetListStyle: {
    backgroundColor: "#f1f1f1",
    padding: "1rem 1.5rem",
    marginBottom: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"
    }
  },
  leftGrid: {
    fontSize: "1rem",
    textAlign: "left"
  },
  rightGrid: {
    fontSize: "1rem",
    textAlign: "center"
  },
  dividerStyle: {
    marginBottom: "1.5rem"
  },
  quantityStyle: {
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  titleStyle: {
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  chipFilter: {
    marginTop: "0.5rem"
  },
  chipStyle: {
    marginTop: "0.5rem",
    borderRadius: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5rem"
    }
  },
  createContact: {
    padding: "16px 40px",
    fontSize: "0.9375rem",
    marginLeft: "53px",
    backgroundColor: "#e35756",
    color: "#fff",
    borderRadius: "8px",
    "&:hover": {
      color: "#000"
    }
  },
  visaAllaBtn: {
    padding: "20px",
    fontSize: "13px",
    fontWeight: "300",
    lineHeight: "15px",
    width: "168px",
    minHeight: "50px",
    backgroundColor: "#C4C4C4",
    color: "#000",
    borderRadius: "8px",
    "&:hover": {
      color: "#000"
    }
  },
  assetsPadding: {
    paddingTop: "20px"
  },
  createContactHeader: {
    fontFamily: "Montserrat",
    fontSize: "40px",
    fontWeight: "800",
    lineHeight: "49px"
  },
  subheader: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000"
  },
  orderCreator: {
    paddingTop: "20px",
    marginBottom: "45px"
  }
});

export default pagesStyle;
