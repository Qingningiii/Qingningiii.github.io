import { FC, PropsWithChildren } from 'react';

interface SpotlightCardProps extends PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

declare const SpotlightCard: FC<SpotlightCardProps>;
export default SpotlightCard;
