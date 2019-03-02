import React, {Component} from 'react';

import './SearchResults.css';

class SearchResults extends Component {
    displayResults = () => {
        let ldata = this.props.data.map((item,index) => {
            return (
                <div key={item.id} className='subDivs'>
                    <div>
                        <img className='roundImage' src={item.owner.avatar_url} alt='avatar' />
                    </div>
                    <div>
                        <h3><strong>{item.name}</strong></h3>
                    </div>
                    <div className='forks'>
                        <span className='spancss'><i className="fas fa-star"></i>{item.watchers}</span>
                        <span className='spancss'><i className="fas fa-code-branch"></i>Forks {item.forks}</span>
                        <span className='spancss'><i className="fas fa-info-circle"></i>Open Issues {item.open_issues}</span>
                    </div>
                    <div className='desc'>
                        {item.description}
                    </div>
                    <div className='blueBtn'>
                        <a className='linkLook' href={item.html_url}>View Profile</a>
                    </div>
                </div>
            )
        })
        return ldata;
    }
    render() {
        
        return (
            <div className='commonDiv'>
                <div className='titleDiv'>
                    {this.props.title}
                </div>
                <div className='content'>
                    {this.displayResults()}
                </div>
            </div>
        )        
    }
}

export default SearchResults;