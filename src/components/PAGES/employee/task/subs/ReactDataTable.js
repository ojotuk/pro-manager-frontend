import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { LinearProgress, Typography, Box, Paper, Chip , Avatar} from "@material-ui/core";
import { connect } from "react-redux";
// import styles from './'
// import {departments,employementType} from './../../../../../settings/choices'
import { useState } from "react";
import { Link } from "react-router-dom";
import Update from "./Update";

//
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

//

const ReactTable = ({ profile }) => {
  const [data, setData] = useState(profile);

  useEffect(() => {
    setData(profile);
  }, [profile]);

  // Modal
  const [open,setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = (state,data,userID)=>{
    setOpen(state);
    setModalData({...data,userID})
  }

  const columns = React.useMemo(
    () => [
      {
        name: "Title",
        // selector: 'productName',
        sortable: true,
        cell: (row) => (
          <div className="d-flex align-items-center">{row.title}</div>
        ),
      },
      {
        name: "Progress",
        cell: (row) => (
          <div style={{ width: "150px" }}>
            <LinearProgressWithLabel
              value={row?.progress}
              className={
                Date.parse(row.end) < Date.now()
                  ? "over-due-task"
                  : "forth-task"
              }
            />
          </div>
        ),
        sortable: true,
      },
      {
        name: "Due Date",
        selector: "end",
        sortable: true,
      },
      {
        name: "Edit",
        sortable: true,
        cell: (row) => (
          <div style={{cursor:'pointer'}}
          onClick={()=>handleModal(true,row,profile?._id)}
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
          </div>
        ),
      },
    ],
    [profile._id]
  );

  //
  
  function ExpandedComponent(props) {
    return (
      <Paper className='p-4'>
        <div className='row'>
        <div className='col-lg-6'>
          <Typography>{props.data.title}</Typography>
          <div>{props.data.description}</div>
        </div>
        <div className='col-lg-6'>
        <Typography>Team Lead</Typography>
        <Chip label={props.data.teamLead.firstName}/>
        <Typography>Team Members</Typography>
        {props.data.teams.map((item,index)=><Chip key={index} avatar={<Avatar></Avatar>} label={item.firstName}/>)}

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
              <h6>MY PENDING TASK</h6> <Link to="/005/task">View All</Link>
            </div>
          }
            columns={columns}
            data={data?.task}
            sortable
            // sortIcon={<i className="fa fa-arrow-down"></i>}
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
      <Update state={open} data={modalData} handleModal={handleModal}/>
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
