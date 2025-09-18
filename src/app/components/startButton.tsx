'use client';
import { useRouter } from 'next/navigation';
import styles from '../index.module.css';
export default function StartButton() {
  const router = useRouter(); 

  return (
    <div>
      <button
        type="button"
        className={styles.cta}
        onClick={() => router.push('/dataset')}
        aria-label="Upload Dataset"
      >
       Start
      </button>
    </div>
  );
}
