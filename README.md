[![Release](https://github.com/morewings/react-omni-provider/actions/workflows/merge-jobs.yml/badge.svg)](https://github.com/morewings/react-omni-provider/actions/workflows/merge-jobs.yml)
[![types included](https://img.shields.io/github/package-json/types/morewings/react-omni-provider)](https://github.com/morewings/react-omni-provider)
[![npm version](https://badge.fury.io/js/react-omni-provider.svg)](https://www.npmjs.com/package/react-omni-provider)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-omni-provider)](https://bundlephobia.com/result?p=react-omni-provider)
[![Maintainability](https://api.codeclimate.com/v1/badges/e96c5a81106945e6bfed/maintainability)](https://codeclimate.com/github/morewings/react-omni-provider/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e96c5a81106945e6bfed/test_coverage)](https://codeclimate.com/github/morewings/react-omni-provider/test_coverage)

# React Omni Provider

<img src="./design/picture.jpg" alt="React Omni Provider">

**React Omni Provider** is an utility component which allows to merge multiple Providers (wrapper components that create context or another global state).

## Install

```shell
npm i react-omni-provider
```

## Use
Provider component is a very popular React development pattern. Provider allows to create global state for your application. The problem is that today, plenty of libraries are using such approach. So after some time, your root file will probably look like the one below. Which sadly reminds infamous callback hell.

### Before

```tsx
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { AuthProvider } from 'authorization-package';
import { ConsentProvider } from 'consent-package';
import { NotificationProvider } from '@/lib/Notification';
import { ModalProvider } from '@/lib/Modal';
import { FeatureProvider } from '@/lib/Feature';
// etc

export const App: FC<Props> = ({children}) => {
    return (
        <AuthProvider  secret={secret}>
            <ConsentProvider>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <NotificationProvider>
                            <FeatureProvider>
                                <ModalProvider>
                                    {children}
                                </ModalProvider>
                            </FeatureProvider>
                        </NotificationProvider>
                    </ThemeProvider>
                </Provider>
            </ConsentProvider>
        </AuthProvider>
    );
};
```

### After

React Omni Provider allows you to use just one Provider component instead. You can provide a list of used providers as an array. Providers are applied from left to right. So the first item in the list becomes the first wrapper.

```tsx
import { OmniProvider } from 'react-omni-provider';
import { ProviderA } from 'ProviderA';
import { ProviderB } from 'ProviderB';
import { ProviderC } from 'ProviderC';

const providerConfig = [
        // you can add just provider component
        ProviderA,
        // or attach props to it
        [ProviderB, {prop: 'value'}],
        ProviderC
]

export const App: FC<Props> = ({children}) => {
    // same as <ProviderA><ProviderB prop="value"><ProviderC>{children}</ProviderC></ProviderB></ProviderA>
    return (
            <OmniProvider providerConfig={providerConfig}>
                {children}
            </OmniProvider>
    );
};
```

## Higher-order Component

There is also a higher-order component available with the same functionality.

```tsx
import type {ComponentProps} from 'react';
import { withOmniProvider } from 'react-omni-provider';
import { ProviderA } from 'ProviderA';
import { ProviderB } from 'ProviderB';
import { ProviderC } from 'ProviderC';

const providerConfig = [
        // you can add just provider component
        ProviderA,
        // or attach props to it
        [ProviderB, {prop: 'value'} as ComponentProps<typeof ProviderB>],
        ProviderC
]

const App: FC<Props> = ({children}) => {
    return (
            {children}
    );
};

export const WrappedApp = withOmniProvider(providerConfig)(App)
```
