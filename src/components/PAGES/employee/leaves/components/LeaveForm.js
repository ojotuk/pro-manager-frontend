import {
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Btn from "./../../../../Button/Button";
import { connect } from "react-redux";
import useAxios from "../../../../../utility/axios-token-manager/init";
import {leaveType} from './../../../../../components/settings/choices';
import Flash from "./../../../../../utility/Flash";
import {loadStart,loadStop} from './../../../../../redux/actions/loading'
import { useDispatch } from "react-redux";
import {updateCurrentState} from './../../../../../redux/actions/employee'
//
function LeaveForm({ employeeProfileID, companyEmail }) {
    const dispatch = useDispatch()

  //
  const [input, setInput] = useState({
    notes: "",
    commence: "",
    ends: "",
    type: "",
  });
  const handleChange = (e) => {
    input[e.target.name] = e.target.value;
    setInput({ ...input });
  };
  const reset = ()=>{
    setInput({ 
      notes: "",
    commence: "",
    ends: "",
    type: "",
     });

  }
  const handleSubmit = async () => {
      
      if(!input.commence || !input.ends || !input.type ) return Flash('error',"Fields marked * are required",'Missing Field',3000)
    const data = {
      ...input,
      applicant: employeeProfileID,
      company: companyEmail,
    };
    try {
        dispatch(loadStart())
        const postLeave = await useAxios.post("/app/v2/005/leave",data);
        dispatch(loadStop());
        if(postLeave.status===201){
          dispatch(updateCurrentState())
          Flash('success','Leave request sent', '',3000)
          reset()
        }
       
    } catch (error) {
        console.log(error.message)
    }
   
  };
  return (
    <div onChange={handleChange}>
      <div className="row">
        <div className="col-lg-4">
          <Typography>Purpose</Typography>
          <TextField
            select
            fullWidth
            variant="outlined"
            name="type"
            value={input.type}
            onChange={handleChange}
          >
            {leaveType.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="col-lg-4">
          <Typography>Start Date</Typography>
          <TextField
            name="commence"
            type="date"
            value={input.commence}
            fullWidth
            variant="outlined"
          ></TextField>
        </div>
        <div className="col-lg-4">
          <Typography>End Date</Typography>
          <TextField
            name="ends"
            type="date"
            value={input.ends}
            fullWidth
            variant="outlined"
          ></TextField>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8">
          <Typography>Give us some more information</Typography>
          <TextField
            name="notes"
            value={input.notes}
            multiline
            variant="outlined"
            fullWidth
            placeholder="more..."
            rows={4}
          />
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-end">
          <div onClick={() => handleSubmit()}>
            <Btn text="Request Leave" />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    employeeProfileID: state.employee?._id,
    companyEmail: state.employee?.company?.companyEmail,
  };
};

export default connect(mapStateToProps, null)(LeaveForm);
