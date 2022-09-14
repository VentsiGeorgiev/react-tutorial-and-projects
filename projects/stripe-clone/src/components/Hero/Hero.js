import styles from './Hero.module.css';
import heroImage from '../../assets/hero-image.png';
import { BsChevronRight } from 'react-icons/bs';

function Hero() {
    return (
        <>
            <section className={styles['hero']}>
            </section>

            <section className={`${styles['hero-wrapper']}`}>

                <div className={styles['hero-center']}>

                    <section  >
                        <h1 className={styles['hero-title']}>Payments infrastructure for the internet</h1>
                        <p className={styles['hero-center']}>Millions of businesses of all sizes—from startups to large enterprises—use Stripe's
                            software and APIs to accept payments, send payouts, and manage their businesses online.
                        </p>
                        <div className={styles['button-wrapper']}>
                            <button className={styles['btn-start']}>Start now <BsChevronRight /></button>
                            <button className={styles['btn-sales']}>Contact sales <BsChevronRight /> </button>
                        </div>
                    </section>
                    <section className='hero-image'>
                        <img className={styles['hero-image']} src={heroImage} alt="hero-img" />
                    </section>

                </div>
            </section>

        </>

    );
}

export default Hero;