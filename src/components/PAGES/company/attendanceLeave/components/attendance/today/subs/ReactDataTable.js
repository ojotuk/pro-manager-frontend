import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import {Card} from "@material-ui/core";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";



//

const ReactTable = ({ applications }) => {
  const [data, setData] = useState(applications);
  // console.log(applications);
  useEffect(() => {
    setData(applications);
  }, [applications]);


  const columns = React.useMemo(
    () => [
      {
        name: "Name",
        // selector: 'productName',
        sortable: true,
        cell: (row) => (
          <div className="d-flex align-items-center">{`${row.applicant?.firstName} ${row.applicant?.lastName}`}</div>
        ),
      },
      {
        name: "Expected check in",
        sortable: true,
        selector:"expectedCheckIn",
      },
      {
        name: "Actual Check In",
        sortable: true,
        cell:row=> {
          const date=new Date(row.checkIn);
          return date.toLocaleTimeString('en-US')
        },
      },
      {
        name: "Expected Check Out",
        selector:"expectedCheckOut",
        sortable: true,
      },
      {
        name: "Actual Check Out",
        cell:row=> {
          if(!row.checkOut) return ""
          const date=new Date(row.checkOut);
          return date.toLocaleTimeString('en-US')
          
        },
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
                <h6>CHECKED IN</h6> <Link to="/005/task">View All</Link>
              </div>
            }
            columns={columns}
            data={data}
            sortable
            responsive
            highlightOnHover
            striped
            pagination
            // defaultSortField="end"
          />
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    applications: state.company.attendances,
  };
};

export default connect(mapStateToProps)(ReactTable);
// export default ReactTable
