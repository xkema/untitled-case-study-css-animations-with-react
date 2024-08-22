import phone01Scan from '../assets/images/backgrounds/phone-01-scan-375-750.png';
import phone02Sign from '../assets/images/backgrounds/phone-02-sign-375-750.png';
import phone03File from '../assets/images/backgrounds/phone-03-file-375-750.png';
import phone04Slider from '../assets/images/backgrounds/phone-04-slider-375-750.png';
import phone05Export from '../assets/images/backgrounds/phone-05-export-375-750.png';

export function BackgroundSelector({
  featureId,
  featureName,
}: {
  featureId: string;
  featureName: string;
}) {
  let targetBackground = <></>;

  switch (featureId) {
    case '825cc467':
      targetBackground = (
        <img src={phone01Scan} alt={featureName} title={featureName} />
      );
      break;
    case '63023138':
      targetBackground = (
        <img src={phone02Sign} alt={featureName} title={featureName} />
      );
      break;
    case '6fe926d7':
      targetBackground = (
        <img src={phone03File} alt={featureName} title={featureName} />
      );
      break;
    case '617df559':
      targetBackground = (
        <img src={phone04Slider} alt={featureName} title={featureName} />
      );
      break;
    case 'c8ce03e8':
      targetBackground = (
        <img src={phone05Export} alt={featureName} title={featureName} />
      );
  }

  return targetBackground;
}
