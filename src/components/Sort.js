import React from "react";

function Sort() {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sắp Xếp <span className="fa fa-caret-square-o-down ml-3"></span>
        </button>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="#/">
            <span className="fas fa-sort-alpha-down-alt pr-3"></span>Tên A-Z
            </a>
            <a className="dropdown-item"  href="#/">
            <span className="fas fa-sort-alpha-up-alt pr-3"></span>Tên Z-A
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#/">
                Trạng Thái Kích Hoạt
            </a>
            <a className="dropdown-item" href="#/">
                Trạng Thái Ẩn
            </a>
          </div>
        </div>
    </div>
  );
}

export default Sort;
