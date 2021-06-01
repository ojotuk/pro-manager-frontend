import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import {Button, Card, MenuItem} from "@material-ui/core";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Update from "./Update";
import classnames from "classnames";


//

const ReactTable = ({ applications }) => {
  const [data, setData] = useState(applications);
  // console.log(applications);
  useEffect(() => {
    setData(applications);
  }, [applications]);

  // Modal
  const [open, setOpen] = useState(false);
  // const [decision, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = (state, data, userID,decision) => {
    setOpen(state);
    setModalData({ ...data, userID,decision:decision });
  };
  const btnClass = (status)=>{
    // console.log(status)

    return classnames({
      "theme-yellow":status==="REQUESTED",
      "theme-green":status==="APPROVED",
      "theme-red":status==="DENIED",
    })
}

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
        name: "Status",
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
        name: "Reason",
        selector: "type",
        sortable: true,
      },
      {
        name: "Start Date",
        selector: "commence",
        sortable: true,
      },
      {
        name: "End Date",
        selector: "ends",
        sortable: true,
      },
      {
        name: "Action",
        cell: (row) => (
          <div className="d-flex align-items-center">
            <Button
              style={{marginRight: "20px" }}
              variant='outlined'
              onClick={() => handleModal(true, row, applications?._id,"Approve")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </Button>
            <Button
              variant='outlined'
              onClick={() => handleModal(true, row, applications?._id,"Decline")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-slash-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
              </svg>
            </Button>
          </div>
        ),
      },
    ],
    [applications._id]
  );

  //

  return (
    <>
      <div className="mt-4">
        <Card>
          <DataTable
            title={
              <div className="table-title">
                <h6>LEAVE REQUEST</h6> <Link to="/005/task">View All</Link>
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
      <Update state={open} data={modalData} handleModal={handleModal} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    applications: state.company.leaves,
  };
};

export default connect(mapStateToProps)(ReactTable);
// export default ReactTable
