import { primaryColor, whiteColor } from "assets/jss/material-dashboard-pro-react.js";

const styles = theme => ({
  summarySection: {
    background: primaryColor,
    padding: "10px",
    borderRadius: "8px",
    marginTop: "5rem"
  },
  summaryTitle: {
    color: whiteColor,
    fontFamily: "Roboto",
    // font-style: normal;
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "19px",
    textTransform: "uppercase"
  },
  demandDetailesStyle: {
    backgroundColor: "#f1f1f1",
    padding: "1rem 1.5rem",
    marginBottom: "15px",
    borderRadius: "8px !important",
    cursor: "pointer",
    boxShadow: "unset",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"
    }
  },
  titleStyle: {
    fontWeight: 600,
    fontSize: "1.125rem",
    wordBreak: "break-word"
  },
  dividerStyle: {
    marginBottom: "1.5rem"
  },
  assetListStyle: {
    backgroundColor: "#f1f1f1",
    padding: "1rem 1.5rem",
    marginBottom: "15px",
    borderRadius: "8px",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"
    }
  },
  dialog: {
    padding: "20px !important"
  },
  formDialogTitle: {
    padding: "16px 24px 0 24px !important"
  },
  h6: {
    fontFamily: "Montserrat !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "40px !important",
    lineHeight: "49px !important"
  },
  h7: {
    fontFamily: "Montserrat !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "30px !important",
    lineHeight: "37px !important",
    marginBottom: "35px"
  },
  spara: {
    padding: "10px 30px",
    fontSize: "14px",
    lineHeight: "19px",
    marginTop: "10px",
    backgroundColor: primaryColor,
    color: "#fff",
    borderRadius: "8px",
    "&:hover": {
      color: "#000"
    }
  },
  ammount: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "40px",
    lineHeight: "49px"
  },
  partAmmount: {
    textAlign: "end"
  },
  fullAmmount: {
    textAlign: "start"
  },
  createContact: {
    padding: "16px 40px",
    fontSize: "0.9375rem",
    backgroundColor: "#e35756",
    color: "#fff",
    borderRadius: "8px",
    "&:hover": {
      color: "#000"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px"
    }
  },
  mobileFix: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center !important"
    }
  }
});

export default styles;
