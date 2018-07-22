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
                        this.setState({ Posts: temp });
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
                <h1>Blog</h1>
                    {state.Posts.map((file, index) => (
                        <div key={index} className='row blog-block'>
                            <div className='col-sm-12' dangerouslySetInnerHTML={this.md(file)}></div>
                        </div>
                    ))}
            </div>
        )
    }
}