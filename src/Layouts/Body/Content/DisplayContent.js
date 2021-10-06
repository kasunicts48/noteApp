//? Display Title
//? Display Note
import React from 'react'
import DisplayNote from "../../../Components/DisplayContent/DisplayNote";
import DisplayTitle from "../../../Components/DisplayContent/DisplayTitle";

export default function DisplayContent({activeNote}) {

    return (
        <div style={{padding: "20px", background: "#F5F5F5", margin: "10px", minHeight: "370px", borderRadius: "5px"}}>
            <DisplayTitle activeNote={activeNote} />
            <DisplayNote activeNote={activeNote} />
        </div>
    )
}

// import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";F9F6F5
// import Container from "@material-ui/core/Container";

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="xl">
//         <Typography
//           component="div"
//           style={{ backgroundColor: "#fff", height: "50vh" }}
//         >
//           <DisplayTitle />
//           <DisplayNote />
//         </Typography>
//       </Container>
//     </React.Fragment>
//   );
// }
