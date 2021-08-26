import React from "react";

function TaskForm() {
  return (
    <div className="card border-warning">
      <div className="card-header bg-warning">
        <h5 className="card-title">
          Thêm Công Việc <span className="fas fa-times-circle text-right"></span>
        </h5>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Tên :</label>
            <input type="text" className="form-control" />
          </div>
          <label>Trạng Thái :</label>
          <select className="form-control" required="required">
            <option value="1">Kích Hoạt</option>
            <option value="0">Ẩn</option>
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

export default TaskForm;
