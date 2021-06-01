import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import {
  Typography,
  Paper,
  Chip,
  Avatar,
  MenuItem,
  Button,
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

  // Modal
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [type,setType] = useState("")
  const handleModal = (state, data, userID,action) => {
    setOpen(state);
    setType(action);
    setModalData({ ...data, userID ,action});
  };

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
        cell: (row) => <div>{row.type}</div>,
        sortable: true,
      },
      {
        name: "Starting",
        selector: "commence",
        sortable: true,
      },
      {
        name: "Ending",
        selector: "ends",
        sortable: true,
      },
      {
        name: "Action",
        sortable: true,
        cell: (row) => (
          <div className="d-flex align-items-center">
            <Button
              variant='outlined'
              style={{ marginRight: "20px" }}
              onClick={() => handleModal(true, row, profile?._id,"Edit")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.205 0.794986C16.6951 0.285884 16.004 -6.10352e-05 15.2835 -6.10352e-05C14.563 -6.10352e-05 13.8719 0.285884 13.362 0.794986L0 14.157V18H3.843L17.205 4.63799C17.7139 4.12801 17.9997 3.43696 17.9997 2.71649C17.9997 1.99601 17.7139 1.30497 17.205 0.794986ZM3.225 16.5H1.5V14.775L11.4825 4.79999L13.2075 6.52499L3.225 16.5ZM16.1445 3.57749L14.2642 5.45774L12.543 3.73274L14.4225 1.85549C14.6512 1.62674 14.9615 1.49823 15.285 1.49823C15.6085 1.49823 15.9188 1.62674 16.1475 1.85549C16.3762 2.08424 16.5048 2.39449 16.5048 2.71799C16.5048 3.04149 16.3762 3.35174 16.1475 3.58049L16.1445 3.57749Z"
                  fill="#374957"
                />
              </svg>
            </Button>
            <Button
              variant='outlined'
              onClick={() => handleModal(true, row, profile?._id,"Delete")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </Button>
          </div>
        ),
      },
    ],
    [profile._id]
  );

  //

  function ExpandedComponent(props) {
    return (
      <Paper className="p-4">
        <div className="row">
          <div className="col-lg-6">
            <Typography>{props.data.title}</Typography>
            <div>{props.data.description}</div>
          </div>
          <div className="col-lg-6">
            <Typography>Team Lead</Typography>
            <Chip label={props.data.teamLead.firstName} />
            <Typography>Team Members</Typography>
            {props.data.teams.map((item, index) => (
              <Chip
                key={index}
                avatar={<Avatar></Avatar>}
                label={item.firstName}
              />
            ))}
          </div>
        </div>
      </Paper>
    );
  }

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
            data={data?.leaves}
            sortable
            responsive
            highlightOnHover
            striped
            pagination
            expandableRows
            expandableRowsComponent={<ExpandedComponent />}
            defaultSortField="end"
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
