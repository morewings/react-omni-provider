import type {ComponentType, FC, JSX} from 'react';

import {OmniProvider} from './OmniProvider.tsx';
import type {ProviderConfig} from './ProviderConfig.ts';

export const withOmniProvider =
    (providers: ProviderConfig[]) =>
    <TProps extends JSX.IntrinsicAttributes>(Component: ComponentType<TProps>) => {
        const result: FC<TProps> = props => (
            <OmniProvider providerConfig={providers}>
                <Component {...props} />
            </OmniProvider>
        );
        result.displayName = 'OmniProvider';
        return result;
    };
