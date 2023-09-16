// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import * as React from 'react'
import Head from 'next/head'
import { type AppType, AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import { api } from '~/utils/api'

// import '@fortawesome/fontawesome-svg-core/styles.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
// config.autoAddCss = false

import '~/styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

type PagePropsType = {
  // Define the properties and their types that you expect in pageProps.
  // For example:
  id: number
  name: string
  // Add more properties as needed.
}

const MyApp: AppType<{ session: null }> = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache } = props
  // const pageProps: PagePropsType = { ...props.pageProps }
  return (
    // <SessionProvider session={session}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props.pageProps} />
      </ThemeProvider>
    </CacheProvider>
    // </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
