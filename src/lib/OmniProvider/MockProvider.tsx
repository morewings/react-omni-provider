import type {FC, ReactNode, ComponentProps} from 'react';

import type {ProviderConfig} from './ProviderConfig.ts';

export const MockProvider: FC<{children: ReactNode; testId?: string; color?: string}> = ({children, testId, color}) => {
    return (
        <div data-testid={testId} style={{padding: '36px', backgroundColor: color}}>
            {children}
        </div>
    );
};

export const providers = [
    [MockProvider, {testId: 'foo'} as ComponentProps<typeof MockProvider>],
    [MockProvider, {testId: 'bar'} as ComponentProps<typeof MockProvider>],
    [MockProvider, {testId: 'bazz'} as ComponentProps<typeof MockProvider>],
] as ProviderConfig[];
