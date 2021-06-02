import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Clock from "react-live-clock";
import Box from "../../../../BoxLayout/Box";
import Btn from "./../../../../Button/Button";
import useAxios from "./../../../../../utility/axios-token-manager/init";
import { connect,useDispatch } from "react-redux";
import {loadStart,loadStop} from "./../../../../../redux/actions/loading"
import {updateCurrentState} from "./../../../../../redux/actions/employee"
import Flash from "./../../../../../utility/Flash"

//
const Time = ({ handleCheckInOut }) => {
  //
  const today = new Date();

  const [time, setTime] = useState();
  
  //
  const handleIn = (state) => {
    handleCheckInOut(time, state);
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <Box title="Clock In/Out">
          <div className="row">
            <div className="col-lg-6">
              <Typography>{today.toDateString()}</Typography>
              <Clock
                ticking={true}
                style={{ fontSize: "36px" }}
                format={"h:mm:ss A"}
                onChange={(output) => {
                  setTime(output);
                }}
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-end">
              <Typography className="d-flex justify-content-around">
                Check in time<span className="color-blur">8:00 AM</span>
              </Typography>
              <Typography className="d-flex justify-content-around">
                Check out time<span className="color-blur">5:00 PM</span>
              </Typography>
            </div>
          </div>
        </Box>
      </div>
      <div className="col-lg-6 d-flex align-item-end">
        <div
          className="d-flex flex-column justify-content-end mr-3"
         
        >
          <Btn text="Check In" className="pl-4 pr-4"  onClick={() => handleIn("check-in")} />
        </div>
        <div
          className="d-flex flex-column justify-content-end"
        >
          <Button variant='outlined' className='pt-2 pb-2' onClick={() => handleIn("check-out")}>Check Out</Button>
        </div>
      </div>
    </div>
  );
};

function CheckInOut({ profile }) {
  const dispatch = useDispatch()
  const today = new Date();

  const handleCheckInOut = async (time, action) => {
  dispatch(loadStart())
    try {
      const data = {
        date: today.toDateString(),
        time: time,
        company: profile.company._id,
        applicant: profile._id,
      };
     const update= await useAxios.post(
        `/app/v2/005/attendance/${action}`,
        data
      );
      dispatch(loadStop());

      if(update.data.code===201){
        Flash('success','successful','',3000)
        dispatch(updateCurrentState())
      } else{
        Flash('error','Server error','',3000);
      }
     
    } catch (error) {
      dispatch(loadStop())
      const err = error.message.split(" ");
      const code = Number(err[err.length - 1]);
      // console.log(code)
      if(code===400) return Flash('error',`You can only check in once a day`,'',3000);
      if(code===301) return Flash('error',`You've checkedout previously.`,'',3000);
      if(code===403) return Flash('error','Please check in first','',3000);
      if(code===401) return Flash('error','Access denied','',3000);
      if(code===500) return Flash('error','Server error','',3000);
      // console.log(error.message);
      
    }
  };
  return <Time handleCheckInOut={handleCheckInOut} />;
}

const mapStateToProps = (state) => {
  return {
    profile: state.employee,
  };
};

export default connect(mapStateToProps)(CheckInOut);
