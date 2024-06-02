import type {FC, ReactNode} from 'react';

export const MockProvider: FC<{children: ReactNode; testId?: string; color?: string}> = ({children, testId, color}) => {
    return (
        <div data-testid={testId} style={{padding: '36px', backgroundColor: color}}>
            {children}
        </div>
    );
};
