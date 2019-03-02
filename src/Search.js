import React, {Component} from 'react';
import './App.css';

class Search extends Component {
    state = {
        term: ''
    }

    onChangeHandler = event => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div className='commonDiv'>
                <div className='titleDiv'>
                    {this.props.title}
                </div>
                <div className='content contentLeft'>
                    <input
                        className='inputBox'
                        value={this.state.term}
                        placeholder='Enter search term'
                        onChange={this.onChangeHandler}></input>
                    <button className='btnPointer' onClick={() => this.props.onClickHandler(this.state.term)}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;