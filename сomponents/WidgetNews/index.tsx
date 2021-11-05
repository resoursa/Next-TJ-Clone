// @flow
import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import styles from './WidgetNews.module.scss'



export const WidgetNews: React.FC = () => {
  return(
    <Paper classes={{ root: styles.root}} elevation={0}>
      <Typography variant="h5" component="h2">4 ноября, четверг</Typography>
    </Paper>
  );
};