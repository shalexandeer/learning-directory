'use client';
import styles from '../app/page.module.scss';
import GSAP from '../components/GSAP';
import FramerMotion from '../components/FramerMotion';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';


const Home = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      <GSAP />
      <FramerMotion />
    </main>
  )
}

export default Home