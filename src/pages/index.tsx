// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from 'next/head'
// import Link from 'next/link'
// import nettv4uLogo from '../assets/images/nettv4u.png'

import { api } from '~/utils/api'
import Image from 'next/image'
import ResponsiveAppBar from './components/appbar'
import ResponsiveAppBar2 from './components/appbar2'
import Newsdropdown from './components/newsdropdown'
import Photogallerydropdown from './components/photogallerydropdown'
import Playdropdown from './components/playdropdown'
import Reviewsdropdown from './components/reviewsdropdown'
import Videosdropdown from './components/videosdropdown'
import Articlesdropdown from './components/articlesdropdown'
import Celebritydropdown from './components/celebritydropdown'
import Tvserialsdropdown from './components/tvserialsdropdown'
import Moredropdown from './components/moredropdowm'


export default function Home() {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />
      <Newsdropdown/>
      <Photogallerydropdown/>
      <Playdropdown/>
      <Reviewsdropdown/>
      <Videosdropdown/>
      <Articlesdropdown/>
      <Celebritydropdown/>
      <Tvserialsdropdown/>
      <Moredropdown/>
      {/* <p>next js is running on material ui</p> */}
    </>
    
  )
}
