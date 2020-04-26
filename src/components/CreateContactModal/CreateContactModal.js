/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Divider, Button } from "@material-ui/core";
import styles from "./createContactModalStyle";
import { makeStyles } from "@material-ui/core/styles";
// Editable content
import ContentEditable from "react-contenteditable";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CreateContactModal = ({ open, setOpenSendModal }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [maxWidth] = useState("md");

  // Editable
  const orderArticle = useRef("Andningsskydd FFP3");
  const orderInformation = useRef("SUS Malmö<br />+348 4545 343");
  const orderGoingTo = useRef("Malmö City Hall");

  const assetArticle1 = useRef("Andningsskydd FFP3");
  const assetAmmount1 = useRef("20");
  const assetInformation1 = useRef("Philip Person<br />+46 9458 495<br />Ringvägen 20, 223 Malmö");

  const assetArticle2 = useRef("Andningsskydd FFP3");
  const assetAmmount2 = useRef("50");
  const assetInformation2 = useRef("Philip Person<br />+46 9458 495<br />Ringvägen 20, 223 Malmö");

  const handleChange = evt => {
    orderArticle.current = evt.target.value;
    orderInformation.current = evt.target.value;
    orderGoingTo.current = evt.target.value;
    assetArticle1.current = evt.target.value;
    assetAmmount1.current = evt.target.value;
    assetInformation1.current = evt.target.value;
    assetArticle2.current = evt.target.value;
    assetAmmount2.current = evt.target.value;
    assetInformation2.current = evt.target.value;
  };
  return (
    <div>
      <Grid item xs={12} sm={12} md={4}>
        <Dialog
          fullScreen={fullScreen}
          fullWidth={true}
          maxWidth={maxWidth}
          open={open}
          onClose={() => {
            setOpenSendModal(false);
          }}
          aria-labelledby="responsive-dialog-title"
          className={classes.createContactDialog}
        >
          <div className={classes.dialogRoot}>
            <DialogTitle id="responsive-dialog-title">
              <span className={classes.createContactHeader}>Kontrollera att uppgifterna stämmer</span>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <span className={classes.subheader}>Beställare</span>
                <Divider className={classes.dividerStyle} />
                <Grid item xs={12} sm={12} md={6} className={classes.orderCreator}>
                  <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                    <Grid item xs={12} sm={4} md={4}>
                      <span className={classes.subheader}>Artikel:</span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <span>
                        <ContentEditable html={orderArticle.current} onChange={handleChange} />
                      </span>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                    <Grid item xs={12} sm={4} md={4}>
                      <span className={classes.subheader}>Uppgifter:</span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ContentEditable html={orderInformation.current} onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                    <Grid item xs={12} sm={4} md={4}>
                      <span className={classes.subheader}>Till:</span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ContentEditable html={orderGoingTo.current} onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>

                <span className={classes.subheader}>Kopplas ihop med tillgångar:</span>
                <Divider className={classes.dividerStyle} />

                <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                  <Grid item xs={12} sm={12} md={6} className={classes.assetsPadding}>
                    <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                      <Grid item xs={12} sm={4} md={4}>
                        <span className={classes.subheader}>Artikel:</span>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ContentEditable html={assetArticle1.current} onChange={handleChange} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                      <Grid item xs={12} sm={4} md={4}>
                        <span className={classes.subheader}>Antal:</span>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ContentEditable html={assetAmmount1.current} onChange={handleChange} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                      <Grid item xs={12} sm={4} md={4}>
                        <span className={classes.subheader}>Uppgifter:</span>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ContentEditable html={assetInformation1.current} onChange={handleChange} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} className={classes.assetsPadding}>
                    <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                      <Grid item xs={12} sm={4} md={4}>
                        <span className={classes.subheader}>Artikel:</span>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ContentEditable html={assetArticle2.current} onChange={handleChange} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                      <Grid item xs={12} sm={4} md={4}>
                        <span className={classes.subheader}>Antal:</span>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ContentEditable html={assetAmmount2.current} onChange={handleChange} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} alignItems="flex-start" justify="flex-start">
                      <Grid item xs={12} sm={4} md={4}>
                        <span className={classes.subheader}>Uppgifter:</span>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ContentEditable html={assetInformation2.current} onChange={handleChange} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                size="large"
                square="true"
                className={classes.createContact}
                autoFocus
                onClick={() => setOpenSendModal(false)}
                color="primary"
              >
                Skicka
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </Grid>
    </div>
  );
};

export default CreateContactModal;
