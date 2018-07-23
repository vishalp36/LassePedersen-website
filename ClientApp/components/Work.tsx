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
        this.changeOrder = this.changeOrder.bind(this);
    }

    componentDidMount() {
        fetch('api/Work/GetAllWork')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let index = parseInt(String(data[i]).substring(5,7));
                    fetch(data[i])
                    .then(respone => respone.text())
                    .then(data => {
                        let temp = this.state.Documents;
                        temp[index] = data;
                        this.setState({ Documents: temp });
                    })
                }
            });
        
    }

    md(markdown: string) {
        const converter = new showdown.Converter();        
        return { __html: converter.makeHtml(markdown) }
    }

    changeOrder() {
        let state = this.state;
        state.Documents.reverse();
        this.setState({ Documents: state.Documents });

        this.render()
    }

    render() {
        const state = this.state;
        return(
            <div className='content'>
                <div className='row'>
                    <div className='col-sm-10'>
                        <h1>Work</h1>
                    </div>
                    <div className='col-sm-2 sorting'>
                        <label>Sort by</label>
                        <select id='work-sort' className='sorting-select' defaultValue='Oldest first' onChange={this.changeOrder}>
                            <option value='Newest first'>Newest first</option>
                            <option value='Oldest first'>Oldest first</option>
                        </select>
                    </div>
                </div>
                    {state.Documents.map((file, index) => (
                        <div key={index} className='row work-block'>
                            <div className='col-sm-12' dangerouslySetInnerHTML={this.md(file)}></div>
                        </div>
                    ))}
            </div>
        )
    }
}