import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import AppBarComponent from "./appbar.jsx";
import MenuComponent from "./menu.jsx";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {},
}));

const LayoutComponent = (props) => {
  const classes = useStyles();
  const [menuToggle, setMenuToggle] = useState(false);
  const { title, children } = props;

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Feedin' the Ducks</title>
        <meta
          name="description"
          content="An utility to track the feeding of ducks"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Helmet>
      <AppBarComponent
        title={title}
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
      />
      <MenuComponent setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

LayoutComponent.propTypes = {
  title: PropTypes.string,
};

export default LayoutComponent;
