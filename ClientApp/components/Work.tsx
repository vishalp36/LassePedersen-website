import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as showdown from 'showdown';

interface WorkState {
    Documents: string[];
}

export class Work extends React.Component<RouteComponentProps<{}>, WorkState> {

    constructor() {
        super();
        this.state = { Documents: [] }
    }

    componentDidMount() {
        fetch('api/Work/GetAllWork')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    fetch(data[i])
                    .then(respone => respone.text())
                    .then(data => {
                        var temp = this.state.Documents;
                        temp.push(data);
                        this.setState({ Documents: temp });
                    })
                }
            });
    }

    md(markdown: string) {
        const converter = new showdown.Converter();        
        return { __html: converter.makeHtml(markdown) }
    }

    render() {
        const state = this.state;
        return(
            <div className='content'>
                <h1>Work</h1>
                    {state.Documents.map((file, index) => (
                        <div key={index} className='row work-block'>
                            <div className='col-sm-12' dangerouslySetInnerHTML={this.md(file)}></div>
                        </div>
                    ))}
            </div>
        )
    }
}