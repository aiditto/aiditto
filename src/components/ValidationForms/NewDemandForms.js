/*eslint-disable*/
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// material ui icons
import Close from "@material-ui/icons/Close";
// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import CustomInput from "components/CustomInput/CustomInput.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React, { useEffect, useState } from "react";
import { categories } from "../../variables/categoriesData.js";
import { connect } from "react-redux";
import * as actions from "../../store/actions/rootAction";
import { DEMAND_SELECTORS } from "../../store/selectors/rootSelector";

const useStyles = makeStyles(styles);
const numberRex = new RegExp("^[0-9]+$");

const NewDemandForm = props => {
  // type validation
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState("");
  const [quantity, setQuantity] = useState("");
  const [telephone, setTelephone] = useState("");
  const [telephoneState, setTelephoneState] = useState("");
  const [postcode, setPostCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [itemname, setItemname] = useState("");
  const [postCodeState, setPostCodestate] = useState("");
  const [description, setDescription] = useState("");
  const [demander, setDemander] = useState("");

  useEffect(() => {
    if (email && quantity && postcode && address && category && telephone && itemname && demander) setDisabled(false);
  }, [email, quantity, postcode, address, category, itemname, telephone, demander]);

  const verifyEmail = value => {
    let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  const verifyTelefon = value => {
    var telefonRex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    return telefonRex.test(value);
  };

  // function that verifies if value contains only numbers
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

  const classes = useStyles();

  const clearFormData = () => {
    setAddress("");
    setCategory("");
    setPostCode("");
    setItemname("");
    setQuantity("");
    setEmail("");
    setTelephone("");
    setDemander("");
    setDescription("");
    setCity("");
    setEmailState("");
    setTelephoneState("");
    setPostCodestate("");
    setDisabled(true);
  };

  const handleAddDemand = () => {
    const data = {
      description,
      demander,
      address,
      city,
      postcode,
      telephone,
      email,
      category: Number(category.split(".")[0]),
      quantity: Number(quantity),
      itemname
    };
    props.addDemand(data);
    if (!props.error) {
      clearFormData();
      setTimeout(() => {
        props.toggleExpansion();
      }, 1000);
    }
  };

  return (
    <div className={classes.root}>
      <form>
        <GridContainer>
          <GridItem xs={12} md={6} sm={8}>
            <CustomDropdown
              id="category"
              dropdownList={categories.map(category => {
                return category.id + ". " + category.title;
              })}
              buttonText={category ? category : "Select Category"}
              onClick={event => {
                setCategory(event);
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={itemname.length > 0}
              error={itemname !== "" && itemname.length === 0}
              id="artikel"
              labelText="artikel"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  setItemname(event.target.value);
                },
                type: "text",
                value: itemname,
                endAdornment:
                  itemname !== "" && itemname.length === 0 ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={quantity.length > 0}
              error={quantity !== "" && quantity.length === 0}
              id="antal"
              labelText="Antal"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  setQuantity(event.target.value);
                },
                type: "number",
                value: quantity,
                endAdornment:
                  quantity !== "" && quantity.length === 0 ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>

          <GridItem xs={12} md={12} sm={8}>
            <CustomInput
              success={description.length > 0}
              error={description !== "" && description.length === 0}
              id="beskrivning"
              labelText="Beskrivning"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  setDescription(event.target.value);
                },
                multiline: true,
                rows: 2,
                value: description,
                type: "text",
                endAdornment:
                  description !== "" && description.length === 0 ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={demander.length > 0}
              error={demander !== "" && demander.length === 0}
              id="beställare"
              labelText="Beställare"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  setDemander(event.target.value);
                },
                type: "text",
                value: demander,
                endAdornment:
                  demander !== "" && demander.length === 0 ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={address.length > 0}
              error={address !== "" && address.length === 0}
              id="adress"
              labelText="Adress"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  setAddress(event.target.value);
                },
                type: "text",
                value: address,
                endAdornment:
                  address !== "" && address.length === 0 ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={city.length > 0}
              error={city !== "" && city.length === 0}
              id="stad"
              labelText="Stad"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  setCity(event.target.value);
                },
                type: "text",
                value: city,
                endAdornment:
                  city !== "" && city.length === 0 ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={postCodeState === "success"}
              error={postCodeState === "error"}
              id="postNummer"
              labelText="Postnummer"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  if (verifyPostCode(event.target.value, 0)) {
                    setPostCodestate("success");
                  } else {
                    setPostCodestate("error");
                  }
                  setPostCode(event.target.value);
                },
                type: "text",
                placeholder: "123 45",
                value: postcode,
                endAdornment:
                  postCodeState === "error" ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={telephoneState === "success"}
              error={telephoneState === "error"}
              id="telefon"
              labelText="Telefon"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  if (verifyTelefon(event.target.value, 0)) {
                    setTelephoneState("success");
                  } else {
                    setTelephoneState("error");
                  }
                  setTelephone(event.target.value);
                },
                type: "tel",
                value: telephone,
                endAdornment:
                  telephoneState === "error" ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6} sm={8}>
            <CustomInput
              success={emailState === "success"}
              error={emailState === "error"}
              id="email"
              labelText="Kontakt E-post"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => {
                  if (verifyEmail(event.target.value)) {
                    setEmailState("success");
                  } else {
                    setEmailState("error");
                  }
                  setEmail(event.target.value);
                },
                type: "email",
                value: email,
                endAdornment:
                  emailState === "error" ? (
                    <InputAdornment position="end">
                      <Close className={classes.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem>
        </GridContainer>
        <div className={classes.btnWrapper}>
          <Button square="true" className={classes.btnColor} onClick={handleAddDemand} disabled={disabled}>
            Skapa behov
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: DEMAND_SELECTORS.getError(state),
    loading: DEMAND_SELECTORS.getLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDemand: data => dispatch(actions.createDemandItem(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDemandForm);
