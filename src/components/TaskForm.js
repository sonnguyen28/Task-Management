import React, { Component } from "react";

class TaskForm extends Component {

  constructor(props) {
      super(props);
      this.state = {
        name : '',
        status: false,
      }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if(name === "status"){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name : '',
      status: false,
    })
  }
  render() {
    return (
  
      <div className="card border-warning">
        <div className="card-header bg-warning">
          <h5 className="card-title d-flex justify-content-between">
            <p>Thêm Công Việc </p>
            <i className="btn fa fa-times-circle" onClick={this.onCloseForm}></i>
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" 
              name="name" 
              value={this.state.name}
              onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required" 
            name="status"
            value={this.state.status}
            onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning mr-3 pr-3">
                <span className="fas fa-plus mr-3"></span>Thêm
              </button>
              &nbsp;
              <button type="submit" className="btn btn-danger pr-3">
                <span className="fas fa-times-circle mr-3"></span>Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
}

export default TaskForm;
