import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Curriculam from './Curriculum';
import ExamShedule from './ExamShedule';


const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 1200,
    margin: 15,
    float: 'left',
    alignContent: 'center',
  },
  curriculam: {
    minWidth: 250,
    margin: 15,
    float: 'left',
    alignContent: 'center',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  var attendance_percent = '86%';
  var grade_percent = '91%';

  return (

    <Grid>
      <div >
        <Card className={classes.root}>
          <CardContent>
            <h1> Your average attendance : {attendance_percent}</h1>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <h1>Your overall grade points : {grade_percent}</h1>
          </CardContent>
        </Card>


      </div>

    </Grid>

  );
}

