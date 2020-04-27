/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// core components
import React, { useState, useEffect, useRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "./createAssetsStyle";
import { Grid } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Collapse from "@material-ui/core/Collapse";

import cx from "classnames";

const useStyles = makeStyles(styles);

const CreateAssets = props => {
  // styles
  const classes = useStyles();
  const [company, setCompany] = useState(false);
  const [amount, setAmount] = useState(null);
  const [donating, setDonating] = useState(true);
  const [totalCost, setTotalCost] = useState(null);
  const [sendNow, setSendNow] = useState(true);
  const [description, setDescription] = useState(null);
  const [availableDate, setAvailableDate] = useState(null);
  const [recurrent, setRecurrent] = useState(null);
  const selectedTitle = props.match.params;

  return (
    <Grid item container xs={12} md={12} sm={12} justify="center" alignItems="center" className={classes.outerWrap}>
      <Grid container item md={8} sm={12} alignItems="center" justify="center">
        <Grid item md={8}>
          <h2 className={classes.headTitle}>Skapa tillgång</h2>
          <h5 className={classes.itemTitle}>{selectedTitle.name}</h5>
        </Grid>
        <Grid item md={4} className={classes.centerItems}>
          <Button className={classes.howItWorksButton}>Hur det fungerar</Button>
        </Grid>
        <span className={classes.divider} />
      </Grid>

      <Grid container item md={8} sm={12} xs={12} justify="space-around" alignItems="center">
        <Grid item md={8} sm={10}>
          <p className={classes.boldSmallText}>Jag representerar ett företag</p>
        </Grid>
        <Grid item md={4} xs={12} sm={12} className={classes.centerItems}>
          <ButtonGroup className={classes.switchStyle} aria-label="outlined button group">
            <Button
              onClick={() => {
                setCompany(true);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: company,
                [classes.inactiveButton]: !company
              })}
            >
              Ja
            </Button>
            <Button
              onClick={() => {
                setCompany(false);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: !company,
                [classes.inactiveButton]: company
              })}
            >
              Nej
            </Button>
          </ButtonGroup>
        </Grid>
        <span className={classes.divider} />
      </Grid>

      <Grid container item md={8} sm={12} justify="space-around" alignItems="flex-start">
        <Grid item md={8}>
          <p className={classes.boldSmallText}>Jag donerar materialet</p>
        </Grid>
        <Grid item md={4} className={classes.centerItems}>
          <ButtonGroup className={classes.switchStyle} aria-label="outlined button group">
            <Button
              onClick={() => {
                setDonating(true);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: donating,
                [classes.inactiveButton]: !donating
              })}
            >
              Ja
            </Button>
            <Button
              onClick={() => {
                setDonating(false);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: !donating,
                [classes.inactiveButton]: donating
              })}
            >
              Nej
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid container item md={12} sm={10} xs={10} className={classes.mobileFixInput}>
          <Grid item md={4} sm={6} xs={10} className={classes.inputWrapper}>
            <Collapse in={!donating}>
              <Input
                fullWidth
                id="cost"
                placeholder="Total kostnad"
                className={classes.textFieldStyle}
                endAdornment={<InputAdornment position="end">SEK</InputAdornment>}
                onChange={e => {
                  setTotalCost(e.target.value);
                }}
              />
            </Collapse>
          </Grid>
        </Grid>
        <span className={classes.divider} />
      </Grid>

      <Grid container item md={8} sm={12} xs={12} justify="space-around" alignItems="flex-start">
        <Grid item md={8}>
          <p className={classes.boldSmallText}>Jag kan skicka varor direkt</p>
        </Grid>
        <Grid item md={4} className={classes.centerItems}>
          <ButtonGroup className={classes.switchStyle} aria-label="outlined button group">
            <Button
              onClick={() => {
                setSendNow(true);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: sendNow,
                [classes.inactiveButton]: !sendNow
              })}
            >
              Ja
            </Button>
            <Button
              onClick={() => {
                setSendNow(false);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: !sendNow,
                [classes.inactiveButton]: sendNow
              })}
            >
              Nej
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid container item md={12} sm={10} xs={10} className={classes.mobileFixInput}>
          <Grid item md={4} sm={6} xs={10} className={classes.inputWrapper}>
            <Collapse in={!sendNow}>
              <TextField
                fullWidth
                type="date"
                id="availibledate"
                className={classes.textFieldStyle}
                onChange={e => {
                  setAvailableDate(e.target.value);
                }}
              />
            </Collapse>
          </Grid>
        </Grid>
        <span className={classes.divider} />
      </Grid>

      <Grid container item md={8} sm={12} xs={12} justify="center" alignItems="flex-start">
        <Grid item md={12} sm={10}>
          <h2 className={classes.headTitle}>Biståndsinformation</h2>
          <p className={classes.boldSmallText}>Biståndsinformation</p>
        </Grid>
        <Grid container item md={12} sm={10} xs={10}>
          <Grid item md={4} sm={6} xs={10} className={classes.inputWrapper}>
            <TextField
              fullWidth
              label="Antal"
              id="amount"
              className={classes.textFieldStyle}
              onChange={e => {
                setAmount(e.target.value);
              }}
            />

            <TextField
              fullWidth
              label="Meddelande till mottagaren"
              id="desc"
              className={classes.textFieldStyle}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <span className={classes.divider} />
      </Grid>

      <Grid container item md={8} sm={12} xs={12} justify="space-around" alignItems="center">
        <Grid item md={8} sm={10}>
          <p className={classes.boldSmallText}>Jag vill ge återkommande bidrag</p>
        </Grid>
        <Grid item md={4} xs={12} sm={12} className={classes.centerItems}>
          <ButtonGroup className={classes.switchStyle} aria-label="outlined button group">
            <Button
              onClick={() => {
                setRecurrent(true);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: recurrent,
                [classes.inactiveButton]: !recurrent
              })}
            >
              Ja
            </Button>
            <Button
              onClick={() => {
                setRecurrent(false);
              }}
              className={cx(classes.switchButton, {
                [classes.activeButton]: !recurrent,
                [classes.inactiveButton]: recurrent
              })}
            >
              Nej
            </Button>
          </ButtonGroup>
        </Grid>
        <span className={classes.divider} />
      </Grid>
      <Grid container item md={8} justify="flex-end" className={classes.mobileFix}>
        <Button size="large" square="true" className={classes.sendHelp}>
          Skapa tillgång
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateAssets;
