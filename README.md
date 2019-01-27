# Mihail's Chat
A single page application (SPA), implementing Socket.io based chat app, built with the following technologies:
- React with TypeScript (`create-react-app my-app --scripts-version=react-scripts-ts`)
- Redux
- Express.js with Socket.io
- styled-components (SASS)
- Jest/Enzyme/Sinon

## Application features:
- Header
  1. Chat tab - blinking when new message is received until is read, i.e. when the user is on Settings page
  2. Settings tab
  3. Unread messages counter
  4. Font Awesome icons
- Chat page
  1. Chat area (includes left aligned and right aligned messages)
  3. Message (text, datetime, left or right depending on if it's received or sent)
  4. Showing nickname only for received message
  4. Message sender - input and button. Input is cleared and focused when button is clicked
  5. Send messages with Ctrl+Enter
  6. Auto scroll to bottom when the chat area is not enough to show all messages
- Settings page
  1. UserProfile component - possibility to change user name
  2. Interface color component - change the color theme of the app
  3. ClockDisplay component - change the time mode 12h or 24h, shown with each message
  4. Send messages with Ctrl+Enter - On/Off
  5. LanguageSwitcher - dropdown menu allowing changing of the app language (currently English and Deutsch are supported)
  6. Reset button - resets are settings stored to local storage
  


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
3. From the project folder, execute the following commands:

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
Browse to [http://localhost:3000](http://localhost:3000) and see the running app. In order to test, open it on two different computers,
 or computer and a phone, or two browsers on the same computer (one of it in incognito mode). 
 _If you are running it locally, make sure to change the __host__ variable in Socket.ts (line:28) and its value to match
 your local network address. The one of the computer you are running the server app._ 
 

### Deploy to Heroku

1. `npm build` to build the project to `build` folder.
2. Include `build` folder to Git
3. Make sure that express server loads static resources from it.
4. Commit all: `git commit -m 'Deploy to Heroky'`.
5. Run `git push heroku master`.
6. Open the app from the given URL (in this case: [mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com)).
