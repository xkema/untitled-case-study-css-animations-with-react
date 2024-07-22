import styles from './FeatureImage.module.css';
import { DocumentScanner } from './animations/DocumentScanner';
import { SignAndStamp } from './animations/SignAndStamp';
import { BatchScanning } from './animations/BatchScanning';
import { AdvancedFilters } from './animations/AdvancedFilters';
import { ExportAndShare } from './animations/ExportAndShare';

export function FeatureImage({ id }: { id: string }) {
  return (
    <div
      className={styles['feature-image']}
      onAnimationEnd={(event) => {
        event.stopPropagation();
      }}
    >
      {id === 'document-scanner' && <DocumentScanner />}
      {id === 'sign-and-stamp' && <SignAndStamp />}
      {id === 'batch-scanning' && <BatchScanning />}
      {id === 'advanced-filters' && <AdvancedFilters />}
      {id === 'export-and-share' && <ExportAndShare />}
    </div>
  );
}
