import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: "white",
    textDecoration: "none"
  }
}));

function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link className="link" to="/">
            <Typography
              edge="start"
              className={classes.homeButton}
              aria-label="menu"
            >
              Home
            </Typography>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {/* News */}
          </Typography>
          <Link className="link" to="/sorting">
            <Button className={classes.button}>Sorting Algorithms </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
