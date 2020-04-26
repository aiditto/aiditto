/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Chip } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/rootAction";

// Styles
import styles from "./AssetsStyle.js";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(styles);

const Assets = ({ item }) => {
  const classes = useStyles();
  const [assetItem, setAssetItem] = useState(null);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setAssetItem(item);
  }, [item]);

  const handleAsset = asset => {
    if (!selected) {
      dispatch(actions.addAssetItem(asset));
    } else {
      dispatch(actions.removeAssetItem(asset));
    }
  };

  const RenderChips = types => {
    const chips = types.type.map((i, index) => {
      switch (i) {
        case "Donation":
          return (
            <Chip
              key={index}
              className={classes.chipStyle}
              style={{ backgroundColor: "#71a0ff", color: "white" }}
              size="small"
              label={i}
            />
          );
        case "Tillgänglig":
          return (
            <Chip
              key={index}
              className={classes.chipStyle}
              style={{ backgroundColor: "#fc6f67", color: "white" }}
              size="small"
              label={i}
            />
          );

        case "Säljes":
          return (
            <Chip
              key={index}
              className={classes.chipStyle}
              style={{ backgroundColor: "#6ecf96", color: "white" }}
              size="small"
              label={i}
            />
          );

        case "Ej tillgänlig än":
          return (
            <Chip
              key={index}
              className={classes.chipStyle}
              style={{ backgroundColor: "#fda725", color: "white" }}
              size="small"
              label={i}
            />
          );
        default:
          return;
      }
    });

    return chips;
  };

  return assetItem ? (
    <div className={classes.root}>
      <Grid container item md={12} xs={12} sm={12}>
        <Grid item xs={12} sm={12} md={8}>
          <ExpansionPanel className={classes.assetsStyle}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              className={classes.edgeEnd}
            >
              <Grid container item md={12} sm={12} xs={12}>
                <Grid item md={8} xs={8} sm={8}>
                  <p>Artikel</p>
                  <p className={classes.titleStyle}>{assetItem.title}</p>
                </Grid>
                <Grid container item md={4} sm={4} xs={4} alignItems="flex-end" direction="column">
                  <p>ANTAL</p>
                  <p className={classes.titleStyle}>{assetItem.quantity}</p>
                </Grid>
                <Divider className={classes.dividerStyle} />
                <Grid container item md={12} xs={12} sm={12} className={classes.chipWrapper}>
                  <RenderChips type={assetItem.type} />
                </Grid>
              </Grid>
            </ExpansionPanelSummary>
            <Divider className={classes.dividerStyle} />
            <ExpansionPanelDetails className={classes.details}>
              <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid container justify="space-around">
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Jag representerar ett företag</span>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    {assetItem.representing}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Personlig information</span>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    {assetItem.donatorname}
                    <br />
                    {assetItem.adress}
                    <br />
                    {assetItem.postcode} {assetItem.city}
                    <br />
                    {assetItem.telephone}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Jag donerar materialet</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.donation}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Totala Kostnaden</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.totalkostnad}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Jag kan skicka varor direkt</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.dateofavaibility}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Typ av vara</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.title}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Meddelande</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.messagetoreciever}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Jag vill ge återkommande</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.reacuringdonation}
                  </Grid>
                </Grid>

                <Grid container justify="space-around" alignItems="flex-start" className={classes.orderCreator}>
                  <Grid item xs={12} sm={6} md={4}>
                    <span className={classes.subheader}>Tillagd</span>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6} alignItems="flex-end">
                    {assetItem.timestamp}
                  </Grid>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small" square="true" className={classes.btnColorSecondary}>
                Ändra
              </Button>
              <Button size="small" square="true" className={classes.btnColorPrimary}>
                Ta bort
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </Grid>
        <Grid container item xs={12} sm={12} md={4} className={classes.rightRightGrid} justify="center">
          <Button
            size="large"
            square="true"
            className={selected ? classes.removeAsset : classes.chooseAsset}
            onClick={() => {
              setSelected(!selected);
              handleAsset(assetItem);
            }}
          >
            {selected ? "Avmarkera" : "Välj"}
          </Button>
        </Grid>
      </Grid>
    </div>
  ) : (
    <>
      <p>Error</p>
    </>
  );
};

export default Assets;
