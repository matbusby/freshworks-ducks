import {
  ChangeEvent,
  ReactElement,
  useContext,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  SvgIconTypeMap,
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Schedule as ScheduleIcon,
  Home as HomeIcon,
  AccountBox as AccountBoxIcon,
  Info as InfoIcon,
} from "@material-ui/icons";
import { context } from '../context';


const useStyles = makeStyles((theme) => ({
  root: {},
  insideDrawer: {
    minWidth: "300px",
  },
}));

const MenuComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  const [state, dispatch] = useContext(context);

  const [navigationList, setNavigationList] = useState([
    { icon: HomeIcon, text: "Home", link: "/" },
    { icon: InfoIcon, text: "About", link: "/about" },
  ]);

  const handleMenuToggle = () => {
    dispatch({ type: 'Toggle Menu' });
  };

  return (
    <div className={classes.root}>
      <SwipeableDrawer
        anchor="left"
        open={state['menu']}
        onOpen={handleMenuToggle}
        onClose={handleMenuToggle}
      >
        <div className={classes.insideDrawer}>
          <IconButton onClick={handleMenuToggle}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            {navigationList.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => {
                  handleMenuToggle();
                  router.push(item.link);
                }}
              >
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default MenuComponent;
