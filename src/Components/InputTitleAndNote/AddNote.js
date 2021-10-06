import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "98%",
    },
  },
}));

export default function AddNote({ activeNote, onUpdateNote }) {
  const classes = useStyles();

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
    >

      <div>
        {/* <ReactMarkdown></ReactMarkdown> */}
     
        <TextField
          label="Note"
          multiline
          rows={15}
          placeholder="type Here your note"
          value={activeNote.body}
          variant="outlined"
          onChange={(e) => {
            onEditField("body", e.target.value);
          }}
        />
      </div>
    </form>
  );
}
