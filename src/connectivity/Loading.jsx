import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 220000000,
    color: '#fff',
  },
}));
export default function Loading({ loading }) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <div className="scene">
          <div className="cube-wrapper">
            <div className="cube">
              <div className="cube-faces">
                <div className="cube-face shadow"></div>
                <div className="cube-face bottom"></div>
                <div className="cube-face top"></div>
                <div className="cube-face left"></div>
                <div className="cube-face right"></div>
                <div className="cube-face back"></div>
                <div className="cube-face front"></div>
              </div>
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
