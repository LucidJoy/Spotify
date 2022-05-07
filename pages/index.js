import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
