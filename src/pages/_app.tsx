import '@/styles/globals.scss';
import '@/styles/animation.scss';

import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Navbar from '@/components/UI/navbar/navbar';
import { IAuthStore, useAuthStore } from '@/store/auth_store';
import styles from '@/styles/main.module.scss';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

export default function MyApp({ Component, pageProps }: AppProps) {
  const { authToken, darkMode } = useAuthStore((state: IAuthStore) => state);
  return (
    <>
      <Head>
        <meta name="description" content="Shop application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <main className={styles.main}>
          <Box className={`${styles.wrapper}`}>
            <Component {...pageProps} />
          </Box>
        </main>
      </ChakraProvider>
    </>
  );
}
