import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  render() {
    var {tasks} = this.props;
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem key={tasks.id} index={index} task = {task}/>
    })
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover mt-5">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">
                  <div className="d-flex ">
                    <p>Trạng Thái</p>
                    <select className="form-control">
                      <option value="-1">Tất Cả</option>
                      <option value="0">Ẩn</option>
                      <option value="1">Kích Hoạt</option>
                    </select>
                  </div>
                </th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
