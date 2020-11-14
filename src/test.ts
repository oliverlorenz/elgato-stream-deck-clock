import 'source-map-support/register';
import { Device, ProfileManager } from 'elgato-stream-deck-utils';
import { HourButton } from './HourButton';
import { MinuteButton } from './MinuteButton';
import { SecondsButton } from './SecondsButton';
import { ClockPatternButton } from './ClockPatternButton';
const device = new Device();

(async () => {
  device.waitForConnect(async streamDeck => {
    streamDeck.clearAllKeys();
    const profileManager = new ProfileManager(streamDeck);
    const profile0 = profileManager.getProfile(0);
    profile0.addButton(
      0,
      new ClockPatternButton(streamDeck.ICON_SIZE, 'hh:mm', {
        size: 30,
      }),
    );
    profile0.addButton(1, new HourButton(streamDeck.ICON_SIZE));
    profile0.addButton(2, new MinuteButton(streamDeck.ICON_SIZE));
    profile0.addButton(3, new SecondsButton(streamDeck.ICON_SIZE));

    await profile0.activate();
    await profileManager.start();
  });
})();
