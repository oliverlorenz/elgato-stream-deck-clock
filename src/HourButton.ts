// @ts-ignore
import moment from 'moment';
import { ClockPatternButton } from './ClockPatternButton';
import { TextOptions } from 'elgato-stream-deck-utils';

export class HourButton extends ClockPatternButton {
  constructor(layerSize: number, textOptions?: TextOptions) {
    super(layerSize, 'HH', textOptions);
  }
}
