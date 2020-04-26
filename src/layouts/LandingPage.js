/* eslint-disable no-unused-vars */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/landingPageStyle.js";
import { Grid, Button } from "@material-ui/core";
// core components
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//Images
import humanImage from "../assets/img/humans-illustration.svg";
import maskImage from "../assets/img/supplies.png";
import Footer from "components/Footer/Footer.js";
import RightLandingPage from "./rightLandingPage/RightLandingPage.js";

// Map
import Map from "../components/Map/map";
import wordpressService from "services/wp.service";

const useStyles = makeStyles(styles);

export default function Pages(props) {
  const { ...rest } = props;
  const [homeLeft, setHomeLeft] = useState("");
  const [homeRight, setHomeRight] = useState("");
  // ref for the wrapper div

  useEffect(() => {
    wordpressService.info("dev", "home-left", response => {
      if (response.status === 200) {
        setHomeLeft(response.data.message[0].content.rendered);
      }
    });
  }, []);

  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  return (
    <div className={classes.wrapper} ref={wrapper}>
      <div className={classes.root}>
        <RightLandingPage />

        <div className={classes.introSection}>
          <div dangerouslySetInnerHTML={{ __html: homeLeft }} className={classes.introText} />

          <Button
            className={classes.landingButton}
            variant="contained"
            href="https://mailchi.mp/357c3e59d994/join-aiditto"
          >
            Vill du följa med?
          </Button>

          <img className={classes.humansImage} src={humanImage} alt="humans" />
        </div>

        <Grid container spacing={0} className={classes.map}>
          <Grid item xs={12} sm={12} md={12}>
            <Map />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.lowerSection}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6}>
                <p className={classes.lowerText}>
                  Covid-19 har ställt många av våra etablerade resurskedjor för vårdmaterial ur spel. Vi behöver snabbt
                  forma nya kedjor och vill göra det tillsammans med er som vill och kan bidra med vårdmaterial.
                </p>
                <p className={classes.lowerText}>
                  Tack till alla Skånebor, företag och föreningar som hör av er till oss, som värnar om våramedarbetare,
                  vårdtagare och brukares säkerhet och vil hjälpa till!
                </p>
                <h1 className={classes.lowerHeaderText}>Tack för att ni vill hjälpa till!</h1>
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.lowerCenter}>
                <img className={classes.maskImage} src={maskImage} alt="masks" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
