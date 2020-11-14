import { Button, Layer, ButtonInterface, TextOptions } from 'elgato-stream-deck-utils';

// @ts-ignore
import moment from 'moment';

export class ClockPatternButton extends Button implements ButtonInterface {
  private interval: NodeJS.Timeout | undefined;

  constructor(
    layerSize: number,
    private format: string,
    private textOptions?: Partial<TextOptions>,
  ) {
    super(layerSize);
  }

  get backgroundLayer(): Layer {
    return this.layer(0);
  }

  async activate() {
    super.activate();
    let formattedDateBefore = '';
    this.interval = setInterval(() => {
      const formattedDate = moment(new Date()).format(this.format);
      if (formattedDateBefore !== formattedDate) {
        this.backgroundLayer.image.setText(formattedDate, {
          color: 'white',
          posX: '50%',
          posY: '75%',
          size: 75,
          ...this.textOptions,
        });
        formattedDateBefore = formattedDate;
      }
    }, 1000);
  }

  deactivate() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
    super.deactivate();
  }

  stopInterval() {
    if (!this.interval) return;
    clearTimeout(this.interval);
    delete this.interval;
  }
}
