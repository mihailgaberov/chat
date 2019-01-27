# Mihail's Chat
A single page application (SPA), implementing Socket.io based chat app, built with the following technologies:
- React with TypeScript (`create-react-app my-app --scripts-version=react-scripts-ts`)
- Redux
- Express.js with Socket.io
- styled-components (SASS)
- Jest/Enzyme/Sinon

### Screenshots
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/dark_iphone_678.PNG)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/dark_iphone_678_with_notifications.PNG)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/dark_iphonex.jpg)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/dark_iphonex_with_notifications.jpg)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/light_iphone_678.PNG)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/light_iphone_678_notifications.PNG)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/light_iphone_x.jpg)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/light_iphonex_with_notifications.jpg)

### Demo
[mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com)

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [npm](https://www.npmjs.com/).
3. From the project folder, execute the following command:

To install dependencies:
```shell
  npm i
```
To run the client app:

```shell
  npm start
```
To run the server app:

```shell
  npm run server:watch
```
To run the tests:

```shell
  npm t
```
Browse to [http://localhost:3000](http://localhost:3000)

### Deploy to Heroku

1. `npm build` to build the project to `build` folder.
2. Include `build` folder to Git
3. Make sure that express server loads static resources from it.
4. Commit all: `git commit -m 'Deploy to Heroky'`.
5. Run `git push heroku master`.
6. Open the app from the given URL (in this case: [mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com)).
