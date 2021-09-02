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
                  ? "badge badge-pill badge-info btn p-2 w-25"
                  : task.status === 1
                  ? "badge badge-pill badge-warning btn p-2 w-25"
                  : "badge badge-pill badge-success btn p-2 w-25"
              }
              onClick={this.onUpdateStatus}
            >
              {task.status === 0
                ? "New"
                : task.status === 1
                ? "Pending"
                : "Done"}
            </span>
          </td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.onUpdate}
            >
              <span className="fas fa-pencil-alt mr-2"></span>Sửa
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onDelete}
            >
              <span className="fa fa-trash mr-2"></span>Xóa
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default TaskItem;
