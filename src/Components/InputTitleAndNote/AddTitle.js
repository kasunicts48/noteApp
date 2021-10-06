import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
      width: "98%"
    },
    customTextField: {
      "& > * input::placeholder": {
        fontSize: "70px"  
      }
    }
  },
}));

export default function AddTitle({activeNote, onUpdateNote}) {
  const classes = useStyles();

  const onEditField = (key,value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    })
  }



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
       classes={{ root: classes.customTextField }}
        id="outlined-basic"
        placeholder= "Enter the title here"
        value={activeNote.title}
        variant="outlined"
        autoFocus
        inputProps={{style: {fontSize: 20}}}
        onChange={(e) => {onEditField("title",e.target.value)}}
        
      />
    </form>
  );
}
