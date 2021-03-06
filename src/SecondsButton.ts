import { TextOptions } from 'elgato-stream-deck-utils';

// @ts-ignore
import moment from 'moment';
import { ClockPatternButton } from './ClockPatternButton';

export class SecondsButton extends ClockPatternButton {
  constructor(layerSize: number, textOptions?: TextOptions) {
    super(layerSize, 'ss', textOptions);
  }
}
