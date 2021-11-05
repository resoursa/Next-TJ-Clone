// @flow
import React from 'react';
import {Paper } from "@material-ui/core";

import styles from './MainLayout.module.scss'

import { WidgetNews } from '../WidgetNews'
import {Post} from "../Post";
import {LeftMenu} from "../LeftMenu";


export const MainLayout: React.FC = () => {
  return(
    <Paper classes={{ root: styles.root}} elevation={0}>
      <aside className={styles.leftSidebar}>
        <LeftMenu/>
      </aside>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          {/*<WidgetNews />*/}
          <Post/>
        </div>
      </div>
      <aside className={styles.rightSidebar}>
        Right Side
      </aside>
    </Paper>
  );
};