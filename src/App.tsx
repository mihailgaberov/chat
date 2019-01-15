import * as React from 'react';
import Navigation from "./components/Navigation";
import TranslationProvider from './translations/TranslationProvider';

class App extends React.Component {
    public render() {
        return <TranslationProvider>
            <Navigation/>
        </TranslationProvider>
    }
}

export default App;
