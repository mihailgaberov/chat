import * as React from 'react';

export interface IAppContext {
    lang: string;
    nav: {
        chatTabLabel: string,
        settingsTabLabel: string
    };
    userName: string;
    interfaceColor: string;
    colors: {
        color1: string;
        color2: string;
    };
}

const context = React.createContext<IAppContext | null>(null);

export const AppContextProvider = context.Provider;

export const AppContextConsumer = context.Consumer;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withAppContext<P extends { appContext?: IAppContext }, R = Omit<P, 'appContext'>>(
    WrappedComponent: React.ComponentClass<P> | React.FunctionComponent<P>
): React.FunctionComponent<R> {
    return function BoundComponentHOC(props: R) {
        return (
            <AppContextConsumer>
                {value => <WrappedComponent {...props as any} appContext={value} />}
            </AppContextConsumer>
        );
    };
}
