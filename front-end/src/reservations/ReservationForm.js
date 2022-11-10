import React from "react";
import "./reservation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function ReservationForm({
  submitHandler,
  cancelHandler,
  reservation,
  setReservation,
}) {
  const changeHandler = ({ target }) => {
    setReservation({ ...reservation, [target.name]: target.value });
  };

  const changeNumber = ({ target }) => {
    setReservation({ ...reservation, [target.name]: Number(target.value) });
  };
  return (
    <div className="reservation-form-container">
      <form onSubmit={submitHandler}>
        <label>
          First Name:
          <input
            className="reservation-form-input"
            onChange={changeHandler}
            value={reservation.first_name}
            type="text"
            id="first_name"
            name="first_name"
            required
          />
        </label>
        <label>
          Last Name:
          <input
            className="reservation-form-input"
            onChange={changeHandler}
            value={reservation.last_name}
            type="text"
            id="last_name"
            name="last_name"
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            className="reservation-form-input"
            onChange={changeHandler}
            value={reservation.mobile_number}
            placeholder="XXX-XXX-XXXX"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="mobile_number"
            name="mobile_number"
            required
          />
        </label>
        <label>
          Reservation Date:
          <input
            className="reservation-form-input"
            onChange={changeHandler}
            value={reservation.reservation_date}
            type="date"
            id="reservation_date"
            name="reservation_date"
            required
          />
        </label>
        <label>
          Reservation Time:
          <input
            className="reservation-form-input"
            onChange={changeHandler}
            value={reservation.reservation_time}
            type="time"
            placeholder="HH:MM"
            id="reservation_time"
            name="reservation_time"
            required
          />
        </label>
        <label>
          Party Size:
          <input
            className="reservation-form-input"
            onChange={changeNumber}
            value={reservation.people}
            type="text"
            id="people"
            name="people"
            max="12"
            min="1"
            aria-label="Number of people"
            required
          />
        </label>
        <div className="flex-center">
          <button className="reservation-button margin-right-5" type="submit">
            Submit{" "}
            <FontAwesomeIcon
              className="margin-left-5"
              icon={faArrowUpFromBracket}
            />
          </button>
          <button
            className="reservation-button-cancel"
            type="button"
            onClick={cancelHandler}
          >
            <FontAwesomeIcon className="margin-right-5" icon={faArrowLeft} />{" "}
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
