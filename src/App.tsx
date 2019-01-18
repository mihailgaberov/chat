import * as React from 'react';
import * as translationsEN from './translations/translations-en.json';
import {AppContextProvider} from './AppContext';
import Navigation from "./components/Navigation";

class App extends React.Component {
    public render() {
        return <AppContextProvider value={translationsEN}>
            <Navigation/>
        </AppContextProvider>
    }
}

export default App;
