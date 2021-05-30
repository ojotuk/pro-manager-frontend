import {
  Avatar,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Layout from "../../../../layout/company/Layout";
import Title from "../../../../PageTitle/Title";
import styles from "./styles.module.css";
import { connect, useDispatch } from "react-redux";
import { getCompanyProfile } from "./../../../../../redux/actions/client";
import { loadStart, loadStop } from "./../../../../../redux/actions/loading";
import Flash from "./../../../../../utility/Flash";
import useAxios from "./../../../../../utility/axios-token-manager/init";
import { useHistory } from "react-router";
//
function AddForm({ state }) {
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    dispatch(getCompanyProfile());
  }, [dispatch]);
  //state
  const { company } = state;
  const { employees } = company;

  // team checkbok;
  const [add, setAdd] = useState(false);
  //   const [employees, setEmployees] = useState([]);
  const handleCheck = (e) => {
    const checked = e.target.checked;
    setAdd(checked);
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
  //   inputs
  const [input, setInput] = useState({
    start: "",
    end: "",
    description: "",
    title: "",
  });
  const handleInputs = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //   team lead
  const [lead, setLead] = React.useState();
  const handleLead = (event) => {
    setLead(event.target.value);
  };
  const addTask = async () => {
    if (!input.title || !input.start)
      return Flash("error", `Field mark * are required`, "Error", 3000);
    if (checked.length<1)
      return Flash("error", `Assign atleast 1 employee to this task`, "Error", 3000);
    const data = {
      ...input,
      teams: checked,
      teamLead: lead ? JSON.parse(lead) : checked[0], //assign default lead to first person checked
    };
    dispatch(loadStart());
    try {
      const response = await useAxios.post("/app/v2/004/new-task", data);
      dispatch(loadStop());
      if (response.data.code === 201) {
        Flash(
          "success",
          `${input.title} Task has been assigned`,
          "Successful",
          6000
        );
        history.push('/task-management')
        // closeTaskMan();
      }
      if (response.data.code === 400) {
        Flash("error", `Failed to assisgned to task`, "Error", 3000);
        // closeTaskMan();
      }
    } catch (err) {
      Flash("error", `Server error`, "Error", 3000);
    }
  };
  return (
    <div>
      <Layout>
        <Title title="Add New Task" />
        <div className={styles.wrapper}>
          <div className="row">
            <div className="col-lg-6">
              <Typography className="mt-1">TO START</Typography>
              <TextField
                variant="outlined"
                type="date"
                className="mw-100"
                style={{ width: "300px" }}
                name="start"
                value={input.start}
                onChange={handleInputs}
              />
            </div>
            <div className="col-lg-6">
              <Typography className="mt-1">TO END</Typography>
              <TextField
                variant="outlined"
                type="date"
                className="mw-100"
                style={{ width: "300px" }}
                name="end"
                value={input.end}
                onChange={handleInputs}
              />
            </div>
            <div className="col-lg-12 mt-4">
              <Typography className="mt-1">TITLE</Typography>
              <TextField
                variant="outlined"
                type="text"
                fullWidth
                className="w-100"
                name="title"
                value={input.title}
                onChange={handleInputs}
              />
            </div>
            <div className="col-lg-12 mt-4">
              <Typography className="mt-1">TASK DESCRIPTION</Typography>
              <TextField
                variant="outlined"
                multiline
                rows={4}
                type="text"
                fullWidth
                className="w-100"
                name="description"
                value={input.description}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="mt-4">
            <FormGroup onChange={(e) => handleCheck(e)}>
              <FormControlLabel
                value="employed"
                control={<Checkbox color="primary" checked={add} />}
                label="Add Team Member(s)"
              />
              <Typography variant="body1">
                {employees.length > 0 && add
                  ? `${checked.length} Selected`
                  : ""}
              </Typography>
            </FormGroup>
          </div>
          <div className={styles.teamList}>
            {add ? (
              <List dense className="emp-list">
                {employees.map((value, index) => {
                  const labelId = `checkbox-list-secondary-label-${value._id}`;
                  return (
                    <ListItem key={index} button className="mb-2">
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar`}
                          src={`/static/images/avatar.jpg`}
                        >
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
                        {/* <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                          color="primary"
                        /> */}
                        <FormGroup
                          //    onChange={(e) => handleCheck(e)}
                          row
                        >
                          <RadioGroup
                            aria-label="lead"
                            name="lead"
                            value={lead}
                            onChange={handleLead}
                          >
                            <FormControlLabel
                              value={JSON.stringify(value)}
                              control={
                                <Radio
                                  checked={lead === JSON.stringify(value)}
                                />
                              }
                              label="TL"
                            />
                          </RadioGroup>
                          <FormControlLabel
                            label="Member"
                            control={
                              <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ "aria-labelledby": labelId }}
                                color="primary"
                                className="ml-2"
                              />
                            }
                          />
                        </FormGroup>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              ""
            )}
          </div>
          <div className="pb-2 bg-white">
            <div
              style={{
                background: `linear-gradient(90deg, #15255D 0%, #040818 100%)`,
                marginTop: "40px",
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
        </div>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(AddForm);
