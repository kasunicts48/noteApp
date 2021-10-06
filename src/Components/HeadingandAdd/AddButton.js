import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddButton({onAddNote}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        className={classes.button}
        endIcon={<AddIcon />}
        onClick={onAddNote}
      >
        Add
      </Button>
      
    </div>
  );
}
