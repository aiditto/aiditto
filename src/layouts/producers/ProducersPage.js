/* eslint-disable no-unused-vars */
// core components
import React from "react";
import cx from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/producerPageStyle.js";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(styles);

export default function ProducersPage(props) {
  // styles
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="flex-start" justify="flex-end">
        <Grid item xs={12} sm={12} md={6} className={classes.left}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12}>
              <h2 className={cx(classes.title, classes.whiteColor)}>Profil</h2>
              <h3 className={cx(classes.profileName, classes.whiteColor)}>Namn Efternamn</h3>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Divider className={classes.dividerStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <h4 className={cx(classes.profilInformationTitle, classes.whiteColor)}>Personlig Information</h4>
              <h5 className={cx(classes.profilInformation, classes.whiteColor)}>Namn Efternamn</h5>
              <h5 className={cx(classes.profilInformation, classes.whiteColor)}>Adress 56</h5>
              <h5 className={cx(classes.profilInformation, classes.whiteColor)}>128 56 Stockholm</h5>
              <h5 className={cx(classes.profilInformation, classes.whiteColor)}>+46 93 303</h5>
              <h5 className={cx(classes.profilInformation, classes.whiteColor)}>namn.efternamn@företag.se</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.right}>
          <h2 className={cx(classes.title, classes.darkColor)}>Mina bidrag</h2>
        </Grid>
      </Grid>
    </div>
  );
}
