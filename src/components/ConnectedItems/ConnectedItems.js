import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styles from "./connectedItemsStyle";
import { useSelector } from "react-redux";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
// Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// editable content
import ContentEditable from "react-contenteditable";
import CreateContactModal from "components/CreateContactModal/CreateContactModal";

const ConnectedItems = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const connectedItems = useSelector(state => state.connectedItems);
  const [open, setOpen] = useState(false);
  const [openSendModal, setOpenSendModal] = useState(false);
  const [changedAmount, setChangedAmount] = useState("0");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = evt => {
    setChangedAmount(evt.target.value);
  };

  return (
    <div>
      <Grid container alignItems="baseline">
        <Grid container item justify="space-around" alignItems="flex-start" md={10}>
          <Grid container item md={6} justify="flex-end" className={classes.mobileFix}>
            <Grid item xs={12} sm={8} md={8} className={classes.summarySection}>
              <Grid container item xs={12} sm={12} md={12} justify="center">
                <h2 className={classes.summaryTitle}>Behov</h2>
              </Grid>

              {connectedItems.connectedDemands
                ? connectedItems.connectedDemands.map(item => {
                    return (
                      <Grid
                        container
                        key={item.id}
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.demandDetailesStyle}
                        justify="space-around"
                      >
                        <Grid container item md={12} sm={12} xs={12}>
                          <Grid item md={8} xs={8} sm={8}>
                            <p>Artikel</p>
                            <p className={classes.titleStyle}>{item.itemname}</p>
                          </Grid>
                          <Grid container item md={4} sm={4} xs={4} alignItems="flex-end" direction="column">
                            <p>ANTAL</p>
                            <p className={classes.titleStyle}>{item.quantity}</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })
                : ""}
            </Grid>
          </Grid>

          <Grid container item md={4} justify="center">
            <Grid item xs={12} sm={8} md={12} className={classes.summarySection}>
              <Grid container item xs={12} sm={12} md={12} justify="center">
                <h2 className={classes.summaryTitle}>Tillgångar</h2>
              </Grid>
              {connectedItems.connectedAssets
                ? connectedItems.connectedAssets.map(item => {
                    return (
                      <Grid key={item.id} item md={12} xs={12} className={classes.assetListStyle}>
                        <Grid container item xs={12} md={12} alignItems="center" justify="space-between">
                          <Grid item xs={4} md={9}>
                            <p className={classes.leftGrid}>Artikel</p>
                            <p className={classes.titleStyle}>{item.title} </p>
                          </Grid>
                          <Grid item xs={4} md={3} className={classes.rightGrid}>
                            <p>
                              ANTAL <ArrowDropDownCircleIcon className={classes.arrowIcon} onClick={handleClickOpen} />
                            </p>
                            <p className={classes.quantityStyle}>{item.quantity}</p>
                          </Grid>

                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                            className={classes.dialog}
                          >
                            <DialogTitle id="form-dialog-title" className={classes.formDialogTitle}>
                              <p className={classes.h6}>Ändra antal</p>
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText className={classes.h7}>{item.title}</DialogContentText>
                              <Grid item md={12}>
                                <Grid container alignItems="center" className={classes.ammount}>
                                  <Grid item md={6}>
                                    <ContentEditable
                                      html={changedAmount}
                                      onChange={handleChange}
                                      className={classes.partAmmount}
                                    />
                                  </Grid>
                                  <Grid item md={6} className={classes.fullAmmount}>
                                    {" "}
                                    /{item.quantity}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} className={classes.spara}>
                                Spara
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Grid>
                      </Grid>
                    );
                  })
                : ""}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container md={2} justify="center">
          <Grid item md={12}>
            <Button
              size="large"
              square="true"
              className={classes.createContact}
              onClick={() => {
                setOpenSendModal(true);
              }}
            >
              Skapa kontakt
            </Button>
          </Grid>
          <CreateContactModal open={openSendModal} setOpenSendModal={setOpenSendModal} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ConnectedItems;
