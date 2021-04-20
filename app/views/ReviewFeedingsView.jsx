import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  withStyles,
  Link,
  Card,
  Grid,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Feeding from "../pages/api/feeding";
import RoomIcon from "@material-ui/icons/Room";
import IconButton from "@material-ui/core/IconButton";
import format from "date-fns/format";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(" + "/assets/images/wetland-bg.svg" + ")",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw auto",
    backgroundAttachment: "fixed",
    bottom: "0",
    paddingTop: "40px",
  },
  box: {
    maxWidth: "800px",
    margin: "0 auto",
    borderRadius: "0px",
    padding: "0px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
    textAlign: 'center',
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const ReviewFeedingsView = () => {
  const classes = useStyles();
  const [feedings, setFeedings] = useState();

  useEffect(() => {
    Feeding.getAllFeedings()
      .then((feedingsArray) => {
        setFeedings(feedingsArray);
      })
      .catch((error) => {
        console.log(`Failed to get feedings - ${Error}`);
      });
  }, []);

  return (
    <div className={classes.root}>

      <Card elevation={10} className={classes.box}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Number of Ducks</StyledTableCell>
              <StyledTableCell>Type of Food</StyledTableCell>
              <StyledTableCell align="right">
                Amount of food in grams
              </StyledTableCell>
              <StyledTableCell align="right">Date and Time Fed</StyledTableCell>
              <StyledTableCell align="center">
                Location of Feeding
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedings
              ? feedings.map((feeding) => {
                  return (
                    <StyledTableRow key={feeding._id}>
                      <StyledTableCell component="th" scope="row">
                        <Typography variant="h5" align="center">
                          {feeding.numberOfDucks}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Typography>{feeding.food}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="right" align="center">
                        <Typography>{feeding.quantity}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography>
                          {format(new Date(feeding.time), "MM/dd/yyyy")}
                        </Typography>
                        <Typography>
                          {format(new Date(feeding.time), "h:mmaaa")}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Grid container direction="column" alignItems="center">
                          <Typography align="center">
                            {`${feeding.location.street}`}
                            <br />
                            {`${feeding.location.city} ${feeding.location.province} ${feeding.location.country}`}
                          </Typography>
                          {feeding.location.coords ? (
                            <a
                              target="_blank"
                              href={`https://www.google.com/maps/search/?api=1&query=${feeding.location.coords.coordinates[0]},${feeding.location.coords.coordinates[1]}`}
                            >
                              <IconButton>
                                <RoomIcon fontSize="large" color="#3FA8B7" />
                              </IconButton>
                            </a>
                          ) : null}
                        </Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ReviewFeedingsView;
