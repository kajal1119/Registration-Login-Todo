import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoApp.css'; 

const TodoApp = () => {
  const [data, setData] = useState('');
  const [addedDataList, setAddedDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const inputChangeHandler = (e) => {
    setData(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (data.trim() !== '') {
      setAddedDataList([...addedDataList, data]);
      setData('');
    }
  };

  const deleteHandler = (index) => {
    const updatedList = [...addedDataList];
    updatedList.splice(index, 1);
    setAddedDataList(updatedList);
  };

  const editHandler = (index) => {
    setEditIndex(index);
  };

  const updateHandler = () => {
    setEditIndex(-1);
  };

  return (
    <div className="container-fluid todo-app">
      <h2 className="my-4 text-center text-light">Todo App</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="input-group mb-3">
            <input
              type="text"
              value={data}
              className="form-control"
              placeholder="Add Item"
              onChange={inputChangeHandler}
            />
            <button onClick={addHandler} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-light">Added Values:</h2>
      {addedDataList.length > 0 && (
        <div>
          <ul className="list-group">
            {addedDataList.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const updatedList = [...addedDataList];
                      updatedList[index] = e.target.value;
                      setAddedDataList(updatedList);
                    }}
                    className="form-control me-2"
                  />
                ) : (
                  <span>{item}</span>
                )}
                <div className="btn-group">
                  <button
                    onClick={() => deleteHandler(index)}
                    className="btn btn-danger me-2"
                  >
                    Delete
                  </button>
                  {editIndex === index ? (
                    <button
                      onClick={updateHandler}
                      className="btn btn-success"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => editHandler(index)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
