import * as React from 'react';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class EmptyLayout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}
