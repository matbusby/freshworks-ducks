import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const HomePageView = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Word</h1>
      <Typography>Hello</Typography>
    </div>
  );
};

export default HomePageView;
