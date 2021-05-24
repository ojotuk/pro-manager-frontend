import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { Avatar, Button, MenuItem, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import {
  departments,
  employementType,
} from "./../../../../../../settings/choices";
import { useState } from "react";
import { Link } from "react-router-dom";

//

const ReactTable = ({ employees }) => {
  const [data, setData] = useState([...employees]);
  // console.log(employees)

  //
  const handleChange = (e) => {
    param[e.target.name] = e.target.value;
    setParam({ ...param });
    if (!param.employmentType && param.department) {
      const filtered = employees.filter(
        (item) => item.department === param.department
      );
      setData([...filtered]);
      // return;
    }
    if (!param.department && param.employmentType) {
      const filtered = employees.filter(
        (item) => item.employmentType === param.employmentType
      );
      setData([...filtered]);
      // return;
    }
    if (param.department && param.employmentType) {
      const filtered = employees.filter(
        (item) =>
          item.department === param.department &&
          item.employmentType === param.employmentType
      );
      setData([...filtered]);
      return;
    }
  };
  const handleResetFilter = () => {
    setParam({ employmentType: "", department: "" });
    setData([...employees]);
  };
  useEffect(() => {
    setData(employees);
  }, [employees]);

  const [param, setParam] = useState({ employmentType: "", department: "" });

  // const handleRowClick=(user)=>{
  //   console.log('user is ', user)
  // }

  const columns = React.useMemo(
    () => [
      {
        name: "Name",
        // selector: 'productName',
        sortable: true,
        cell: (row) => (
          <div className="d-flex align-items-center">
            <Avatar className="mr-3"></Avatar>
            {row.firstName} {row.lastName}
          </div>
        ),
      },
      {
        name: "Designation",
        selector: "jobTitle",
        sortable: true,
      },
      {
        name: "Department",
        selector: "department",
        sortable: true,
      },
      {
        name: "Date Joined",
        selector: `hireDate`,
        sortable: true,
      },
      {
        name: "",
        button: true,
        cell: (row) => <Link to={`/profile/${row._id}`}>view</Link>,
      },
    ],
    []
  );

  return (
    <>
      <div className="mt-4">
        <div className={styles.filter}>
          <div className={styles.content}>
            <span className="mr-4">
              <Button onClick={() => handleResetFilter()}>Refresh</Button>
            </span>
            <TextField
              select
              label="Employee Type"
              fullWidth
              className="mr-2"
              name="employmentType"
              value={param.employmentType}
              onChange={handleChange}
            >
              {employementType.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Departments"
              fullWidth
              value={param.department}
              name="department"
              onChange={handleChange}
            >
              {departments.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <Card>
          <DataTable
            title="EMPLOYEE LIST"
            columns={columns}
            data={data}
            //   defaultSortField="title"
            sortable
            sortIcon={<i className="fa fa-arrow-down"></i>}
            responsive
            // onRowClicked={(row)=>handleRowClick(row)}
            highlightOnHover
            striped
            pagination
          />
        </Card>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { company } = state;
  return { employees: company.employees };
}

export default connect(mapStateToProps)(ReactTable);
// export default ReactTable
