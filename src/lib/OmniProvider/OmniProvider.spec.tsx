import {render} from '@testing-library/react';
import type {ComponentProps} from 'react';

import {OmniProvider} from './OmniProvider.tsx';
import {MockProvider, providers} from './MockProvider.tsx';

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
        const {asFragment} = render(<OmniProvider providerConfig={providers}>foo</OmniProvider>);
        expect(asFragment()).toMatchSnapshot();
    });
});
