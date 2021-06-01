import MixpanelManager from './MixPanelManager';

export default class UserActivityClass {
  constructor() {
    this.mixpanel = MixpanelManager.sharedInstance.mixpanel;
    console.log('In UserActivity', this.mixpanel);
  }

  createAlias = (uniqueId, userInfo) => {
    console.log('In Create Alias');
    this.mixpanel.alias(userInfo.email, uniqueId);
    this.mixpanel
      .getPeople()
      .set({
        $name: userInfo.name,
        $email: userInfo.email,
        $city: userInfo.city,
        $created: new Date().toISOString(),
      })
      .then((t) => console.log('User Created'));
  };

  setOnLogin = (uniqueId, userInfo) => {
    console.log('In SetOnLogin');

    this.mixpanel.identify(uniqueId);
    this.mixpanel
      .getPeople()
      .set(userInfo)
      .then((t) => console.log('User Created'));
  };

  trackUserActivity = (uniqueId, eventName, eventInfo) => {
    console.log('In trackUserActivity');

    mixpanel.identify(uniqueId);
    mixpanel.track(eventName, eventInfo);
  };

  timeEvent = (uniqueId, eventName) => {
    console.log('In trackUserActivity');

    this.mixpanel.identify(uniqueId);
    this.mixpanel.timeEvent(eventName);
  };

  trackTimeEvent = (uniqueId, eventName) => {
    console.log('In trackTimeEvent');

    this.mixpanel.identify(uniqueId);
    this.mixpanel.track(eventName);
  };

  trackEvent = (eventName, eventInfo) => {
    console.log('In track');
    this.mixpanel.track(eventName, eventInfo);
  };

  flush = () => {
    console.log('In trackUserActivity');

    this.mixpanel.flush();
  };
}
