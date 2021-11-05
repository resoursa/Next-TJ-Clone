// @flow
import React from 'react';
import {Paper, Button, IconButton, Avatar} from "@material-ui/core";

import styles from './Header.module.scss'

import {
  Search as SearchIcon,
  SmsOutlined as MessageIcon,
  NotificationsOutlined as NotifIcon,
  ExpandMoreOutlined as ArrowBottom,
  MenuOutlined as BurgerIcon,
  CreateOutlined as PenIcon
} from '@material-ui/icons'



export const Header: React.FC = () => {
  return(
    <Paper classes={{ root: styles.root}} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <BurgerIcon/>
        </IconButton>

        <a>
          <img className={styles.logo} src="/static/img/logo.svg" alt="Logo" />
        </a>

        <div className={styles.searchBlock}>
          <SearchIcon/>
          <input placeholder='Search'/>
        </div>

        <Button
          variant="contained"
          className={styles.penButton}
        >
          <PenIcon/>
        </Button>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon/>
        </IconButton>
        <IconButton>
          <NotifIcon/>
        </IconButton>

        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/yti/APfAmoGhLVFAleAWYP0dboFH9Ka1Uw4eEtXlMGYN11vnTC0=s88-c-k-c0x00ffffff-no-rj-mo"
        />
        <ArrowBottom />
      </div>
    </Paper>
  );
};