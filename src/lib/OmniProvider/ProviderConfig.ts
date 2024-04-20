import type {ComponentType, ComponentProps} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ProviderConfig<TComponent extends ComponentType<any> = ComponentType<any>> =
    | TComponent
    | [TComponent, ComponentProps<TComponent>];
