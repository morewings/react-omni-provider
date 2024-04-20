import type {FC, ComponentProps} from 'react';

import {OmniProvider, withOmniProvider} from '@/lib/OmniProvider';
import {MockProvider} from '@/lib/OmniProvider/MockProvider.tsx';
import './index.css';

const HookTest: FC = () => {
    return <div>Hook test</div>;
};

const WrappedHook = withOmniProvider([
    MockProvider,
    [MockProvider, {color: 'pink'} as ComponentProps<typeof MockProvider>],
])(HookTest);

const App: FC = () => {
    return (
        <div>
            <OmniProvider
                providerConfig={[
                    MockProvider,
                    [MockProvider, {color: 'yellow'} as ComponentProps<typeof MockProvider>],
                ]}>
                JSX test
            </OmniProvider>
            <WrappedHook />
        </div>
    );
};

export default App;
