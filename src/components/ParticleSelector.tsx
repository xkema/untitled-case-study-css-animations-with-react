import { Particle02Sign } from './particles/Particle02Sign';
import { Particle03File } from './particles/Particle03File';
import { Particle04Slider } from './particles/Particle04Slider';
import { Particle05Export } from './particles/Particle05Export';

export function ParticleSelector({ featureId }: { featureId: string }) {
  let targetParticle = <></>;

  switch (featureId) {
    case '825cc467':
      break;
    case '63023138':
      targetParticle = <Particle02Sign />;
      break;
    case '6fe926d7':
      targetParticle = <Particle03File />;
      break;
    case '617df559':
      targetParticle = <Particle04Slider />;
      break;
    case 'c8ce03e8':
      targetParticle = <Particle05Export />;
  }

  return targetParticle;
}
