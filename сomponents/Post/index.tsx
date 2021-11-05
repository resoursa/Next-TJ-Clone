// @flow
import React from 'react';
import {Link, Paper, Typography} from "@material-ui/core";
import Image from 'next/image';

import styles from './Post.module.scss'



export const Post: React.FC = () => {
  return(
    <Paper elevation={0} className="p-20" classes={{ root: styles.root }}>
      <Typography variant="h4" className={styles.title}>
        <Link href="/news/test-123" color="inherit" underline="none">
            Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о «гигантском пушистом захватчике»
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
        апокалиптические сюжеты с котом в главной роли.
      </Typography>
      <div className={styles.imgWrap}>
        <Link href="/news/test-123" color="inherit" underline="none">
          <Image
            src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
            width='100%'
            height='100%'
            objectFit='contain'
          />
        </Link>
      </div>

    </Paper>
  );
};