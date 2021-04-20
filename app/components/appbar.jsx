import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { context } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const AppBarComponent = ({ title }) => {
  const [state, dispatch] = useContext(context);
  const classes = useStyles();

  const handleMenuToggle = () => {
    dispatch({ type: "Toggle Menu" });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="textSecondary">{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
