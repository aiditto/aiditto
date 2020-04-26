import React, { useEffect, useState } from "react";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/regformActions";

const useStyles = makeStyles(styles);

const CompanyRegisterForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyOrgNr, setCompanyOrgNr] = useState("");
  const [validOrg, setValidOrg] = useState(false);

  const form = useSelector(state => state.regform);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleOrgNr = e => {
    setCompanyOrgNr(e);
  };

  useEffect(() => {
    if (validOrg && companyName.length > 4) {
      dispatch(actions.CompFormIsValid());
    } else {
      dispatch(actions.CompFormIsInvalid());
    }
    // eslint-disable-next-line
  }, [validOrg, companyName]);

  useEffect(() => {
    if (companyOrgNr.length > 4) {
      setValidOrg(true);
    } else {
      setValidOrg(false);
    }
  }, [companyOrgNr]);

  return (
    <form className={classes.form} autoComplete="off">
      <Grid container item md={12} alignItems="flex-start" justify="space-around">
        <Grid item md={4}>
          <CustomInput
            success={companyName.length > 3 ? true : undefined}
            formControlProps={{
              fullWidth: true,
              className: classes.customFormControlClasses
            }}
            inputProps={{
              placeholder: "Företagsnamn",
              onChange: e => {
                setCompanyName(e.target.value);
              }
            }}
          />
        </Grid>
        <Grid item md={4}>
          <CustomInput
            success={companyName.length > 5 ? true : undefined}
            formControlProps={{
              fullWidth: true,
              className: classes.customFormControlClasses
            }}
            inputProps={{
              value: companyOrgNr,
              placeholder: "Organisationsnummer",
              onChange: e => {
                handleOrgNr(e.target.value);
              }
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default CompanyRegisterForm;
