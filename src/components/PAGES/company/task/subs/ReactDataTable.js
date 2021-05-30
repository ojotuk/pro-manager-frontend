import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { LinearProgress, Typography, Box, Paper, Chip , Avatar} from "@material-ui/core";
import { connect } from "react-redux";
// import styles from './'
// import {departments,employementType} from './../../../../../settings/choices'
import { useState } from "react";
import { Link } from "react-router-dom";
// import Update from "./Update";

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

const ReactTable = ({ task }) => {
  const [data, setData] = useState(task);
// console.log(task)
  useEffect(() => {
    setData(task);
  }, [task]);

  // Modal
  // const [open,setOpen] = useState(false);
  // const [modalData, setModalData] = useState({});
  // const handleModal = (state,data,userID)=>{
  //   setOpen(state);
  //   setModalData({...data,userID})
  // }

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
        name:"Team Lead",
        // selector:"teamLead?.firstName",
        cell:(row)=>{
          const lead = row.teamLead.firstName + " "+ row.teamLead.lastName;
          return lead
        }
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
      }
    ],
    []
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
        <Link to={`/employee-data#/profile/${props.data.teamLead._id}`} >
              <Chip avatar={<Avatar></Avatar>} label={props.data.teamLead.firstName} className='cursor-p'/>
        </Link>
        <Typography className='mt-2'>Team Members</Typography>
        {props.data.teams.map((item,index)=><Link to={`/employee-data#/profile/${item._id}`}><Chip className='cursor-p' key={index} avatar={<Avatar></Avatar>} label={item.firstName}/></Link>)}
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
              <h6>ASSIGNED TASK</h6> <Link to="/005/task">View All</Link>
            </div>
          }
            columns={columns}
            data={data}
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
      {/* <Update state={open} data={modalData} handleModal={handleModal}/> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state.company.tasks,
  };
};

export default connect(mapStateToProps)(ReactTable);
// export default ReactTable
