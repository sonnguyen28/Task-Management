import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: 0,
    };
  }

  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (!nextProps.task) {
      this.setState({
        id: "",
        name: "",
        status: 0,
      });
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      if(target.value === "0") value = 0;
      else if(target.value === "1") value = 1;
      else value = 2;

    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: 0,
    });
  };
  render() {
    var { id } = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">
            {id !== "" ? "Edit task" : "Add task"}
            <button type="button" className="close" aria-hidden="true" onClick={this.onCloseForm}>&times;</button>
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="font-weight-bold">Name :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label className="font-weight-bold">Status :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value="0">New</option>
              <option value="1">In progress</option>
              <option value="2">Done</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning mr-3 pr-3">
              <span className="fas fa-save mr-3"></span>Save
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger pr-3" onClick={this.onCloseForm}>
                <span className="fas fa-times-circle mr-3"></span>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
