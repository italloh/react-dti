import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from '../item'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


const SimpleList = (props) => {
  console.log('props list', props)  
  const classes = useStyles();
  const { list } = props

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Todo List">
        { list.map(item => props.renderItem(item))}
      </List>
    </div>
  );
}

export default SimpleList