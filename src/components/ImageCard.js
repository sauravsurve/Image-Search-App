import React from 'react';

export default class ImageCard extends React.Component
{
    constructor(props)
    {
        
        super(props);
        this.state={spans:0};
        this.imageRef=React.createRef();
    }

    componentDidMount()
    {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () =>
    {
        const height =this.imageRef.current.clientHeight;
        const spans= Math.ceil(height/10);
        this.setState({spans});
    }

    render()
    {
        const {description,urls}=this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                alt={this.props.image.description}
                src={this.props.image.urls.regular}
                />

            </div>
        )
    }
}