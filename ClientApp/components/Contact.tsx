import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Contact extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return(
            <div className='content'>
                <h1>Contact</h1>
                <p>
                    For inquiries regarding anything I do; projects, work etc. I can be reached via the following:
                </p>
                <address>
                    <span className='contact-logo'>@ </span>Email: <a href='mailto:lassep95@gmail.com' target='_blank'>Lassep95@gmail.com</a> <br />
                    <img src='/images/LinkedIn-In-34px.png' />LinkedIn: <a href='https://www.linkedin.com/in/lasse-t-pedersen/' target='_blank'>https://www.linkedin.com/in/lasse-t-pedersen/</a>
                </address>
                <p>
                    For interest in my personal projects feel free to have a look at my GitHub:
                </p>
                <address>
                    <img src='/images/GitHub-Mark-Light-32px.png' /> Github: <a href='https://github.com/LasToPe' target='_blank'>https://github.com/LasToPe</a>
                </address>
            </div>
        )
    }
}