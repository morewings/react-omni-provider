import type {ComponentProps} from 'react';

import type {ProviderConfig} from './ProviderConfig.ts';
import {MockProvider} from './MockProvider.tsx';

export const mockProviders = [
    [MockProvider, {testId: 'foo'} as ComponentProps<typeof MockProvider>],
    [MockProvider, {testId: 'bar'} as ComponentProps<typeof MockProvider>],
    [MockProvider, {testId: 'bazz'} as ComponentProps<typeof MockProvider>],
] as ProviderConfig[];
