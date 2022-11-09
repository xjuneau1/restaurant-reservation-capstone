import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { finishTableReservation, updateReservationStatus } from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./tables.css";

function TablesInfo({ table, setError, index }) {
  const [currentTable, setCurrentTable] = useState(table);
  const history = useHistory();

  const handleFinishTable = (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    setError(null);
    if (
      window.confirm(
        "Is this table ready to seat new guests? This cannot be undone."
      )
    ) {
      Promise.all([
        updateReservationStatus(
          "finished",
          currentTable.reservation_id,
          abortController.signal
        ).catch(setError),
        finishTableReservation(event.target.value, abortController.signal)
          .then(() => history.push("/"))
          .catch(setError),
      ]);
    }
    return () => abortController.abort();
  };
  return (
    <div className="table-card" key={index}>
      <div className="table-row">
        <div className="table-data">Table ID: {currentTable.table_id}</div>
        <div className="table-data">Table Name: {currentTable.table_name}</div>
        <div className="table-data">Capacity: {currentTable.capacity}</div>
      </div>
      <div className="table-row-1">
        <div className="table-data">Reservation ID: {currentTable.reservation_id}</div>
        <div className="status-container" data-table-id-status={`${table.table_id}`}>
          Status:
          <div
          className={
            currentTable.reservation_id
              ? "status-done"
              : "status-booked"
          }
        >
          {currentTable.reservation_id ? "occupied" : "free"}
        </div>
          
        </div>
        
      </div>
      <div className="table-row">
      <div className="table-data">
          {currentTable.reservation_id ? (
            <button
              type="submit"
              onClick={handleFinishTable}
              data-table-id-finish={`${table.table_id}`}
              value={table.table_id}
              className="table-button-done"
            >
              Finish
              <FontAwesomeIcon className="margin-left-5" icon={faCheck} />
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default TablesInfo;
