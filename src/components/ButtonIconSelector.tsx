import Icon01Scan from '../assets/images/icons/nav-icon-01-scan-32x32.png';
import Icon02Sign from '../assets/images/icons/nav-icon-02-sign-32x32.png';
import Icon03File from '../assets/images/icons/nav-icon-03-file-32x32.png';
import Icon04Slider from '../assets/images/icons/nav-icon-04-slider-32x32.png';
import Icon05Export from '../assets/images/icons/nav-icon-05-export-32x32.png';

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
        <img src={Icon01Scan} alt={featureName} title={featureName} />
      );
      break;
    case '63023138':
      targetForeground = (
        <img src={Icon02Sign} alt={featureName} title={featureName} />
      );
      break;
    case '6fe926d7':
      targetForeground = (
        <img src={Icon03File} alt={featureName} title={featureName} />
      );
      break;
    case '617df559':
      targetForeground = (
        <img src={Icon04Slider} alt={featureName} title={featureName} />
      );
      break;
    case 'c8ce03e8':
      targetForeground = (
        <img src={Icon05Export} alt={featureName} title={featureName} />
      );
  }

  return targetForeground;
}
