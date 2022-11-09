import React, { useEffect, useState } from "react";
import { listTables, updateSeat, getReservation } from "../utils/api";
import { useLocation, useHistory, useParams } from "react-router-dom";

import SeatTableForm from "./SeatTableForm";
import ErrorAlert from "../layout/ErrorAlert";
import "./tables.css";

function SeatTable() {
  const initTableData = {
    table_id: null,
    reservation_id: null,
    table_status: "free",
    created_at: "",
    updated_at: "",
  };
  const [tables, setTables] = useState([]);
  const [currentReservation, setCurrentReservation] = useState({});
  const [tableData, setTableData] = useState(initTableData);
  const [error, setError] = useState(null);
  const { reservation_id } = useParams();
  const history = useHistory();
  let date;
  const { search } = useLocation();
  if (search) {
    date = search.replace("?date=", "");
    console.log(date);
  }

  useEffect(() => {
    async function loadTables() {
      const abortController = new AbortController();
      setError(null);
      setCurrentReservation(
        await getReservation(reservation_id, abortController.signal)
      );
      setTables(await listTables(abortController.signal));
      return () => abortController.abort();
    }
    loadTables();
  }, [reservation_id]);

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      const updatedTable = await updateSeat(
        reservation_id,
        parseInt(tableData.table_id),
        abortController.signal
      );
      console.log(updatedTable);
      history.push(`/dashboard?date=${currentReservation.reservation_date}`);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  if (currentReservation.status === "booked") {
    return (
      <div className="seat-reservation-container">
        <ErrorAlert error={error} />
        <h3>Seat the reservation:</h3>
        <div className="current-reservation-container-0">
          <h6>Current Reservation:</h6>

          <div className="current-reservation-container-1">
            <div className="current-reservation-row margin-10">
              id: {currentReservation.reservation_id}
            </div>
            <div className="current-reservation-row">
              <div className="margin-10">
                Name: {currentReservation.first_name}{" "}
                {currentReservation.last_name}
              </div>
              <div className="margin-10">
                Phone: {currentReservation.mobile_number}
              </div>
              <div className="margin-10">
                Date: {currentReservation.reservation_date}
              </div>
            </div>
            <div className="current-reservation-row">
              <div className="margin-10">
                Time: {currentReservation.reservation_time}
              </div>
              <div className="margin-10">
                Party Size: {currentReservation.people}
              </div>
              <div className="status-container">
                Status:{" "}
                <div
                  className={
                    currentReservation.status === "booked"
                      ? "status-booked"
                      : "status-done"
                  }
                >
                  {currentReservation.status}
                </div>
              </div>
            </div>

            <SeatTableForm
              tables={tables}
              tableData={tableData}
              setTableData={setTableData}
              submitHandler={submitHandler}
              history={history}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default SeatTable;
