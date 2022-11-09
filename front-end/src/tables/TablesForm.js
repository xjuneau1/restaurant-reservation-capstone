import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function TablesForm({ table, setTable, submitHandler, cancelHandler }) {
  const changeHandler = ({ target }) => {
    setTable({ ...table, [target.name]: target.value });
  };

  const changeNumber = ({ target }) => {
    setTable({ ...table, [target.name]: Number(target.value) });
  };
  return (
    <div className="table-form">
      <form onSubmit={submitHandler}>
        <label>
          Table Name:
          <input
            className="margin-right-5"
            onChange={changeHandler}
            value={table.table_name}
            type="text"
            id="table_name"
            name="table_name"
            required
          ></input>
        </label>
        <label>
          Capacity:
          <input
            className="margin-right-5"
            onChange={changeNumber}
            value={table.capacity}
            type="number"
            id="capacity"
            name="capacity"
            required
          ></input>
        </label>
        <div className="new-table-button-container">
          <button className="table-button margin-right-5" type="submit">
            Submit
            <FontAwesomeIcon className="margin-left-5" icon={faArrowUpFromBracket} />
          </button>
          <button
            className="table-button-done"
            type="button"
            onClick={cancelHandler}
          >
            <FontAwesomeIcon className="margin-right-5" icon={faArrowLeft} />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TablesForm;
