import { makeStyles, Typography, Card, Link, Button } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(" + "/assets/images/wetland-bg.svg" + ")",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw auto",
    backgroundAttachment: "fixed",
    bottom: "0",
    padding: "50px 0",
  },
  card: {
    margin: "50px 50px 0 50px",
    textAlign: "center",
  },
  duck: {
    width: "200px",
    margin: "0 auto 20px auto",
    display: "block",
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    fontWeight: "700",
    margin: "25px auto",
    width: "fit-content",
    padding: '15px'
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <img className={classes.duck} src="/assets/images/duck-silhouette.png" />
      <Card elevation={10} className={classes.card}>
        <Typography variant="h3" align="center">
          Duck Feedings
        </Typography>
        <Typography variant="h6" align="center">
          Hello, and welcome.
        </Typography>
        <Typography variant="h6" align="center">
          Thank you for taking the time to visit our site and participate in
          this study.
        </Typography>
        <Typography variant="body2">
          The goal of this research is to analyze the patterns with which ducks
          are being fed around the world. In our study we will look at important
          details such as the location of the feeding, the number of ducks fed,
          the type of food they are fed and how much they are given.
        </Typography>
        <Typography variant="body2">
          If you have a feeding to submit, click the button below and enter the
          information about your feeding with as much detail as possible
        </Typography>
          <Button
            className={classes.button}
            onClick={() => router.push("/feeding")}
          >
            Submit a new Feeding
          </Button>
      </Card>
    </div>
  );
};

export default HomePageView;
