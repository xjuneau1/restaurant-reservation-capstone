import React from 'react';

function SeatTableForm({ tables ,tableData, setTableData, submitHandler, history }) {
    const changeHandler = ({ target }) => {
        setTableData({ [target.name]: target.value });
      };
    return ( 
        <div className="margin-10">
            <form className='seat-form' onSubmit={submitHandler}>
                <div>
                    <label className="margin-right-5">
                        Select Table:
                    </label>
                    <select
                        name="table_id"
                        id="table_id"
                        onChange={changeHandler}
                        className="margin-right-5"
                    >
                        <option>Table Name - Capacity</option>
                        {tables.map((table)=> 
                            <option
                                key={table.table_id}
                                value={table.table_id}
                                required={true}
                            >
                                {table.table_name} - {table.capacity}
                            </option>
                        )}
                    </select>
                </div>
                <button className='table-button margin-right-5' type='submit'>Submit</button>
                <button className='table-button-done' type='button' onClick={()=> history.goBack()}>Cancel</button>
            </form>
        </div>
     );
}

export default SeatTableForm;