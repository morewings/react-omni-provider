import {render} from '@testing-library/react';
import type {ComponentProps} from 'react';

import {OmniProvider} from './OmniProvider.tsx';
import {MockProvider} from './MockProvider.tsx';

describe('lib > OmniProvider', () => {
    it('renders children', () => {
        const children = 'foo';
        const {getByText} = render(<OmniProvider>{children}</OmniProvider>);
        expect(getByText(children)).toBeInTheDocument();
    });

    it('renders given provider', () => {
        const id = 'foo';
        const {getByTestId} = render(
            <OmniProvider providerConfig={[[MockProvider, {testId: id} as ComponentProps<typeof MockProvider>]]}>
                foo
            </OmniProvider>
        );
        expect(getByTestId(id)).toBeInTheDocument();
    });

    it('respects left to right order of providers given', () => {
        const {asFragment} = render(
            <OmniProvider
                providerConfig={[
                    [MockProvider, {testId: 'foo'} as ComponentProps<typeof MockProvider>],
                    [MockProvider, {testId: 'bar'} as ComponentProps<typeof MockProvider>],
                    [MockProvider, {testId: 'bazz'} as ComponentProps<typeof MockProvider>],
                ]}>
                foo
            </OmniProvider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
