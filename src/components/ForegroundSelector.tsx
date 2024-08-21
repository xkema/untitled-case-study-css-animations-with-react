import Particle01Scan from '../assets/images/foregrounds/phone-foreground-01-342-676.png';
import Particle02Sign from '../assets/images/foregrounds/phone-foreground-02-342-676.png';
import Particle03File from '../assets/images/foregrounds/phone-foreground-03-342-676.png';
import Particle04Slider from '../assets/images/foregrounds/phone-foreground-04-342-676.png';
import Particle05Export from '../assets/images/foregrounds/phone-foreground-05-342-676.png';

export function ForegroundSelector({
  featureId,
  featureName,
}: {
  featureId: string;
  featureName: string;
}) {
  let targetForeground = <></>;

  switch (featureId) {
    case '825cc467':
      targetForeground = (
        <img src={Particle01Scan} alt={featureName} title={featureName} />
      );
      break;
    case '63023138':
      targetForeground = (
        <img src={Particle02Sign} alt={featureName} title={featureName} />
      );
      break;
    case '6fe926d7':
      targetForeground = (
        <img src={Particle03File} alt={featureName} title={featureName} />
      );
      break;
    case '617df559':
      targetForeground = (
        <img src={Particle04Slider} alt={featureName} title={featureName} />
      );
      break;
    case 'c8ce03e8':
      targetForeground = (
        <img src={Particle05Export} alt={featureName} title={featureName} />
      );
  }

  return targetForeground;
}
