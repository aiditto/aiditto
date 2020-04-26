import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

// @material-ui/icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import HomeIcon from "@material-ui/icons/Home";
import Dashboard from "@material-ui/icons/Dashboard";
import Fingerprint from "@material-ui/icons/Fingerprint";
import InfoIcon from "@material-ui/icons/Info";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonAdd from "@material-ui/icons/PersonAdd";
import BusinessIcon from "@material-ui/icons/Business";
import styles from "assets/jss/material-dashboard-pro-react/components/navbarStyle.js";
import cx from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// Mobile friendliness
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

// core components
import Button from "components/CustomButtons/Button";
import authenticationService from "services/auth.service";

// Translation
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

export default function Navbar(props) {
  const { t } = useTranslation();

  // Checks if menu should be open or in mobil state
  const [open, setOpen] = useState(false);
  const [adminDropDown, setAdminDropdown] = useState(false);
  const history = useHistory();
  const signOut = () => authenticationService.logout();
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleAdminDropdown = () => {
    setAdminDropdown(!adminDropDown);
  };

  const getLoggedstatus = () => {
    if (!authenticationService.isAuthenticated()) {
      return (
        <NavLink
          to={"/login"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: history.location.pathname === "/login"
          })}
        >
          <Fingerprint className={classes.listItemIcon} />
          <ListItemText primary={t("navbar.user.signIn")} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      );
    } else {
      return (
        <div className={cx(classes.navLink, classes.logoutBtn)} onClick={signOut}>
          <PowerSettingsNewIcon className={classes.listItemIcon} />
          <ListItemText primary={t("navbar.user.signOut")} disableTypography={true} className={classes.listItemText} />
        </div>
      );
    }
  };
  const classes = useStyles();
  const { color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });

  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: ["/home", "/"].includes(history.location.pathname)
          })}
        >
          <HomeIcon className={classes.listItemIcon} />
          <ListItemText primary={t("navbar.home")} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
      {authenticationService.isAuthenticated() && (
        <>
          <Hidden smDown>
            <List
              className={classes.listItem}
              onMouseEnter={() => setAdminDropdown(true)}
              onMouseLeave={() => setAdminDropdown(false)}
            >
              <ListItem className={`${classes.navLink} ${classes.adminNavWrap}`} onClick={handleAdminDropdown}>
                <Dashboard className={classes.listItemIcon} />
                <ListItemText
                  primary={t("navbar.supplyCoordinator.title")}
                  disableTypography={true}
                  className={classes.listItemText}
                />
                {adminDropDown ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
              </ListItem>

              {adminDropDown && (
                <List className={classes.adminDropDown} component="div">
                  <ListItem className={classes.navDropdownItem}>
                    <NavLink to={"/nyheter"} className={classes.adminDropDownLinks}>
                      {t("navbar.news.add")}
                    </NavLink>
                  </ListItem>
                  <Divider />
                  <ListItem className={classes.navDropdownItem}>
                    <NavLink to={"/admin"} className={classes.adminDropDownLinks}>
                      {t("navbar.supplyCoordinator.manage")}
                    </NavLink>{" "}
                  </ListItem>
                </List>
              )}
            </List>
          </Hidden>

          <Hidden mdUp>
            <List className={classes.listItem}>
              <ListItem className={`${classes.navLink} ${classes.adminNavWrap}`} onClick={handleAdminDropdown}>
                <Dashboard className={classes.listItemIcon} />
                <ListItemText
                  primary={t("navbar.supplyCoordinator.title")}
                  disableTypography={true}
                  className={classes.listItemText}
                />
                {adminDropDown ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
              </ListItem>
              <Collapse in={adminDropDown}>
                <List component="div">
                  <ListItem className={classes.navDropdownItem}>
                    <NavLink to={"/nyheter"} className={classes.adminMobileDropDown}>
                      {t("navbar.news.add")}
                    </NavLink>
                  </ListItem>
                  <ListItem className={classes.navDropdownItem}>
                    <NavLink to={"/admin"} className={classes.adminMobileDropDown}>
                      {t("navbar.supplyCoordinator.manage")}
                    </NavLink>{" "}
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Hidden>
        </>
      )}
      {authenticationService.isAuthenticated() && (
        <ListItem className={classes.listItem}>
          <NavLink
            to={"/producent"}
            className={cx(classes.navLink, {
              [classes.navLinkActive]: history.location.pathname === "/producent"
            })}
          >
            <BusinessIcon className={classes.listItemIcon} />
            <ListItemText primary={t("navbar.supplier")} disableTypography={true} className={classes.listItemText} />
          </NavLink>
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/nyheter"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: history.location.pathname === "/nyheter"
          })}
        >
          <InfoIcon className={classes.listItemIcon} />
          <ListItemText primary={t("navbar.news.title")} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
      {/*
      {!authenticationService.isAuthenticated() && (
        <ListItem className={classes.listItem}>
          <NavLink
            to={"/signup"}
            className={cx(classes.navLink, {
              [classes.navLinkActive]: history.location.pathname === "/signup"
            })}
          >
            <PersonAdd className={classes.listItemIcon} />
            <ListItemText primary={t('navbar.user.signUp')} disableTypography={true} className={classes.listItemText} />
          </NavLink>
        </ListItem>
      )}
      */}
      <ListItem className={classes.listItem}>{getLoggedstatus()}</ListItem>
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <NavLink to={"/"} className={classes.aidLogo}>
            AID IT TO
            <span className={classes.cityName}>Malmö</span>
          </NavLink>
        </div>

        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Button>

          <Drawer
            variant="temporary"
            anchor={"right"}
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {list}
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string
};
