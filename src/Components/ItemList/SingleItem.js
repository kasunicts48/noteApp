import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteButton from './SingleItem/DeleteButton';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  active: {
    minWidth: 275,
    background: '#0169b8'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0px',
    transform: 'scale(0.6)',
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
  date: {
    marginTop: 3,
  },
 
});

export default function SingleItem({notes, onDeleteNote, activeNote, setActiveNote}) {

  const classes = useStyles();
  return (
    <Card className={`classes.root ${notes.id === activeNote && classes.active} `} onClick={() => setActiveNote(notes.id)}>
      <CardContent>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6" component="p">
          <strong>{notes.title}</strong>
        </Typography>
       <DeleteButton onDeleteNote={onDeleteNote} noteid={notes.id} />
        </div>
        <Typography className={classes.pos} component="p">
        {notes.body === "" ? "No Preview" : (notes.body && notes.body.substr(0,30) + "..." )}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary" className={classes.date} >
          Last Modified {new Date(notes.lastModified).toLocaleDateString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </Typography>
      </CardContent>
    </Card> 
  );
}


