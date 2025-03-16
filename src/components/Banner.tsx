import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image 
            src="/img/banner.jpg" 
            alt="Banner"
            fill={true}
            style={{objectFit:"cover"}}/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
                <h3 className='text-xl font-serif' style={{marginTop:"8px"}}>Looking for the perfect venue for your next event? We offer a spacious and well-equipped venue for all types of gatherings, including weddings, corporate events, birthday parties, and more.</h3>
            </div>
        </div>
    )
}