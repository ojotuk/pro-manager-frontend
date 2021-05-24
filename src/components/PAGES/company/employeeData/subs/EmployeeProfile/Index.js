import {
  Avatar,
  MenuList,
  makeStyles,
  MenuItem,
  TextField,
  Tooltip
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { MenuItem } from "react-pro-sidebar";
import useAxios from "../../../../../../utility/axios-token-manager/init";
import avatar from "./../../../../../../asset/img/avatar.png";
import classnames from "classnames";
import Personal from "./components/personal/Personal";
import Employment from "./components/employment/Employment";
import Payslip from "./components/payslip/Payslip";
import Leaves from "./components/leaves/Leaves";
import Tax from "./components/tax/Tax";
import AccountInfo from "./components/accountInfo/AccountInfo";
import Documents from "./components/document/Document";
import { getEmployeeProfile } from "./../../../../../../redux/actions/client";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";
import TaskSender from "./components/others/TaskSender";
import Flash from "./../../../../../../utility/Flash"
//
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

//
export default function Index({ match }) {


  // 
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const handleTabs = () => {
    switch (tab) {
      case 0:
        return <Personal />;
      case 1:
        return <Employment />;
      case 2:
        return <Tax />;
      case 3:
        return <Payslip />;
      case 4:
        return <Leaves />;
      case 5:
        return <Documents />;
      case 6:
        return <AccountInfo />;
      default:
        return <Personal />;
    }
  };

  const classes = useStyles();
  // console.log(match.params.id)
  const [profile, setProfile] = useState({});
const id=match.params.id
  
  useEffect(() => {
    const getUserProfile = async () => {
      const response = await useAxios.get(
        `/app/v2/004/employee/profile/${id}`
      );
      if (response.data.code === 200) {
        setProfile({ ...response.data.profile });
        dispatch(getEmployeeProfile(response.data.profile));
      }else{
        Flash('error',"User not found","Error",3000)
        // setProfile({ ...response.data.profile });
        // dispatch(getEmployeeProfile(response.data.profile));
      }
      // console.log(response.data.profile);
    };
    getUserProfile();
  }, [dispatch,id]);

  const classhandle = (num) =>
    classnames({
      "switch-tabs": true,
      "active-tab": tab === num,
    });

    // state for task added;
    const [task,setTask] = useState(false)
    const [expand,setExpand] = useState(false)

    // 
    const classtaskHandler =()=> {
        let defaultClass = styles.taskSender;
        const openClass = styles.taskOpen;
        const expandClass = styles.taskExpand;
      return classnames({
          [defaultClass]:true,
          [openClass]:task,
          [expandClass]:expand
    })}

    const expandHandler=(state)=>{
        setExpand(state)
    }
    const xHandler=()=>{
      setExpand(false)
      setTask(false)
    }

  //
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <div>
            <Avatar src={avatar} className={classes.large}></Avatar>
            <div>
              <MenuList>
                <MenuItem onClick={() => setTab(0)} className={classhandle(0)}>
                  <div>Personal Info</div>
                </MenuItem>
                <MenuItem onClick={() => setTab(1)} className={classhandle(1)}>
                  <div>Employment & Compensation</div>
                </MenuItem>
                <MenuItem onClick={() => setTab(2)} className={classhandle(2)}>
                  <div>Tax Info</div>
                </MenuItem>
                <MenuItem onClick={() => setTab(3)} className={classhandle(3)}>
                  <div>Salary & Payslips</div>
                </MenuItem>
                <MenuItem onClick={() => setTab(5)} className={classhandle(5)}>
                  <div>Documents</div>
                </MenuItem>
                <MenuItem onClick={() => setTab(4)} className={classhandle(4)}>
                  <div>Leave & Holidays</div>
                </MenuItem>
                <MenuItem onClick={() => setTab(6)} className={classhandle(6)}>
                  <div>Account Info</div>
                </MenuItem>
              </MenuList>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className={styles.brief}>
            <div className='row'> 
              <div className={styles.user + " col-lg-4"}>
                <h3 className="mb-3">
                  {profile.firstName} {profile.lastName}
                </h3>
                <div className="mb-2">{profile?.employeeID}</div>
                <h6>{profile.jobTitle}</h6>
                <p className="mt-2">Started on {profile.hireDate}</p>
              </div>
              <div className={styles.actionIcons + " col-lg-4"}>
                <Tooltip title={`Message ${profile?.lastName}`} arrow className='mr-4'>
                    <i className="bi bi-envelope"></i>
                </Tooltip>
                <Tooltip title={!task ?`Assign task to ${profile?.lastName}`:"Abort"} arrow onClick={()=>setTask(!task)}>
                    <i className='bi bi-list-task'></i>
                </Tooltip>
              </div>
              <div className={styles.action + " col-lg-4"}>
                  <TextField select label="Action" variant="outlined" fullWidth>
                    {["Delete Profile"].map((item,index)=><MenuItem key={index} value={item}>{item}</MenuItem>)}
                  </TextField>
              </div>
            </div>
          </div>
          {handleTabs()}
        </div>
      </div>
      <div className={classtaskHandler()}>
          <TaskSender expandHandler={expandHandler} expand={expand} xHandler={xHandler}/>
      </div>
    </div>
  );
}
