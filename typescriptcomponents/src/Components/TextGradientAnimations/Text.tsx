import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  text: {
    fontSize: '100px',
        fontWeight: 'bold',
    marginTop: '50px',
    animationName: {
      from: { color: 'red' },
      '25%': { color: 'blue' },
      '50%': { color: 'green' },
      '75%': { color: 'purple' },
      to: { color: 'red' },
    },
    animationDuration: '10s',
    animationIterationCount: 'infinite',
  },
});

const Text = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.text}>
      Welcome to the Zitics World....
    </div>
  );
};

export default Text;
