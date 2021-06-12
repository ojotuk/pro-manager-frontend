import {
  Button,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useAxios from "../../../../../utility/axios-token-manager/init";
import styles from "./styles.module.css";
import Flash from "./../../../../../utility/Flash";
import { useDispatch } from "react-redux";
import { updateCurrentState } from "./../../../../../redux/actions/employee";
import { loadStart, loadStop } from "./../../../../../redux/actions/loading";
import LeaveForm from "./LeaveFormEdit"



//
export default function Update({ state, data, handleModal,type }) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState("");
  const [actionType,setActionType] = useState("")
  // console.log(type)
//   const { userID } = data;
  useEffect(()=>{
    setActionType(type)
  },[data,type])
 
  const reset = () => {
    setProgress("");
    handleModal(false, {}, "");
  };
  // 
  const handleDel = async ()=>{
    dispatch(loadStart());
    try {
      const update = await useAxios.delete(
        `/app/v2/005/drop/leave/${data._id}`,
        { progress }
      );
      dispatch(loadStop());
      if (update.data.code === 201) {
        Flash("success", "Leave has been deleted", "Successful", 3000);
        // console.log(update.data.doc)
        dispatch(updateCurrentState());
        reset();
      }else{
        Flash("error", "Error", "Try again", 3000);

      }
    } catch (error) {
      Flash("error", "Server Error", "Try again", 3000);
      
    }
    
  }

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
          {actionType==="Edit" ?
          <div>
          <LeaveForm data={data}/>
          </div>
          :
          <div>Are you sure you want to do this ?
              <br></br>
              <Typography variant='body1'>
                Click the button below to proceed
                </Typography>
                <Button onClick={()=>handleDel()} variant='outlined' className={"mt-4"}>Delete</Button>
          </div>
        }
        </div>
      </div>
    </Modal>
  );
}
