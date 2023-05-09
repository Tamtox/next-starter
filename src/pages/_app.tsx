import '@/styles/globals.scss';
import '@/styles/animation.scss';

import { Box } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Navbar from '@/components/UI/navbar/navbar';
import { IAuthStore, useAuthStore } from '@/store/auth_store';
import styles from '@/styles/main.module.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { authToken, darkMode } = useAuthStore((state: IAuthStore) => state);
  return (
    <>
      <Head>
        <meta name="description" content="Shop application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <main className={styles.main}>
          <Box className={`${styles.wrapper}`}>
            <Component {...pageProps} />
          </Box>
        </main>
      </Box>
    </>
  );
}
