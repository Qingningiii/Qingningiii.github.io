import { FC, RefObject } from 'react';

interface CrosshairProps {
  color?: string;
  containerRef?: RefObject<HTMLElement>;
}

declare const Crosshair: FC<CrosshairProps>;
export default Crosshair;
