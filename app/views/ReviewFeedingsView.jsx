import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Feeding from "../pages/api/feeding";

const useStyles = makeStyles((theme) => ({
  root: {},
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
    '&:nth-of-type(odd)': {
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
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type of Food</StyledTableCell>
            <StyledTableCell align="right">
              Amount of food in grams
            </StyledTableCell>
            <StyledTableCell align="right">Date and Time Fed</StyledTableCell>
            <StyledTableCell align="right">Location of Feeding</StyledTableCell>
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
                      {feeding.time}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      hello
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReviewFeedingsView;
