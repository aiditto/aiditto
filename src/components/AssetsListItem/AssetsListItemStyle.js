import { primaryColor } from "assets/jss/material-dashboard-pro-react.js";
const styles = theme => ({
  assetListStyle: {
    backgroundColor: "#f1f1f1",
    padding: "1rem 1.5rem",
    marginBottom: "15px",
    borderRadius: "8px",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)"
    }
  },
  center: {
    textAlign: "center"
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
  leftGrid: {
    fontSize: "1rem",
    textAlign: "left"
  },
  rightGrid: {
    fontSize: "1rem",
    textAlign: "center"
  },
  quantityStyle: {
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  titleStyle: {
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  chipStyle: {
    borderRadius: "0.5rem",
    marginRight: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5rem"
    }
  },
  dividerStyle: {
    marginBottom: "0.5rem"
  },
  arrowIcon: {
    marginRight: "-25px",
    marginBottom: "-5px",
    cursor: "pointer"
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
    textAlign: "end",
    backgroundColor: "#fefefe !important"
  },
  fullAmmount: {
    textAlign: "start"
  }
});

export default styles;
