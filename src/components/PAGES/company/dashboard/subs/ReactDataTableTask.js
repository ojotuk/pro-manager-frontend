import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import {
  LinearProgress,
  Typography,
  Box,
} from "@material-ui/core";
import { connect } from "react-redux";
// import styles from './'
// import {departments,employementType} from './../../../../../settings/choices'
import { useState } from "react";
import { Link } from "react-router-dom";

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


  useEffect(() => {
    const handleTop = () => {
      const task = profile;
      if (task) {
        return task.sort((a, b) => {
          if (a.end > b.end) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    };
    const dt = handleTop();
    if (dt) {
      setData(dt.reverse().slice(0, 3));
    }
  }, [profile]);

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
          <div
            style={{ cursor: "pointer" }}
            // onClick={() => handleModal(true, row, profile?._id)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M17.25 2.25H13.5V1.875C13.5 1.37772 13.3025 0.900805 12.9508 0.549175C12.5992 0.197544 12.1223 0 11.625 0L6.375 0C5.87772 0 5.40081 0.197544 5.04917 0.549175C4.69754 0.900805 4.5 1.37772 4.5 1.875V2.25H0.75V4.5H2.25V15.75C2.25 16.3467 2.48705 16.919 2.90901 17.341C3.33097 17.7629 3.90326 18 4.5 18H13.5C14.0967 18 14.669 17.7629 15.091 17.341C15.5129 16.919 15.75 16.3467 15.75 15.75V4.5H17.25V2.25ZM13.5 15.75H4.5V4.5H13.5V15.75Z"
                  fill="#374957"
                />
                <path d="M8.25 6.75H6V13.5H8.25V6.75Z" fill="#374957" />
                <path d="M12 6.75H9.75V13.5H12V6.75Z" fill="#374957" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        ),
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
                <h6>MY PENDING TASK</h6> <Link to="/task-management">View All</Link>
              </div>
            }
            columns={columns}
            data={data}
            sortable
            // sortIcon={<i className="fa fa-arrow-down"></i>}
            responsive
            highlightOnHover
            striped
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
    profile: state.company.tasks,
  };
};

export default connect(mapStateToProps)(ReactTable);
// export default ReactTable
