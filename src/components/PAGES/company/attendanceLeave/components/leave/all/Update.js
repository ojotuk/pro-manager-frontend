import {
  Button,
  Modal,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import useAxios from "../../../../../../../utility/axios-token-manager/init";
import styles from "./styles.module.css";
import Flash from "./../../../../../../../utility/Flash";
import { useDispatch } from "react-redux";
import { getLeaves } from "./../../../../../../../redux/actions/client";
import { loadStart, loadStop } from "./../../../../../../../redux/actions/loading";


//
export default function Update({ state, data, handleModal }) {
  const dispatch = useDispatch();
  const [reason, setReason] = useState("");
  const {applicant,type} = data
  // const [permit,setPermit] = useState(true)
console.log(data)
  const handleReason =(e)=>{
    setReason(e.target.value)
  }
  const reset = () => {
    handleModal(false, {}, "","");
  };
  const handleUpdate = async (action) => {
    const note = action?.toLowerCase()==="approved" ? null : reason;
    dispatch(loadStart());
    try {
      const update = await useAxios.put(
        `/app/v2/004/leave/update/${data._id}`,
        { decision:action , reason:note }
      );
      dispatch(loadStop());
      if (update.status === 201) {
        Flash("success", "Progress updated", "Thank you", 3000);
        // dispatch(updateCurrentState());
        dispatch(getLeaves())
        reset();
      }
    } catch (error) {
      Flash("error", "Server Error", "", 3000);
      
    }
    
    // console.log(update.data)
  };

  return (
    <Modal open={state}>
      <div className={styles.modalContent}>
        <div className={styles.wrapper}>
         
          {data.decision==="Approve" ?
          <div>
            <div style={{ width: "100%" }}>
              <Typography variant="h6">Approve {applicant?.firstName}'s {type} Request</Typography>
              <div className="mt-2 mb-3">
            <Divider />
            </div>
              <Typography variant="body2" className=' mb-3'>
              We will notify {applicant?.firstName} that their request for {type.toLowerCase()} was approved.
              </Typography>
            </div>
           
            <Button
            onClick={() => handleModal(false, null, null,"")}
            variant="outlined"
            className='pl-4 pr-4 mr-3 mt-4'
          >
            Cancel
          </Button>
          
          <Button className="btn-theme pl-4 pr-4 mt-4" onClick={() => handleUpdate("APPROVED")}>Approve</Button>
          </div>
          :
          <div>
            <div style={{ width: "100%" }}>
              <Typography variant="h6">Deny {applicant?.firstName}'s {type} Request</Typography>
              <div className="mt-2 mb-3">
            <Divider />
            </div>
              <Typography variant="body2" className=' mb-3'>
              We will notify {applicant?.firstName} that their request for {type?.toLowerCase()} was approved.
              If you’d like to let them know why, provide a reason:
              </Typography>
              <TextField className='mt-2' value={reason} onChange={(e)=>handleReason(e)} fullWidth multiline rows={2} variant="outlined" label="Reason..."/>
            </div>
           
            <Button
            onClick={() => handleModal(false, null, null,"")}
            variant="outlined"
            className='pl-4 pr-4 mr-3 mt-4'
          >
            Cancel
          </Button>
          
          <Button className="btn-theme pl-4 pr-4 mt-4" onClick={() => handleUpdate("DENIED")}>Deny</Button>
          </div>
        }
        </div>
      </div>
    </Modal>
  );
}

// const mapStateToProps = (state)=>{
//   return{

//   }
// }
