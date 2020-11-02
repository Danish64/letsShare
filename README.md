# Lets-Share, A Sharing Economy Platform :octocat:

### Started as an Final Year Project (CUI)

### By

- Danish Ali FA17-BCS-022
- Asad Baig FA17-BCS-039
- Irsa Qamar FA17-BCS-033

****------------------------------------------------****

**Project Architecture**

- _components_
  > In this folder all the presentational components like text, cards, buttons etcetra,
  > are placed which will be used repeatedly over all the app. Contains imports from React Native library, Third Party UI Libraries, and Res Module.
- _screens_
  > In this folder all the presentational screens/layouts are placed which are built using components,
  > These screens controls how the app looks. Only Contains imports from components and services.
- _services_
  > In this folder all the calls to the api's or external communication are placed,
  > these files will be called by screens to fetch data, Only contains imports from http clients like axios, constants, configs.
- _ducks_ **/Redux Folder** **--To be researched and analyzed...--**
  > In this folder all the logic of how data flows all over the app, containing all the actions, reducers, actionCreators in one ducks file in features folders like Auth Folder
  > will contain a login folder in which index file will contain ducks style login actions reducers actioncreators .
- _store_
  > In this folder an index file will be used to connect redux saga middleware to reducers.
- _utils_
  > In this folder all the logics or helper function used by the app components will be used like making api's data compatible etcetra.
- _res_
  > In this module all the assets like images, fonts, constants like colors and information messages like success message or error messages, styles for the app will be contained.
