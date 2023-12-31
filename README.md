# Mihail's Chat (React)
[![Tests](https://github.com/mihailgaberov/chat/actions/workflows/main.yml/badge.svg)](https://github.com/mihailgaberov/chat/actions/workflows/main.yml)

> __Project update (Dec. 30, 2023)__: As promised below, I found a way to deploy the project online again and make it playable. 
Check it out [here](https://chat-client-qkp8.onrender.com/#/settings) 📺. In this version, instead of socket.io for real-time messaging I used a service called Pusher. The whole app is deployed as client-server application on Render (actually there are two separate deployments, one for the client and one for the server). In order to avoid confusion for new learners who read the original [article](https://www.mihailgaberov.com/build-a-chat-app-with-react-typescript-and-socket.io) just now, I am going to keep the changes for this in separated branch called `chat-with-pusher`. If you want to take a look, you may do it [here](https://github.com/mihailgaberov/chat/tree/chat-with-pusher) or just checkout the branch. ❗️ In order to make it work with Pusher API, you will need to use environment variables. Take a look at the `.env.example` files, rename them to `.env` and add your own values respectively.

> __Project update (Jan. 14, 2023)__: After [Heroku stopped their free plans](https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse) the project demo site has not been accessible anymore. In order to make it accessible again, I've decided to deploy it to another platform, such as [Vercel](https://chat-ten-khaki.vercel.app/). As part of this _migration_ I updated the main libraries used in the project. This required several changes in the codebase so that it's aligned with the breaking changes came from the updates. Currently the demo site can be seen and interacted with but the main chat functionality is not working due to the serverless nature of the platform. I am looking for alternatives and will post updates here as soon as I found a working one.
__The project is perfectly runnable locally__.

>_I have written a tutorial about how I did this. You can find it [here](https://www.mihailgaberov.com/build-a-chat-app-with-react-typescript-and-socket.io) or [here](https://medium.freecodecamp.org/build-a-chat-app-with-react-typescript-and-socket-io-d7e1192d288),
or [here](https://dev.to/mihailgaberov/how-to-build-a-chat-app-with-react-typescript-and-socket-io-2e1c)_

A React single page chat application (SPA) built with the following technologies:
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
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/emoji_show.PNG)
![screenshot](https://github.com/mihailgaberov/chat-spa/blob/master/screenshots/link_parsing_show.PNG)

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
   - Add video chat feature.
   - :+1: Added AM/PM time formatting for when 12h mode is selected.
   - :+1: Added possibility to send message via ENTER by default. If the setting to send messages with CTRL+ENTER is ON, then this is going to be the only way (except via mouse/touch of course).
   - :+1: Optimized for iDevices (media queries).
   - :+1: Fix blinking/active class for the Chat tab issue - related to React Router not able to properly re-render connected components https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
   - :+1: Clear input field when new message is sent.
   - :+1: Auto scroll to bottom main chat area when new messages exceed available space.
   - :+1: Prevent 'doubling messages' (or multiple messages duplicates when more clients are connected).
   - :+1: Add unit tests for the react components.
   - Add unit tests for redux stuff - reducers, store, action creators.
   - :+1: Add media queries for responsiveness - test and adjust on more devices.
   - :+1: Add demo to heroku.
   - :+1: Add nice how-to in README.
   - Add animations for the messages (animejs).
   - Add sounds (with options to turn on/off in settings).
   - Add more color themes.
   - Add welcome message (broadcasts on user connected).
   - :+1: Add icons ( use font awesome).
   - History of all the conversations.
   - Handle case when socket's connection state change (visually).
   - Handle case when there has been a socket error.
   - Handle case when a very long word (without) spaces is entered and it goes beyond the message background color.
   - :+1: Emoticons support - such as :D, :P, :), ;), :wink:, :heart:, etc.
   - :+1: Link Parser - youtube link (embedded video should appear), link to an image (embedded image should appear), all other links should appear as anchor.
  
### Demo
:star: [https://chat-ten-khaki.vercel.app](https://chat-ten-khaki.vercel.app) :star:

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
 

__Heroku stopped offering free plans. Moved to [Vercel](https://chat-ten-khaki.vercel.app).__ 

<del> ### Deploy to Heroku</del>
<del>_This step assumes you have already a Heroku account, installed heroku-cli and did login._</del>

<del>1. `npm build` to build the project to `build` folder.</del>
<del>2. Add `build` folder to be committed to Git</del>
<del>3. Make sure that express server loads static resources from it.</del>
<del>4. Commit all: `git commit -m 'Deploy to Heroky'`.</del>
<del>5. Run `git push heroku master`.</del>
<del>6. Open the app from the given URL (in my case: [mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com)).</del>

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
- https://www.npmjs.com/package/linkifyjs
- https://docs.microlink.io/sdk/getting-started/react/
- https://www.npmjs.com/package/react-emojione
- https://www.npmjs.com/package/get-urls

### Stargazers
[![Stargazers repo roster for @mihailgaberov/chat](https://reporoster.com/stars/mihailgaberov/chat)](https://github.com/mihailgaberov/chat/stargazers)
### Forkers
[![Forkers repo roster for @mihailgaberov/chat](https://reporoster.com/forks/mihailgaberov/chat)](https://github.com/mihailgaberov/chat/network/members)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mihailgaberov/chat&type=Date)](https://star-history.com/#mihailgaberov/chat&Date)


MIT License

Copyright (c) 2018-2023 Mihail Gaberov

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
