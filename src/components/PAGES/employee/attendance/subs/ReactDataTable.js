import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import {
  MenuItem,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useState } from "react";
// import Update from './Update'
import classnames from "classnames";


//

const ReactTable = ({ profile }) => {
  const [data, setData] = useState(profile);

  useEffect(() => {
    setData(profile);
  }, [profile]);

 
  const btnClass = (status)=>{
    console.log(status)

    return classnames({
      "theme-yellow":status==="REQUESTED",
      "theme-green":status==="APPROVED",
      "theme-red":status==="DENIED",
    })
}
  const columns = React.useMemo(
    () => [
      {
        name: "Date",
        sortable: true,
        cell: (row) => (
          <div className={btnClass(row.status)}>
            <MenuItem button={false} className="d-flex align-items-center">
              {row.status}
            </MenuItem>
          </div>
        ),
      },
      {
        name: "Expected Check In",
        cell: (row) => <div>{row.type}</div>,
        sortable: true,
      },
      {
        name: "Actual Check In",
        selector: "commence",
        sortable: true,
      },
      {
        name: "Expected Check Out",
        cell: (row) => <div>{row.type}</div>,
        sortable: true,
      },
      {
        name: "Actual Check Out",
        selector: "commence",
        sortable: true,
      },
      {
        name: "Total Hours",
        selector: "ends",
        sortable: true,
      },
    ],
    []
  );

  //

  return (
    <>
      <div className="mt-4">
        <Card>
          <DataTable
            title={
              <div className="table-title">
                <h6>MY ATTENADNCE HISTORY</h6>
              </div>
            }
            columns={columns}
            // data={[]}
            data={data?.attendance}
            sortable
            responsive
            highlightOnHover
            striped
            pagination
          />
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.employee,
  };
};

export default connect(mapStateToProps)(ReactTable);
// export default ReactTable
