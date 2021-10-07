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

function createData(subject, professor, action) {
  return { subject, professor, action };
}

const rows = [
  createData('Tamil', 'Prof. Shaym Prateek', 'Send'),
  createData('English', 'Prof. Shaym Prateek', 'Send'),
  createData('Maths', 'Prof. Shaym Prateek', 'Send'),
  createData('Science', 'Prof. Shaym Prateek', 'Send'),
  createData('Social', 'Prof. Shaym Prateek', 'Send'),

];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth: 900,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell >Teacher</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.subject}>
              <StyledTableCell component="th" scope="row">{row.subject} </StyledTableCell>
              <StyledTableCell >{row.professor}</StyledTableCell>
              <StyledTableCell >{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
