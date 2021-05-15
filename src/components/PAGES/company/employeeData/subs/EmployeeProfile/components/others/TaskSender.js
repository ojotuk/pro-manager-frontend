import {
  AppBar,
  Avatar,
  Card,
  Paper,
  Toolbar,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import useAxios from "../../../../../../../../utility/axios-token-manager/init";
import Flash from "../../../../../../../../utility/Flash";
import styles from "./../../index.module.css";
import {
  loadStart,
  loadStop,
} from "../../../../../../../../redux/actions/loading";


//
function TaskSender({ state, expandHandler, expand, xHandler }) {
  //
  const dispatch = useDispatch();
  //
  const { company} = state;
  const { employeeProfile } = company;
  const [input, setInput] = useState({
    start: "",
    end: "",
    description: "",
    title: "",
  });
  const handleInputs = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // team checkbok;
  const [add, setAdd] = useState(false);
  const [employees, setEmployees] = useState([]);
  const handleCheck = (e) => {
    const checked = e.target.checked;
    setAdd(checked)
  };
  useEffect(()=>{
    if (add) {
        //   choose team membership
        // exclude current profile from list;
        const filtered = company.employees.filter(
          (item) => item._id !== employeeProfile._id
        );
        setEmployees([...filtered]);
      } else {
        setEmployees([]);
        setChecked([]);
      }
  },[add])

  const closeTaskMan = () => {
    //   calld onsubmit success
    // setEmployees([]);
    setChecked([]);
    setInput({ start: "", end: "", description: "", title: "" });
    xHandler();
    setAdd(false)
  };

  //   team
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const addTask = async () => {
    if (!input.title || !input.start)
      return Flash("error", `Field mark * are required`, "Error", 3000);
    const data = {
      ...input,
      teams: checked,
      teamLead: employeeProfile,
    };
    dispatch(loadStart());
    try {
      const response = await useAxios.post("/app/v2/004/new-task", data);
      dispatch(loadStop());
      if (response.data.code === 201) {
        Flash(
          "success",
          `Task has been Assisgned to ${employeeProfile.lastName}`,
          "Successful",
          6000
        );
        closeTaskMan();
      }
      if (response.data.code === 400) {
        Flash("error", `Failed to assisgned to task`, "Error", 3000);
        // closeTaskMan();
      }
    } catch (err) {
      Flash("error", `Server error`, "Error", 3000);
    }

    // console.log(response)
  };
  return (
    <Paper className={styles.taskPaper}>
      <AppBar
        position="static"
        style={{
          background: `linear-gradient(90deg, #15255D 0%, #040818 100%)`,
        }}
      >
        <Toolbar>
          <div className={styles.toolbar}>
            <Typography>
              Assign Task to {`${employeeProfile?.firstName}`}
            </Typography>
            <div className={styles.actions}>
              <Button onClick={() => expandHandler(!expand)}>
                <i
                  className={
                    expand
                      ? "bi bi-box-arrow-in-down-right"
                      : "bi bi-arrows-fullscreen"
                  }
                ></i>
              </Button>
              <Button onClick={() => closeTaskMan()}>
                <i className="bi bi-x-square"></i>
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={" p-4"} style={{ background: "#f7f7f7", flex: "1" }}>
        <Card className={styles.content}>
          <TextField
            label="To Start"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Select date for task to commence"
            className="mr-4 mb-4"
            name="start"
            value={input.start}
            onChange={handleInputs}
            required
          />
          <TextField
            label="Due date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Expected due date"
            className="mb-4"
            name="end"
            value={input.end}
            onChange={handleInputs}
          />
          <Divider />
          <div className="mt-4">
            <TextField
              label="Title"
              name="title"
              value={input.title}
              fullWidth
              onChange={handleInputs}
              required
            />
          </div>
          <div className="mt-4">
            <TextField
              multiline
              label="Task description"
              fullWidth
              rowsMax={expand ? 10 : 5}
              name="description"
              value={input.description}
              onChange={handleInputs}
              inputProps={{
                maxLength: 300,
              }}
              helperText={`${input.description.length} / 300`}
            />
          </div>
          <div className="mt-4">
            <FormGroup onChange={(e) => handleCheck(e)}>
              <FormControlLabel
                value="employed"
                control={<Checkbox color="primary" checked={add}/>}
                label="Add Team Member(s)"
              />
              <Typography variant="body1">
                {employees.length > 0 ? `${checked.length} Selected` : ""}
              </Typography>
            </FormGroup>
          </div>
          <div className={styles.teamList}>
            <List dense className="hhj">
              {employees.map((value, index) => {
                const labelId = `checkbox-list-secondary-label-${value._id}`;
                return (
                  <ListItem key={index} button className="mb-2">
                    <ListItemAvatar>
                      <Avatar alt={`Avatar`} src={`/static/images/avatar.jpg`}>
                        {`${value.lastName.split("")[0]} ${
                          value.firstName.split("")[0]
                        }`}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`${value.lastName} ${value.firstName}`}
                    />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                        color="primary"
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className="pb-2 bg-white">
            <div
              style={{
                background: `linear-gradient(90deg, #15255D 0%, #040818 100%)`,
                marginTop: "40px",
                position: "absolute",
                bottom: "10px",
                width: "200px",
              }}
            >
              <Button
                fullWidth
                style={{ color: "#fff" }}
                onClick={() => addTask()}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(TaskSender);
