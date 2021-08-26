import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks : [] // id: unique, name, status
    }
  };

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      })
    }
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Hoc lap trinh",
        status : true
      },
      {
        id: this.generateID(),
        name: "Ngu",
        status : false
      },
      {
        id: this.generateID(),
        name: "Choi",
        status : true
      },
    ];
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x110000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()
    + this.s4() + '-' + this.s4();
  }

  render() {
    var {tasks} = this.state;
    return(
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fas fa-plus text-right"></span>Thêm Công Việc
            </button>
            <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>
              <span className="fas fa-plus text-right"></span>Update data
            </button>
            <Control />
            <TaskList tasks={tasks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
