import { useRouter } from "next/router";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  signUpPaper: {
    display: "inline-block",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: "1rem",
  },
  content: {
    marginTop: theme.spacing(4),
  },
  paper: {
    width: "400px",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
        <h1>Word</h1>
      <Typography>Hello</Typography>
    </div>
  );
};

export default HomePageView;
