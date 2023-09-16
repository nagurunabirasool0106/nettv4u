// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from 'next/head'
// import Link from 'next/link'
// import nettv4uLogo from '../assets/images/nettv4u.png'

import { api } from '~/utils/api'
import Image from 'next/image'
import ResponsiveAppBar from './components/appbar'

export default function Home() {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <ResponsiveAppBar />
      {/* <p>next js is running on material ui</p> */}
    </>
  )
}
