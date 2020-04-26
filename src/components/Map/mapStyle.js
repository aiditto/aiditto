const pagesStyle = theme => ({
  leafletContainer: {
    width: "800px",
    height: "600px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: "400px"
    }
  }
});

export default pagesStyle;
