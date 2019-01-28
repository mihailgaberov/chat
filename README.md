# Mihail's Chat
A single page application (SPA), implementing Socket.io based chat, built with the following technologies:
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
  5. LanguageSwitcher - dropdown menu allowing changing the language of the app (currently English and Deutsch are supported)
  6. Reset button - resets all settings stored to local storage
  
  ### Improvements (done and pending)
   - :+1: Optimized for iDevices (media queries).
   - :+1: Fix blinking/active class for the Chat tab issue - related to React Router not able to properly re-render connected components https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
   - :+1: Clear input field when new message is sent
   - :+1: Auto scroll to bottom main chat area when new messages exceed available space.
   - :+1: Prevent 'doubling messages' (or multiple messages duplicates when more clients are connected)
   - :+1: Add unit tests for the react components
   - Add unit tests for redux stuff - reducers, store, action creators
   - :+1: Add media queries for responsiveness - test and adjust on more devices
   - :+1: Add demo to heroku
   - :+1: Add nice how-to in README
   - Add animations for the messages (animejs)
   - Add sounds (with options to turn on/off in settings)
   - Add more color themes
   - Add welcome message (broadcasts on user connected)
   - :+1: Add icons ( use font awesome)
   - History of all the conversations
   - Handle case when socket's connection state change (visually)
   - Handle case when there has been a socket error
   - Handle case when a very long word (without) spaces is entered and it goes beyond the message background color.
   - Emoticons support
   - Link Parser - youtube link (embedded video should appear), link to an image (embedded image should appear), all other links should appear as anchor
  
### Demo
:star: [mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com) :star:

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
Browse to [http://localhost:3000](http://localhost:3000) and see the running app. In order to test, open it in two different computers,
 or computer and a phone, or two browsers on the same computer (one of it in incognito mode). 
 _If you are running it locally, make sure to change the __host__ variable in Socket.ts (line:28) and its value to match
 your local network address - the one of the computer you are running the server app._ 
 

### Deploy to Heroku 
_This step assumes you have already a Heroku account, installed heroku-cli and did login._

1. `npm build` to build the project to `build` folder.
2. Add `build` folder to be committed to Git
3. Make sure that express server loads static resources from it.
4. Commit all: `git commit -m 'Deploy to Heroky'`.
5. Run `git push heroku master`.
6. Open the app from the given URL (in my case: [mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com)).

### Resources
- https://socket.io/get-started/chat
- https://www.typescriptlang.org/docs/handbook/decorators.html
- http://www.typescriptlang.org/
- http://www.typescriptlang.org/docs/handbook/compiler-options.html
- http://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- https://github.com/Microsoft/TypeScript-React-Starter
- https://animejs.com/
- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
- https://www.styled-components.com/
- https://airbnb.io/enzyme/docs/guides/jest.html
- https://redux.js.org/api/store

MIT License

Copyright (c) 2019 Mihail Gaberov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.