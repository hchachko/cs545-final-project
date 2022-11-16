import React, { useContext } from "react";
import SignOutButton from "./SignOutButton";
import { AuthContext } from "../firebase/Auth";
import { Card, CardMedia } from "@mui/material";
import { Grid, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: "60vh",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
    border: "1px solid black",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
    backgroundColor: "white",
  },
  grid: {
    flexGrow: 1,
    flexDirection: "row",
  },
  media: {
    height: "100%",
    width: "100%",
  },
});

function Account() {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  console.log(currentUser);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser._delegate.displayName}
          </Typography>
          {currentUser && (
            <CardMedia
              component="img"
              alt="No User Image"
              height="140"
              image={currentUser._delegate.photoURL}
              className={classes.media}
            />
          )}

          <Typography variant="body2" color="text.secondary">
            Email: {currentUser._delegate.email}
          </Typography>
        </CardContent>
        <SignOutButton className={classes.button} />
      </Card>
    </Grid>
  );
}

export default Account;
