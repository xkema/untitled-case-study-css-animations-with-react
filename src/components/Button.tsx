import { Dispatch, SetStateAction } from 'react';
import styles from '../../src/App.module.css';
import { ButtonIconSelector } from './ButtonIconSelector';
import { Feature } from '../data/features';
import { ButtonIconBackground } from './ButtonIconBackground';

export type ButtonProps = {
  feature: Feature;
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
};

export function Button({ feature, activeId, setActiveId }: ButtonProps) {
  return (
    <button
      className={`${styles['navigation-button']} ${activeId === feature.id ? styles['active'] : ''}`}
      onClick={() => {
        setActiveId(feature.id);
      }}
    >
      <span className={styles['navigation-button-icon']}>
        <ButtonIconBackground feature={feature} activeId={activeId} />
        <ButtonIconSelector featureId={feature.id} featureName={feature.name} />
      </span>
      <span className={styles['navigation-button-text']}>{feature.name}</span>
    </button>
  );
}
