import React from 'react';
import SearchBox from './search-box';
import ResultsTable from './results-table';
import resultData from   '../static/results';

class ResultListing extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: resultData.results,
      filtered_results: resultData.results,
      filters: []
    }
    this.search = this.search.bind(this)
  }

  search(text) {
    var results = [];

    if (text.length > 0) {
      results = this.state.results.filter((result) => {
        return result.firstName === text || result.lastName ===text
      });
    } else {
      results = this.state.results;
    }

    this.setState({
      filtered_results: results
    });
  }

  render() {
    return (
      <div>
        <SearchBox onSearch={this.search}/>
        <ResultsTable results={this.state.filtered_results}/>
      </div>
    )
  }
}

export default ResultListing;
