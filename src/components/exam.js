import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Curriculam from './Curriculum';
import ExamShedule from './ExamShedule';


const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 1200,
        margin: 15,
        // float: 'left',
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
export default function Exam() {
  const classes = useStyles();

    return (
        <div>
            <Card className={classes.curriculam}>
                <CardContent>
                    <h3>Curriculum</h3>
                    <Curriculam />
                </CardContent>
            </Card>

            <Card className={classes.curriculam}>
                <CardContent>
                    <h3>Exam Shedule</h3>
                    <ExamShedule />
                </CardContent>
            </Card>

        </div>

    );
}