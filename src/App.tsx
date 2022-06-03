import React from 'react';

import styles from './App.module.css';
import Button from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main>
          <div className={styles.hero}>
            <h1>We make your music sound extraordinary.</h1>
            <p className={styles.subtitle}>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
          </div>
          <div className={styles.content}>
            <div className={styles.background} />
            <div className={styles.illustration} />
            <div className={styles.card}>
              <h2>Premium EQ</h2>
              <p className={styles.description}>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
              <div className={styles.price}>
                <p className={styles.value}>$4</p>
                <p className={styles.perio}>/month</p>
              </div>
              <div className={styles.buttons}>
                <Button variant='ios' />
                <Button variant='android' />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
