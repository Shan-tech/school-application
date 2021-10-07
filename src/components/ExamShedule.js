import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'green',
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

function createData(date, subject, timmings) {
  return { date, subject, timmings };
}

const rows = [
  createData('06/08/20', 'Tamil', '9.30 - 11.00'),
  createData('08/08/20', 'English', '9.30 - 11.00'),
  createData('10/08/20', 'Maths', '9.30 - 11.00'),
  createData('11/08/20', 'Science', '9.30 - 11.00'),
  createData('14/08/20', 'Social', '9.30 - 11.00'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth: 900,
  },
});

export default function ExamShedule() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Subject</StyledTableCell>
            <StyledTableCell >Timmings</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.subject}>
              <StyledTableCell component="th" scope="row">{row.date} </StyledTableCell>
              <StyledTableCell >{row.subject}</StyledTableCell>
              <StyledTableCell >{row.timmings}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
