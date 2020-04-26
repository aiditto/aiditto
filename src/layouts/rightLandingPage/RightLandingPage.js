/* eslint-disable react/prop-types */
import { Grid } from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItems from "../../components/Listitems/ListItems";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/rootAction";
import { DEMAND_SELECTORS } from "../../store/selectors/rootSelector";
import CircularProgress from "@material-ui/core/CircularProgress";

import { categories } from "../../variables/categoriesData.js";
// styles
import styles from "./rightLandingPageStyle";

import wordpressService from "services/wp.service";

const useStyles = makeStyles(styles);

const RightLandingPage = props => {
  const classes = useStyles();
  const [fadeIn, setFadeIn] = useState(true);
  const [homeRight, setHomeRight] = useState("");

  /* React Hook useEffect has a missing dependency: 'props'. 
  Either include it or remove the dependency array. However, 
  'props' will change when *any* prop changes, so the preferred 
  fix is to destructure the 'props' object outside of the useEffect 
  call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps
  */
  useEffect(() => {
    props.getShortlist();
  }, []);

  useEffect(() => {
    wordpressService.info("dev", "home-right", response => {
      if (response.status === 200) {
        setHomeRight(response.data.message[0].content.rendered);
      }
    });
  }, []);

  const handleClick = selectedCategory => {
    props.updateSelectedCategory(selectedCategory);
  };

  return (
    <Grid container item xs={12} md={6} className={classes.rightWrapper}>
      <Grid item className={classes.textWrapper}>
        <div className={classes.rightParagraph} dangerouslySetInnerHTML={{ __html: homeRight }} />
      </Grid>

      <Grid item container direction="row" justify="space-around" alignContent="flex-start" md={12}>
        {categories.map(category => {
          return (
            <Grid
              item
              xs={3}
              id={category.id}
              key={category.id}
              className={props.selectedCategory === category.id ? classes.activeCategory : classes.category}
              onMouseEnter={() => {
                setFadeIn(false);
              }}
              onClick={() => {
                handleClick(category.id);
                setFadeIn(true);
              }}
            >
              <div className={classes.categoryImg}>
                <img src={category.img} alt={category.title} height="100%" />
              </div>
              <h2 className={classes.categoryText}>{category.title}</h2>
            </Grid>
          );
        })}
      </Grid>

      {props.filterDemands ? (
        <Grid item container justify="center" className={fadeIn ? classes.animatedItem : ""}>
          {props.filterDemands.map(demand => (
            <ListItems item={demand} key={demand.id} />
          ))}
        </Grid>
      ) : (
        <Grid item container justify="center">
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    error: DEMAND_SELECTORS.getError(state),
    loading: DEMAND_SELECTORS.getLoading(state),
    shortDemands: DEMAND_SELECTORS.getShortDemands(state),
    filterDemands: DEMAND_SELECTORS.getFilterDemands(state),
    selectedCategory: DEMAND_SELECTORS.getSelectedCategory(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShortlist: () => dispatch(actions.getShortDemands()),
    updateSelectedCategory: category => dispatch(actions.updateSelectedCategory(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightLandingPage);
