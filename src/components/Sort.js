import React, { Component } from "react";

class Sort extends Component {

  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle pd-3"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort By <span className="fa fa-caret-square-o-down"></span>
          </button>
          <div className="dropdown-menu">
            <a
              className={
                (this.props.sortBy === "name" && this.props.sortValue === 1)
                  ? "dropdown-item sort-selected"
                  : "dropdown-item"
              }
              href="#/"
              onClick={() => this.onClick("name", 1)}
            >
              <span className="fas fa-sort-alpha-up-alt pr-3"></span>Name A-Z
            </a>
            <a
              className={
                (this.props.sortBy === "name" && this.props.sortValue === -1)
                  ? "dropdown-item sort-selected"
                  : "dropdown-item"
              }
              href="#/"
              onClick={() => this.onClick("name", -1)}
            >
              <span className="fas fa-sort-alpha-down-alt pr-3"></span>Name Z-A
            </a>
            <div className="dropdown-divider"></div>
            <a
              className={
                (this.props.sortBy === "status" && this.props.sortValue === -1)
                  ? "dropdown-item sort-selected"
                  : "dropdown-item"
              }
              href="#/"
              onClick={() => this.onClick("status", -1)}
            >
              Status New
            </a>
            <a
              className={
                (this.props.sortBy === "status" && this.props.sortValue === 1)
                  ? "dropdown-item sort-selected"
                  : "dropdown-item"
              }
              href="#/"
              onClick={() => this.onClick("status", 1)}
            >
              Status Done
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
