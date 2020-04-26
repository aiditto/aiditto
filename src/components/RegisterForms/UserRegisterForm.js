import React, { useEffect, useState } from "react";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import messages from "variables/messages";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/rootAction";

const useStyles = makeStyles(styles);
const numberRex = new RegExp("^[0-9]+$");

// eslint-disable-next-line react/prop-types
const UserRegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cities, setCities] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const classes = useStyles();
  const form = useSelector(state => state.regform);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      name &&
      verifyEmail(email) &&
      verifyPostCode(postalcode) &&
      address &&
      verifyTelefon(phonenumber) &&
      password &&
      selectedCity &&
      confirmPassword &&
      !passwordMismatch
    ) {
      const data = {
        name,
        address,
        postalcode,
        phonenumber,
        municipality: selectedCity,
        email,
        password,
        company: false
      };
      dispatch(actions.validUserData(data));
      dispatch(actions.UserFormIsValid());
    } else {
      dispatch(actions.UserFormIsInvalid());
    }
  }, [name, email, postalcode, address, phonenumber, password, confirmPassword, passwordMismatch, selectedCity]);

  useEffect(() => {
    const getSwedishCitites = async () => {
      await dispatch(actions.getSweCities());
    };
    getSwedishCitites();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCities(form.swedishCities);
  }, [form.swedishCities]);

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: option => option.city
  });

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      // handleSignup();
    }
  };

  const verifyEmail = value => {
    let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  const verifyTelefon = value => {
    var telefonRex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    if (telefonRex.test(value)) {
      return true;
    }
    return false;
  };

  const verifyPostCode = value => {
    const start = value.substr(0, 3);
    const end = value.substr(3).trimStart();
    const padEnd = value.substr(3);
    const isValid =
      start.length === 3 &&
      numberRex.test(start) &&
      end.length === 2 &&
      (end.length === padEnd.length || ` ${end}` === padEnd) &&
      numberRex.test(end);
    return isValid;
  };

  useEffect(() => {
    if (confirmPassword !== password) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  }, [confirmPassword, password]);

  const handleCity = city => {
    if (!city) setSelectedCity("");
    setSelectedCity(city.city);
  };

  return (
    <form className={classes.userForm} autoComplete="off">
      <Grid container item md={12} xs={12} sm={12} direction="row" justify="center" alignItems="flex-start">
        <Grid container item md={6} xs={12} sm={10} justify="center">
          <Grid item md={8} xs={12} sm={12}>
            {/* NAME */}
            <CustomInput
              success={name.length > 1}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                placeholder: "Namn...",
                value: name,
                onChange: e => {
                  setName(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            {/* address*/}
            <CustomInput
              success={address.length > 5}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                value: address,
                placeholder: "Adress...",
                onChange: e => {
                  setAddress(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            {/* ort */}
            {cities ? (
              <FormControlLabel
                autoComplete="off"
                className={classes.registerInput}
                control={
                  <Autocomplete
                    noOptionsText={messages.SIGNUP_AUTOCOMPLETE_NO_OPTIONS}
                    filterOptions={filterOptions}
                    id="cities-box"
                    options={cities}
                    getOptionLabel={option => option.city}
                    renderInput={params => <TextField placeholder="Stad..." {...params} value={selectedCity} />}
                    onChange={(event, value) => {
                      if (value) {
                        handleCity(value);
                      } else {
                        return;
                      }
                    }}
                  />
                }
              ></FormControlLabel>
            ) : (
              <CircularProgress color="secondary" />
            )}
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            {/* postnr */}
            <CustomInput
              success={verifyPostCode(postalcode)}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                placeholder: "Postnummer...",
                value: postalcode,
                onChange: e => {
                  setPostalCode(e.target.value);
                }
              }}
            />
          </Grid>
        </Grid>
        <Grid container item md={6} xs={12} sm={10} justify="center">
          <Grid item md={8} xs={12} sm={12}>
            <CustomInput
              success={verifyTelefon(phonenumber)}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                value: phonenumber,
                placeholder: "Telefonnummer...",
                onChange: e => {
                  setPhonenumber(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            <CustomInput
              success={verifyEmail(email)}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start" className={classes.inputAdornment}>
                    <Email className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
                value: email,
                placeholder: "Email...",
                onChange: e => {
                  setEmail(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            <CustomInput
              helperText={
                password &&
                password.length < 8 && <span className={classes.errorMsg}>{messages.SIGNUP_PASSWORD_AMOUNT}</span>
              }
              success={password.length >= 8}
              error={password.length < 8 && !password}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start" className={classes.inputAdornment}>
                    <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                  </InputAdornment>
                ),
                placeholder: "Lösenord...",
                type: "password",
                value: password,
                autoComplete: "off",
                onChange: e => {
                  setPassword(e.target.value);
                  setPasswordMismatch(false);
                }
              }}
            />
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            <CustomInput
              helperText={
                confirmPassword &&
                passwordMismatch && <span className={classes.errorMsg}>{messages.SIGNUP_PASSWORD_MISMATCH}</span>
              }
              error={passwordMismatch}
              success={password === confirmPassword && confirmPassword.length > 7}
              formControlProps={{
                fullWidth: true,
                className: classes.customFormControlClasses
              }}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start" className={classes.inputAdornment}>
                    <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                  </InputAdornment>
                ),
                placeholder: "Repetera lösenord...",
                type: "password",
                value: confirmPassword,
                autoComplete: "off",
                onKeyDown: e => {
                  handleKeyDown(e);
                },
                onChange: e => {
                  setConfirmPassword(e.target.value);
                  setPasswordMismatch(false);
                }
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserRegisterForm;
