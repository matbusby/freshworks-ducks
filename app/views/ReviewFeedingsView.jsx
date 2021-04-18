import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {},
  }));

const ReviewFeedingsView = () => {
  const classes = useStyles();

  return (
    <div>
        <h1>Review Feedings</h1>
      <Typography>Hello</Typography>
    </div>
  );
};

export default ReviewFeedingsView;
