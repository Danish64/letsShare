import {Mixpanel} from 'mixpanel-react-native';

export default class MixpanelManager {
  static sharedInstance =
    MixpanelManager.sharedInstance || new MixpanelManager();

  constructor() {
    this.configMixpanel();
  }

  configMixpanel = async () => {
    this.mixpanel = await Mixpanel.init('2dcdd60e40867944694d7b7b787ca4d7');
    console.log('Mixpanel initiated', this.mixpanel);
  };
}
