import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as showdown from 'showdown';

interface BlogState {
    Posts: string[];
}

export class Blog extends React.Component<RouteComponentProps<{}>, BlogState> {
    constructor() {
        super();
        this.state = { Posts: [] }
        this.changeOrder = this.changeOrder.bind(this);
    }

    componentDidMount() {
        fetch('api/Blog/GetAllPosts')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    fetch(data[i])
                    .then(respone => respone.text())
                    .then(data => {
                        var temp = this.state.Posts;
                        temp.push(data);
                        temp.reverse();
                        this.setState({ Posts: temp });
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
        state.Posts.reverse();
        this.setState({ Posts: state.Posts });

        this.render()
    }

    render() {
        const state = this.state;
        return(
            <div className='content'>
                <div className='row'>
                    <div className='col-sm-10'>
                        <h1>Blog</h1>
                    </div>
                    <div className='col-sm-2 sorting'>
                        <label>Sort by</label>
                        <select id='blog-sort' className='sorting-select' onChange={this.changeOrder}>
                            <option value='Newest first'>Newest first</option>
                            <option value='Oldest first'>Oldest first</option>
                        </select>
                    </div>
                </div>
                    {state.Posts.map((file, index) => (
                        <div key={index} className='row blog-block'>
                            <div className='col-sm-12' dangerouslySetInnerHTML={this.md(file)}></div>
                        </div>
                    ))}
            </div>
        )
    }
}