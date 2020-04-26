/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @material-ui/core components
import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/newsPageStyle";
import { Grid, Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";
import * as actions from "../../store/actions/rootAction";
import { WORDPRESS_SELECTORS } from "../../store/selectors/rootSelector";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Footer from "components/Footer/Footer.js";

const BootstrapInput = withStyles(() => ({
  input: {
    margin: "0 0 40px 0",
    position: "relative",
    border: "unset"
  }
}))(InputBase);

const useStyles = makeStyles(styles);
const NewsPage = props => {
  const { ...rest } = props;
  // styles
  const classes = useStyles();
  const [origin, setNewsOrigin] = React.useState("");
  const postfix = "_news";

  const handleChange = event => {
    let query = event.target.value.toLowerCase();
    props.updateNewsFilter(event.target.value);
    if (event.target.value !== "") {
      query = query + postfix;
    }
    props.getNews(query);
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
          <FormControl className={classes.formControl}>
            <Select
              value={props.newsFilter}
              onChange={handleChange}
              displayEmpty
              input={<BootstrapInput />}
              className={classes.selectEmpty}
            >
              <MenuItem value="">Visa alla kommuner</MenuItem>
              <MenuItem value={"Malmö"}>Malmö</MenuItem>
              <MenuItem value={"Lund"}>Lund</MenuItem>
              <MenuItem value={"Halmstad"}>Halmstad</MenuItem>
            </Select>
          </FormControl>
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
    getNews: cityName => dispatch(actions.getNewsFromWp(cityName)),
    getCities: () => dispatch(actions.getSweCities()),
    updateNewsFilter: newsFilter => dispatch(actions.updateNewsFilter(newsFilter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
