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
    height: "100vh",
  },
  box: {
    maxWidth: "800px",
    margin: "40px auto",
    borderRadius: "0px",
    padding: "0px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
                        {feeding.food}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {feeding.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {format(new Date(feeding.time), "MM/dd/yyyy @ h:mm")}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Grid container direction="column" alignItems="center">
                          {`${feeding.location.street} ${feeding.location.city} ${feeding.location.province} ${feeding.location.country}`}
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
