import * as React from 'react'
import Head from 'next/head'
import { type AppType, AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import { api } from '~/utils/api'

import '~/styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: AppType<{ session: null }> = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props.pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default api.withTRPC(MyApp)
