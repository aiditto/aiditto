/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import styles from "./listItemStyle";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Dialog
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import wordpressService from "services/wp.service";

const ListItems = props => {
  const item = props.item;
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  // Dialog
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [maxWidth] = useState("sm");
  const [info, setInfo] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    wordpressService.info("dev", "items", response => {
      if (response.status === 200) {
        setInfo(response.data.message[0].content.rendered);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container item md={12} xs={12} className={classes.listStyle} alignItems="center" justify="space-between">
      <Grid item xs={8} md={8} lg={8}>
        <h2>{item.itemname}</h2>
      </Grid>
      <Grid item xs={6} md={2} lg={2}>
        <Button variant="outlined" className={classes.listInfoButton} onClick={handleClickOpen}>
          Info
        </Button>
      </Grid>
      <Grid item xs={6} md={2} lg={2}>
        <Link to={{ pathname: `/createasset/${item.itemname}` }}>
          <Button variant="outlined" className={classes.listHelpButton}>
            Erbjud hjälp
          </Button>
        </Link>
      </Grid>
      {/* TODO This should probably be its own component, rendered only once, and updated with
        the current item's info upon open */}
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={maxWidth}
        scroll="body"
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title" disableTypography={true}>
          <h2 className={classes.dialogTitle}>{item.itemname}</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText disableTypography={true} id="dialog-description">
            <div dangerouslySetInnerHTML={{ __html: info }} />
            <p>
              This text will come from the Wordpress CMS via our API, and may include images, videos, or other
              resources.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Nullam
              quis risus eget urna mollis ornare vel eu leo.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="large" square="true" onClick={handleClose} className={classes.dialogCancel}>
            Stäng
          </Button>
          <Link to={{ pathname: `/createasset/${item.itemname}` }}>
            <Button size="large" square="true" color="primary" className={classes.dialogProceed}>
              Erbjud hjälp
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default ListItems;
