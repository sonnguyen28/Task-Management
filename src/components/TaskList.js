import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterStatus : -1,
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(name === 'filterStatus' ? value : this.state.filterStatus)
    this.setState({
      [name] : value,
    })
  }

  render() {
    var {tasks} = this.props;
    var {filterStatus} = this.state;
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem key={task.id} 
            index={index} 
            task = {task}
            onUpdateStatus = {this.props.onUpdateStatus}
            onDelete={this.props.onDelete}
            onUpdate={this.props.onUpdate}
            />
    })
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover mt-5"
          >
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th>
                  <div className="d-flex">
                    <p className="text-right w-50 mr-3 my-auto">Trạng Thái</p>
                    <select className="form-control"
                            name="filterStatus"
                            value={filterStatus}
                            onChange={this.onChange}
                            style={{width: "120px"}}
                    >
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
