import styles from './NavButton.module.css';

import icon01DocumentScanner from '../assets/images/icon-01-document-scanner.png';
import icon02SignAndStamp from '../assets/images/icon-02-sign-and-stamp.png';
import icon03BatchScanning from '../assets/images/icon-03-batch-scanning.png';
import icon04AdvancedFilters from '../assets/images/icon-04-advanced-filters.png';
import icon05ExportAndShare from '../assets/images/icon-05-export-and-share.png';

interface NavButtonProps {
  name: string;
  id: string;
  activeContentId: string;
  setActiveContentId: React.Dispatch<React.SetStateAction<string>>;
}

export function NavButton({
  name,
  id,
  activeContentId,
  setActiveContentId,
}: NavButtonProps) {
  return (
    <button
      className={`${styles.button} ${id === activeContentId ? styles.active : ''}`}
      onClick={() => {
        setActiveContentId(id);
      }}
    >
      {id === 'document-scanner' && (
        <img
          className={styles.icon}
          src={icon01DocumentScanner}
          alt="Document Scanner"
        />
      )}
      {id === 'sign-and-stamp' && (
        <img
          className={styles.icon}
          src={icon02SignAndStamp}
          alt="Sign & Stamp"
        />
      )}
      {id === 'batch-scanning' && (
        <img
          className={styles.icon}
          src={icon03BatchScanning}
          alt="Batch Scanning"
        />
      )}
      {id === 'advanced-filters' && (
        <img
          className={styles.icon}
          src={icon04AdvancedFilters}
          alt="Advanced Filters"
        />
      )}
      {id === 'export-and-share' && (
        <img
          className={styles.icon}
          src={icon05ExportAndShare}
          alt="Export & Share"
        />
      )}
      {name}
    </button>
  );
}
