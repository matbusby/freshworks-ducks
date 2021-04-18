import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {},
  }));

const NewFeedingView = () => {
  const classes = useStyles();

  return (
    <div>
        <h1>Feeding asdf</h1>
      <Typography>Hello</Typography>
    </div>
  );
};

export default NewFeedingView;
