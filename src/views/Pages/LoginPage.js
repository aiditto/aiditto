/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import LockOutline from "@material-ui/icons/LockOutline";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React, { useState, useEffect } from "react";
import messages from "variables/messages";
import { Link, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/rootAction";
import { AUTH_SELECTORS } from "../../store/selectors/rootSelector";
import { Redirect } from "react-router-dom";
import authenticationService from "services/auth.service";

const useStyles = makeStyles(styles);
const LoginPage = props => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);

  useEffect(() => {
    if (props.error) {
      setFailedLogin(true);
      setEmail("");
      setPassword("");
    }
  }, [props.error]);

  const handleLogin = e => {
    e.preventDefault();
    props.onLogin(email, password);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleLogin(event);
    }
  };

  setTimeout(() => {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  // ref for the wrapper div
  const wrapper = React.createRef();

  // styles
  return authenticationService.isAuthenticated() ? (
    <Redirect to="/producent" />
  ) : (
    <div className={classes.wrapper} ref={wrapper}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card className={(classes[cardAnimaton], classes.cardLogin)}>
                <h2 className={classes.cardTitle}>Logga In</h2>
                <CardBody>
                  {failedLogin ? <p className={classes.errorMsg}>{messages.LOGIN_FAILED}</p> : null}
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                      value: email,
                      onChange: e => {
                        setEmail(e.target.value);
                        setFailedLogin(false);
                      }
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                        </InputAdornment>
                      ),
                      value: password,
                      type: "password",
                      autoComplete: "off",
                      onKeyDown: e => {
                        handleKeyDown(e);
                      },
                      onChange: e => {
                        setPassword(e.target.value);
                        setFailedLogin(false);
                      }
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button
                    onClick={event => handleLogin(event)}
                    square="true"
                    size="lg"
                    disabled={!email || !password}
                    block
                    className={classes.btnColor}
                  >
                    Logga in
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { error: AUTH_SELECTORS.getError(state), loading: AUTH_SELECTORS.getLoading(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
