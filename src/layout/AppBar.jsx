import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const appBar = (props) => {
    const {classes} = props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              TODO List
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired
};

var styles = {
  root: {
    flexGrow: 1
  },
};


export default withStyles(styles)(appBar)