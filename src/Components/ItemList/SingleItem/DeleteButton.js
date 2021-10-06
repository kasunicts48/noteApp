import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(0)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function DeleteButton({onDeleteNote, noteid}) {
  const classes = useStyles();

  return (
    <IconButton aria-label="delete" className={classes.margin} onClick={() => {onDeleteNote(noteid)}} >
    <DeleteIcon fontSize="small" style={{ fill: '#E50914' }} />
  </IconButton>
  );
}
