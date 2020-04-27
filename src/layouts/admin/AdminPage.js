/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/adminPageStyle.js";
import { Grid, Chip } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ConnectedItems from "../../components/ConnectedItems/ConnectedItems";
// core components
import Divider from "@material-ui/core/Divider";
// React and Redux
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/rootAction";
import { DEMAND_SELECTORS } from "../../store/selectors/rootSelector";

import SearchField from "components/SearchField/SearchField.js";
import CreateNewDemand from "components/CreateNewDemand/CreateNewDemand.js";
import DemandDetailes from "components/Demands/DemandDetailes";
import AssetsListItem from "components/AssetsListItem/AssetsListItem";
import Assets from "components/AssetsListItem/Assets";
import demandService from "services/demand.service";

const useStyles = makeStyles(styles);

const assetsData = [
  {
    id: "1",
    type: ["Donation", "Ej tillgänlig än"],
    representing: "Lundell's Målarfabrik",
    donatorname: "Anders Lundell",
    adress: "Timmermansgatan 24",
    city: "Halmstad",
    postcode: "302 36",
    telephone: "070-11 22 33",
    donation: "Ja",
    totalkostnad: "-",
    dateofavaibility: "01/05",
    title: "Andningsskydd FFP2",
    quantity: 1000,
    messagetoreciever:
      "Jag har möjlighet att transportera varorna ända fram till er dörr om ni befinner inom Hallands Län",
    reacuringdonation: "Nej",
    timestamp: "17/04/2020"
  },
  {
    id: "2",
    type: ["Tillgänglig", "Säljes"],
    representing: "Lundell's Målarfabrik",
    donatorname: "Anders Lundell",
    adress: "Timmermansgatan 24",
    city: "Halmstad",
    postcode: "302 36",
    telephone: "070-11 22 33",
    donation: "Nej",
    totalkostnad: "90 000Kr",
    dateofavaibility: "Now",
    title: "Andningsskydd FFP2",
    quantity: 2000,
    messagetoreciever: "",
    reacuringdonation: "Nej",
    timestamp: "17/04/2020"
  }
];

const testData = [
  {
    id: "1",
    itemtype: "Artikel",
    quantity: 400,
    title: "Andningsskydd FFP3"
  },
  {
    id: "2",
    itemtype: "Artikel",
    quantity: 2000,
    title: "Andningsskydd FFP3"
  },
  {
    id: "3",
    itemtype: "Artikel",
    quantity: 180,
    title: "Andningsskydd FFP3"
  }
];

const testDataDemand = [
  {
    id: "1",
    description:
      "We are running low on Andnings skydd FFP3. At this rate we will be totally out of them in a weeks time.",
    demander: "Malmo Somthing",
    adress: "Regerings gatan 27",
    city: "Malmo",
    postcode: "123 45",
    telephone: "+46-675423",
    email: "produkt@malmo.se",
    category: "",
    quantity: 2600,
    itemname: "Andningsskydd FFP3",
    timeStamp: "20/03/2020"
  },
  {
    id: "2",
    description:
      "We are running low on Andnings skydd FFP3. At this rate we will be totally out of them in a weeks time.",
    demander: "Lund Somthing",
    adress: "Lunda gatan 27",
    city: "Lund",
    postcode: "123 45",
    telephone: "+46-675911",
    email: "produkt@lund.se",
    category: "",
    quantity: 1500,
    itemname: "Andningsskydd FFP2",
    timeStamp: "15/04/2020"
  }
];

const AdminPage = props => {
  const { ...rest } = props;

  // Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // End Dialog

  // End Editable

  // styles
  const classes = useStyles();

  /* React Hook useEffect has a missing dependency: 'props'. 
  Either include it or remove the dependency array. However, 
  'props' will change when *any* prop changes, so the preferred 
  fix is to destructure the 'props' object outside of the useEffect 
  call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps
  */
  useEffect(() => {
    props.getDemands();
  }, []);

  const populateNewCard = demand => {};

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="flex-start" justify="flex-end">
        <Grid item xs={12} sm={12} md={6} className={classes.firstOuterColumn}>
          <Grid container justify="flex-end">
            <Grid item xs={12} sm={12} md={10}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={8}>
                    <h2 className={classes.sectionTitle}>Behov</h2>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={8}>
                    <SearchField id="searchDemand" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <CreateNewDemand />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    {props.demands.map(demand => {
                      return <DemandDetailes data={demand} key={demand.id} />;
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Grid container justify="center">
            <Grid item xs={12} sm={10}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={8}>
                    <h2 className={classes.sectionTitle}>Tillgångar</h2>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>

                <Grid container justify="center" alignItems="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12} md={8}>
                    <SearchField id="searchAssets" />
                    <Grid container item md={12} xs={12} sm={12} justify="center" className={classes.chipFilter}>
                      <Chip
                        label="Donation"
                        className={classes.chipStyle}
                        style={{ backgroundColor: "#71a0ff", color: "white" }}
                        size="small"
                        component="a"
                        href="#chip"
                        clickable
                      />
                      <Chip
                        label="Tillgänlig"
                        className={classes.chipStyle}
                        style={{ backgroundColor: "#fc6f67", color: "white" }}
                        size="small"
                        component="a"
                        href="#chip"
                        clickable
                      />
                      <Chip
                        label="Säljes"
                        className={classes.chipStyle}
                        style={{ backgroundColor: "#6ecf96", color: "white" }}
                        size="small"
                        component="a"
                        href="#chip"
                        clickable
                      />
                      <Chip
                        label="Ej Tillgänlig än"
                        className={classes.chipStyle}
                        style={{ backgroundColor: "#fda725", color: "white" }}
                        size="small"
                        component="a"
                        href="#chip"
                        clickable
                      />
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={4} justify="center">
                    <Button size="medium" square="true" className={classes.visaAllaBtn}>
                      Visa alla tillgångar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={8}>
                    <h3 className={classes.visaTitle}>Visar alla andningsskydd</h3>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>

                {assetsData.map(item => (
                  <Assets item={item} key={item.id} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ConnectedItems />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: DEMAND_SELECTORS.getError(state),
    loading: DEMAND_SELECTORS.getLoading(state),
    demands: DEMAND_SELECTORS.getDemands(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDemands: () => dispatch(actions.getDemands())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
