import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "../SideDrawer/SideDrawer";
import styles from "./Toolbar.module.scss";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle toggleSideDrawer={props.toggleSideDrawerHandler} />

    <SideDrawer />

    <div className={styles.Logo}>
      <Logo />
    </div>

    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
