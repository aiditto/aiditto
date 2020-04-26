/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createRef } from "react";

// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Button as CoreButton } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Fade from "@material-ui/core/Fade";
import Collapse from "@material-ui/core/Collapse";
// @material-ui/icons
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import cx from "classnames";
import { API, Axios } from "api";
import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import authenticationService from "services/auth.service";
import messages from "variables/messages";
import UserRegisterForm from "components/RegisterForms/UserRegisterForm";
import CompanyRegisterForm from "components/RegisterForms/CompanyRegisterForm";
import PersonIcon from "@material-ui/icons/Person";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/rootAction";

const useStyles = makeStyles(styles);

const RegisterPage = props => {
  const [checked, setChecked] = useState(false);
  const [isPerson, setIsPerson] = useState(false);
  const form = useSelector(state => state.regform);
  const dispatch = useDispatch();
  const validData = useSelector(state => state.userSignupData);

  const handleSignup = () => {
    dispatch(actions.createUser(validData));
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleSignup();
    }
  };

  const classes = useStyles();
  // ref for the wrapper div
  const wrapper = createRef();
  return (
    <div className={classes.wrapper} ref={wrapper}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card className={classes.cardSignup}>
              <div className={classes.personIcon}>
                <PersonIcon fontSize="large" />
              </div>

              <h2 className={classes.cardTitle}>Registrera</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={10}>
                    <div className={classes.switchWrapper}>
                      <p className={classes.boldSmallText}>Jag representerar ett företag</p>
                      <ButtonGroup className={classes.switchStyle} aria-label="outlined button group">
                        <CoreButton
                          onClick={() => {
                            setIsPerson(true);
                          }}
                          className={cx(classes.switchButton, {
                            [classes.activeButton]: isPerson,
                            [classes.inactiveButton]: !isPerson
                          })}
                        >
                          Ja
                        </CoreButton>
                        <CoreButton
                          onClick={() => {
                            setIsPerson(false);
                          }}
                          className={cx(classes.switchButton, {
                            [classes.activeButton]: !isPerson,
                            [classes.inactiveButton]: isPerson
                          })}
                        >
                          Nej
                        </CoreButton>
                      </ButtonGroup>
                    </div>
                  </GridItem>

                  <Collapse in={!!isPerson}>
                    <CompanyRegisterForm />
                  </Collapse>
                  <UserRegisterForm />

                  <GridContainer
                    item
                    md={12}
                    justify="center"
                    alignItems="center"
                    direction="column"
                    className={classes.btnWrapper}
                  >
                    <FormControlLabel
                      classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel
                      }}
                      control={
                        <Checkbox
                          onClick={() => setChecked(!checked)}
                          checkedIcon={<Check className={classes.checkedIcon} />}
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      label={
                        <span>
                          I agree to the <a href="#pablo">terms and conditions</a>.
                        </span>
                      }
                    />
                    <Button
                      onClick={handleSignup}
                      disabled={
                        isPerson
                          ? !form.validCompanyForm || !form.validUserForm || !checked
                          : !form.validUserForm || !checked
                      }
                      className={classes.btnColor}
                    >
                      Registrera
                    </Button>
                  </GridContainer>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default RegisterPage;
