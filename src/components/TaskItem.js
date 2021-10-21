import React, { Component } from "react";
class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };

  render() {
    var { task, index } = this.props;
    return (
      <>
        <tr className="text-center">
          <td>{index + 1}</td>
          <td>{task.name}</td>
          <td className="text-center">
            <span
              className={
                task.status === 0
                  ? "badge badge-pill badge-info btn p-2 w-50"
                  : task.status === 1
                  ? "badge badge-pill badge-warning btn p-2 w-50"
                  : "badge badge-pill badge-success btn p-2 w-50"
              }
              onClick={this.onUpdateStatus}
            >
              {task.status === 0
                ? "New"
                : task.status === 1
                ? "In progress"
                : "Done"}
            </span>
          </td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.onUpdate}
            >
              <span className="fas fa-pencil-alt p-1"></span></button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onDelete}
            >
              <span className="fa fa-trash p-1"></span></button>
          </td>
        </tr>
      </>
    );
  }
}

export default TaskItem;
