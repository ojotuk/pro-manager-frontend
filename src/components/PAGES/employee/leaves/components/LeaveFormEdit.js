import {
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Btn from "../../../../Button/Button";
import { connect } from "react-redux";
import useAxios from "../../../../../utility/axios-token-manager/init";
// import {leaveType} from '../../../../settings/choices';
import Flash from "../../../../../utility/Flash";
import {loadStart,loadStop} from '../../../../../redux/actions/loading'
import { useDispatch } from "react-redux";
import {updateCurrentState} from '../../../../../redux/actions/employee'
//
function LeaveForm({ employeeProfileID, companyEmail,data }) {
    const dispatch = useDispatch()
// console.log(data)
  //
  const [input, setInput] = useState({
    notes: "",
    commence: "",
    ends: "",
    type: data?.type,
    ...data
  });
  const handleChange = (e) => {
    input[e.target.name] = e.target.value;
    setInput({ ...input });
  };
  
  const handleUpdate = async () => {
      if(!input.commence || !input.ends || !input.type ) return Flash('error',"Fields marked * are required",'Missing Field',3000)
    const data = {
      ...input,
      applicant: employeeProfileID,
      company: companyEmail,
    };
    try {
        dispatch(loadStart());
        const update = await useAxios.put(
          `/app/v2/005/update/leave/${data._id}`,
          { ...input }
        );
        dispatch(loadStop());
        if (update.data.code === 201) {
          Flash("success", "Progress updated", "Thank you", 3000);
          dispatch(updateCurrentState());
          // reset();
        }else{
        Flash("error", "Error updating...", "Error", 3000);
        }
        // dispatch(updateCurrentState())
    } catch (error) {
        console.log(error.message)
        Flash("error", "Server/Error updating...", "Error", 3000);

    }
   
  };
  return (
    <div onChange={handleChange}>
      <div className="row">
        <div className="col-lg-4">
          <Typography>Purpose</Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="type"
            value={input?.type}
            inputProps={{readOnly:true}}
            />
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
          <div onClick={() => handleUpdate()}>
            <Btn text="Update Request" />
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
