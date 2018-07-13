import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        const md = this.state;
        return (
            <div className='content' id='welcome'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <img src='/images/Lasse.jpg' alt='profile image' />
                    </div>
                    <div className='col-sm-9'>
                        <h1>Welcome!</h1>
                        <p>
                            My name is Lasse Pedersen, and this is my website. <br />
                            I am a newly graduated full-stack software engineer. <br />
                            On this site you will find some of the work I have done as well as my personal blog.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
