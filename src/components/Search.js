import React, { Component } from "react";

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword : ''
    }
  }

  onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input  type="text" 
                  name="keyword"
                  className="form-control" 
                  placeholder="Search..." 
                  value={this.state.keyword}
                  onChange={this.onChange}
                  />
          <span className="input-group-btn">
            <button className="btn btn-info" 
              type="button"
              onClick={this.onSearch}
              >
              <span className="fas fa-search-plus mr-2"></span>Search
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
