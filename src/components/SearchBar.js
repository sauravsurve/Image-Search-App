import React from 'react';


class SearchBar extends React.Component
{
    state={term:""};

    //arrow function is used to prevent context based errors
    onFormSubmit= (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.term);//function from App.js
    }

    render()
    {
        return (
        <div className="ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                    value = {this.state.term}
                    onChange={(e) => this.setState({term:e.target.value.toUpperCase() }) } />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;