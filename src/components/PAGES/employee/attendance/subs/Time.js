import { Button, Typography } from "@material-ui/core";
import React from "react";
import Clock from "react-live-clock";
import Box from "../../../../BoxLayout/Box";
import Btn from "./../../../../Button/Button"
function Time() {
  const today = new Date();

  return (
    <div className="row">
      <div className="col-lg-6">
        <Box title="Clock In/Out">
            <div className="row">
              <div className='col-lg-6'>
                <Typography>{today.toDateString()}</Typography>
                <Clock
                  ticking={true}
                  style={{ fontSize: "36px" }}
                  format={"h:mm:ss A"}
                  onChange={(output,se) => {console.log(se)}}
                />
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-end'>
              <Typography className='d-flex justify-content-around'>
                Check in time<span className='color-blur'>8:00 AM</span>
              </Typography>
              <Typography className='d-flex justify-content-around'>
                Check out time<span className='color-blur'>5:00 PM</span>
              </Typography>
            </div>
          </div>
        </Box>
      </div>
      <div className='col-lg-6 d-flex align-item-end'>
          <div className='d-flex flex-column justify-content-end'>
          <Btn text="Check In" className='pl-4 pr-4'/>
          </div>
          <div className='d-flex flex-column justify-content-end'>
          <Button >Check Out</Button>
          </div>
      </div>
    </div>
  );
}

export default function CheckInOut() {
  return <Time />;
}
