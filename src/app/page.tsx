
import type { NextPage } from 'next';
import styles from './index.module.css';
import StartButton from './components/startButton';
const MacBookPro161: NextPage = () => {

  return (
    <div className={styles.macbookPro161}>
      <div className={styles.mlgorithmTracer}>MLgorithm Tracer</div>

      <div className={styles.panel}>
        <ul>
          <li>See how ML thinks—step by step.</li>
          <li>Upload data. Pick an algorithm. Watch the math unfold.</li>
          <li>From entropy to prediction: every calculation, clearly explained.</li>
          <li>No black boxes—just formulas, gains, and decisions you can trust.</li>
          <li>Show-your-work ML: transparent trees, traceable outcomes.</li>
          <li>Turn datasets into decisions with explainable math at every split.</li>
          <li>Click run, get reasoning: ID3 and more, fully traced.</li>
          <li>The ML calculator that tells you why, not just what.</li>
          <li>Build, trace, understand—microservices powering explainable ML.</li>
          <li>Your dataset. Our math. Transparent results.</li>
        </ul>
      </div>
     <StartButton/>
    </div>
  );
};

export default MacBookPro161;
