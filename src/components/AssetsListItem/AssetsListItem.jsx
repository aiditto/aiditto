import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styles from "./AssetsListItemStyle";
// icons
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
const useStyles = makeStyles(styles);

const AssetsListItem = ({ item }) => {
  const classes = useStyles();
  const [assetItem, setAssetItem] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const text = useRef("0");

  const handleChange = evt => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(text.current);
  };

  useEffect(() => {
    setAssetItem(item);
  }, [item]);

  return assetItem ? (
    <Grid item md={12} xs={12} className={classes.assetListStyle}>
      <Grid container item xs={12} md={12} alignItems="center" justify="space-between">
        <Grid item xs={4} md={9}>
          <p className={classes.leftGrid}>{assetItem.itemtype}</p>
          <p className={classes.titleStyle}>{assetItem.title} </p>
        </Grid>
        <Grid item xs={4} md={3} className={classes.rightGrid}>
          <p>
            ANTAL <ArrowDropDownCircleIcon className={classes.arrowIcon} onClick={handleClickOpen} />
          </p>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
            <DialogTitle id="form-dialog-title" className={classes.formDialogTitle}>
              <p className={classes.h6}>Ändra antal</p>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p className={classes.h7}>Andningsskydd FFP3 </p>
              </DialogContentText>
              <Grid item md={12}>
                <Grid container alignItems="center" className={classes.ammount}>
                  <Grid item md={6}>
                    <ContentEditable
                      html={text.current}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.partAmmount}
                    />
                  </Grid>
                  <Grid item md={6} className={classes.fullAmmount}>
                    {" "}
                    /400
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

          <p className={classes.quantityStyle}>{assetItem.quantity}</p>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <>
      <p>Error</p>
    </>
  );
};

export default AssetsListItem;
