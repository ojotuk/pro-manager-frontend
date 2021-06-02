import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { useState } from "react";
// import Update from './Update'
// import classnames from "classnames";


//

const ReactTable = ({ profile }) => {
  const [data, setData] = useState(profile);

  useEffect(() => {
    setData(profile);
  }, [profile]);

  const columns = React.useMemo(
    () => [
      {
        name: "Date",
        sortable: true,
        selector:"date"
      },
      {
        name: "Expected Check In",
        selector:"expectedCheckIn",
        sortable: true,
      },
      {
        name: "Actual Check In",
        selector: "checkIn",
        sortable: true,
      },
      {
        name: "Expected Check Out",
        selector:"expectedCheckOut",
        sortable: true,
      },
      {
        name: "Actual Check Out",
        selector: "checkOut",
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
                <h6>MY ATTENDANCE HISTORY</h6>
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
