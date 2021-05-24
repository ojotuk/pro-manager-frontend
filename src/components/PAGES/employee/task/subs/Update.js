import {
  Button,
  Modal,
  Box,
  LinearProgress,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useAxios from "../../../../../utility/axios-token-manager/init";
import styles from "./styles.module.css";
import Flash from "./../../../../../utility/Flash";
import { useDispatch } from "react-redux";
import { updateCurrentState } from "./../../../../../redux/actions/employee";
import { loadStart, loadStop } from "./../../../../../redux/actions/loading";

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
export default function Update({ state, data, handleModal }) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState("");
  const [permit,setPermit] = useState(true)
  // console.log(data?.teamLead)

//   const { userID } = data;
// console.log(data)
  useEffect(()=>{
    //   console.log(`${data?.userID}`===`${data.teamLead?._id}`)
    //   console.log(`${data?.userID}`, `${data.teamLead?._id}`)
    if(data?.userID!==data.teamLead?._id){
        // console.log('not leader')
        setPermit(false)
        return
    }else{
        setPermit(true)
        return
    }
  },[data])
 
  const reset = () => {
    setProgress("");
    handleModal(false, {}, "");
  };
  const handleProgressUpdate = async () => {
    dispatch(loadStart());
    const update = await useAxios.put(
      `/app/v2/005/task-progress/update/${data._id}`,
      { progress }
    );
    if (update.data.code === 201) {
      Flash("success", "Progress updated", "Thank you", 3000);
      dispatch(updateCurrentState());
      dispatch(loadStop());
      reset();
    }
    // console.log(update.data)
  };

  return (
    <Modal open={state}>
      <div className={styles.modalContent}>
        <div className={styles.wrapper}>
          <Button
            onClick={() => handleModal(false, null, null)}
            className={styles.close}
          >
            <i className="bi bi-x-circle-fill"></i>
          </Button>
          {permit ?
          <div>
            <div style={{ width: "100%" }}>
              <Typography>Current Progress</Typography>
              <LinearProgressWithLabel
                value={data?.progress}
                className={
                  Date.parse(data.end) < Date.now()
                    ? "over-due-task"
                    : "forth-task"
                }
              />
            </div>
            <div className="mt-2 mb-2">
              <TextField
                label="set progress"
                InputLabelProps={{ shrink: true }}
                helperText="min(0) max(100)"
                style={{ maxWidth: "100px" }}
                value={progress}
                type="number"
                onChange={(e) => {
                  if (
                    Number(e.target.value) < 101 &&
                    Number(e.target.value) >= 0 &&
                    e.target.value.length < 4
                  ) {
                    setProgress(e.target.value);
                  } else {
                    return;
                  }
                }}
              />
            </div>
            <Divider />
            <Button onClick={() => handleProgressUpdate()}>Update</Button>
          </div>
          :
          <div>Access Denied
              <br></br>
              <Typography variant='body1'>Only team lead can perform progress update.</Typography>
          </div>
        }
        </div>
      </div>
    </Modal>
  );
}
