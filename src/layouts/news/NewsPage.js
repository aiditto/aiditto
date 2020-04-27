/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @material-ui/core components
import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/newsPageStyle";
import { Grid, Button } from "@material-ui/core";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import * as actions from "../../store/actions/rootAction";
import { WORDPRESS_SELECTORS } from "../../store/selectors/rootSelector";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import messages from "variables/messages";
// import Footer from "components/Footer/Footer.js";

const useStyles = makeStyles(styles);
const NewsPage = props => {
  const { ...rest } = props;
  // styles
  const classes = useStyles();
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: option => option.city
  });
  const postfix = "-news";

  const handleChange = value => {
    let query = value;
    if (query !== "") {
      query = value.city.toLowerCase();
      props.updateNewsFilter(value.city);
      query = mapToInternationalLetter(query);
      query = query + postfix;
    }
    props.getNews(query);
  };

  const mapToInternationalLetter = value => {
    let parsedValue = value;
    if (value.includes("ö")) {
      parsedValue = value.replace(/ö/g, "o");
    }
    if (value.includes("ä")) {
      parsedValue = value.replace(/ä/g, "a");
    }
    if (value.includes("å")) {
      parsedValue = value.replace(/å/g, "a");
    }
    return parsedValue;
  };

  useEffect(() => {
    props.getCities();
    props.getNews();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });

  return (
    <Grid container spacing={0} justify="center" className={classes.root}>
      <Grid item xs={8}>
        <div className={classes.innerColumn}>
          <h2 className={classes.sectionTitle}>Nyheter</h2>
          <Grid item xs={8}>
            <Autocomplete
              noOptionsText={messages.NO_CITIES_SELECTED}
              filterOptions={filterOptions}
              id="cities-box"
              options={props.cities}
              getOptionLabel={option => (option ? option.city : "All")}
              renderInput={params => <TextField placeholder="Stad..." {...params} value={props.newsFilter} />}
              onChange={(event, value) => {
                if (value) {
                  handleChange(value);
                } else {
                  handleChange("");
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {props.loading && <CircularProgress />}
            {props.news.map(newsItem => {
              return (
                <div className={classes.newsBox} key={newsItem.id}>
                  <h3 className={classes.h3} dangerouslySetInnerHTML={{ __html: newsItem.title.rendered }}></h3>
                  <p className={classes.p} dangerouslySetInnerHTML={{ __html: newsItem.content.rendered }} />
                </div>
              );
            })}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    error: WORDPRESS_SELECTORS.getError(state),
    loading: WORDPRESS_SELECTORS.getLoading(state),
    news: WORDPRESS_SELECTORS.getNews(state),
    newsFilter: WORDPRESS_SELECTORS.getNewsFilter(state),
    cities: state.regform.swedishCities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: category => dispatch(actions.getNewsFromWp(category)),
    getCities: () => dispatch(actions.getSweCities()),
    updateNewsFilter: newsFilter => dispatch(actions.updateNewsFilter(newsFilter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
