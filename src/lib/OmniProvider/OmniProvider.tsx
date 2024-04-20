import type {FC, ReactNode} from 'react';

import type {ProviderConfig} from './ProviderConfig.ts';

type OmniProviderProps = {
    children: ReactNode;
    providerConfig?: ProviderConfig[];
};

export const OmniProvider: FC<OmniProviderProps> = ({children, providerConfig = []}) => {
    return providerConfig.reverse().reduce((prev, current) => {
        if (Array.isArray(current)) {
            const [Provider, props] = current;
            return <Provider {...props}>{prev}</Provider>;
        } else {
            const Provider = current;
            return <Provider>{prev}</Provider>;
        }
    }, children);
};
