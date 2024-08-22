import icon01Scan from '../assets/images/icons/nav-icon-01-scan-32x32.png';
import icon02Sign from '../assets/images/icons/nav-icon-02-sign-32x32.png';
import icon03File from '../assets/images/icons/nav-icon-03-file-32x32.png';
import icon04Slider from '../assets/images/icons/nav-icon-04-slider-32x32.png';
import icon05Export from '../assets/images/icons/nav-icon-05-export-32x32.png';

export function ButtonIconSelector({
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
        <img src={icon01Scan} alt={featureName} title={featureName} />
      );
      break;
    case '63023138':
      targetForeground = (
        <img src={icon02Sign} alt={featureName} title={featureName} />
      );
      break;
    case '6fe926d7':
      targetForeground = (
        <img src={icon03File} alt={featureName} title={featureName} />
      );
      break;
    case '617df559':
      targetForeground = (
        <img src={icon04Slider} alt={featureName} title={featureName} />
      );
      break;
    case 'c8ce03e8':
      targetForeground = (
        <img src={icon05Export} alt={featureName} title={featureName} />
      );
  }

  return targetForeground;
}
