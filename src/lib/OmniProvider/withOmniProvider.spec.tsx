import type {ComponentProps, FC} from 'react';
import {render} from '@testing-library/react';

import {MockProvider} from './MockProvider.tsx';
import {mockProviders} from './MockProviders.tsx';
import {withOmniProvider} from './withOmniProvider.tsx';

const MockComponent: FC = () => {
    return <div data-testid="component" />;
};

describe('lib > withOmniProvider', () => {
    it('renders given component', () => {
        const Component = withOmniProvider([MockProvider])(MockComponent);
        const {getByTestId} = render(<Component />);
        expect(getByTestId('component')).toBeInTheDocument();
    });

    it('renders given provider', () => {
        const id = 'foo';
        const Component = withOmniProvider([[MockProvider, {testId: id} as ComponentProps<typeof MockProvider>]])(
            MockComponent
        );
        const {getByTestId} = render(<Component />);
        expect(getByTestId(id)).toBeInTheDocument();
    });

    it('respects left to right order of providers given', () => {
        const Component = withOmniProvider(mockProviders)(MockComponent);
        const {asFragment} = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
    });
});
