/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

// Styles
import styles from "assets/jss/material-dashboard-pro-react/components/demandDetailesStyle.js";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import * as actions from "../../store/actions/rootAction";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { DEMAND_SELECTORS } from "../../store/selectors/rootSelector";

const useStyles = makeStyles(styles);

const DemandDetailes = props => {
  const classes = useStyles();
  const demand = props.data;
  const [selected, setSelected] = useState(false);
  const [expandable, setExpandable] = useState(false);
  const dispatch = useDispatch();

  const handleDemand = demand => {
    if (!selected) {
      dispatch(actions.addDemandItem(demand));
    } else {
      dispatch(actions.removeDemandItem(demand));
    }
  };

  const toggleExpansionPanel = () => {
    setExpandable(!expandable);
  };

  const handleDelete = () => {
    const confirmation = window.confirm(`Are you sure you want to remove program with id: ${demand.id}?`);
    if (confirmation) {
      props.deleteDemand(demand.id);
    }
  };

  const handleUpdate = () => {
    //Open the form for edit mode with demand data
    console.log("open the form for update");
    setExpandable(!expandable);
  };

  const parseDate = creation_date => {
    var d = new Date(creation_date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  };

  return (
    <div className={classes.root}>
      {props.loading && <CircularProgress />}
      <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
        <Grid item xs={12} sm={12} md={8} className={classes.rightLeftGrid}>
          <ExpansionPanel expanded={expandable} className={classes.demandDetailesStyle}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              onClick={toggleExpansionPanel}
              className={classes.edgeEnd}
            >
              <Grid container item md={12} sm={12} xs={12}>
                <Grid item md={8} xs={8} sm={8}>
                  <p>Artikel</p>
                  <p className={classes.titleStyle}>{demand.itemname}</p>
                </Grid>
                <Grid container item md={4} sm={4} xs={4} alignItems="flex-end" direction="column">
                  <p>ANTAL</p>
                  <p className={classes.titleStyle}>{demand.quantity}</p>
                </Grid>
                <Divider className={classes.dividerStyle} />
              </Grid>
            </ExpansionPanelSummary>
            <Divider className={classes.dividerStyle} />
            <ExpansionPanelDetails className={classes.details}>
              <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid
                  container
                  spacing={2}
                  justify="space-around"
                  alignItems="flex-start"
                  className={classes.orderCreator}
                >
                  <Grid item xs={12} sm={4} md={4}>
                    <span className={classes.subheader}>Beskrivning</span>
                  </Grid>
                  <Grid item xs={12} sm={8} md={8}>
                    {demand.description}
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  justify="space-around"
                  alignItems="flex-start"
                  className={classes.orderCreator}
                >
                  <Grid item xs={12} sm={4} md={4}>
                    <span className={classes.subheader}>Beställare</span>
                  </Grid>
                  <Grid container item xs={12} sm={8} md={8} justify="flex-start">
                    {demand.demander}
                    <br />
                    {demand.adress}
                    <br />
                    {demand.postcode} {demand.city}
                    <br />
                    {demand.telephone}
                    <br />
                    {demand.email}
                    <br />
                    {parseDate(demand.creation_date)}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <span className={classes.subheader}>Tillagd</span>
                  </Grid>
                  <Grid container item xs={12} sm={8} md={8} justify="flex-start">
                    {parseDate(demand.creation_date)}
                  </Grid>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small" square="true" className={classes.btnColorSecondary} onClick={handleUpdate}>
                Ändra
              </Button>
              <Button size="small" square="true" className={classes.btnColorPrimary} onClick={handleDelete}>
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
              handleDemand(demand);
            }}
          >
            {selected ? "Avmarkera" : "Välj"}
          </Button>
        </Grid>
      </Grid>
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
    deleteDemand: demandId => dispatch(actions.deleteDemandItem(demandId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemandDetailes);
