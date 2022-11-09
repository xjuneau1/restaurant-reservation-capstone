import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function SeatTableForm({
  tables,
  tableData,
  setTableData,
  submitHandler,
  history,
}) {
  const changeHandler = ({ target }) => {
    setTableData({ [target.name]: target.value });
  };
  return (
    <div className="seat-form margin-10">
      <form className="" onSubmit={submitHandler}>
        <div>
          <label className="margin-right-5">Select Table:</label>
          <select
            name="table_id"
            id="table_id"
            onChange={changeHandler}
            className="margin-right-5"
          >
            <option>Table Name - Capacity</option>
            {tables.map((table) => (
              <option
                key={table.table_id}
                value={table.table_id}
                required={true}
              >
                {table.table_name} - {table.capacity}
              </option>
            ))}
          </select>
        </div>
        <div className="table-row">
        <button className="table-button margin-right-5" type="submit">
          Submit
          <FontAwesomeIcon
            className="margin-left-5"
            icon={faArrowUpFromBracket}
          />
        </button>
        <button
          className="table-button-done"
          type="button"
          onClick={() => history.goBack()}
        >
          <FontAwesomeIcon className="margin-right-5" icon={faArrowLeft} />
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}

export default SeatTableForm;
