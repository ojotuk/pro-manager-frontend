import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Layout from "./../../../layout/company/Layout";
import PageTitle from "./../../../PageTitle/Title";
import {
  getCompanyProfile,
  getAttendance,
  getLeaves,
} from "./../../../../redux/actions/client";
import { Card, TextField, Typography } from "@material-ui/core";
import ReactDataTableTask from "./subs/ReactDataTableTask";
import { Link } from "react-router-dom";
import CustomBtn from "./../../../Button/Button";
import useAxios from "../../../../utility/axios-token-manager/init";

function Index() {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(getCompanyProfile());
    dispatch(getLeaves());
    dispatch(getAttendance());
  }, [dispatch]);
  const [post, setPost] = useState("");
  const handleChange = (e) => {
    setPost(e.target.value);
  };
  const handlePost = async () => {
    const response = await useAxios.post("/app/v2/004/announcement/add", {
      post: post,
    });

    console.log(response.data);
  };

  return (
    <>
      <Layout>
        <div>
          <PageTitle title="Dashboard " />
        </div>
        <br></br>
        <Typography>Welcome</Typography>
        <div className="bg-white mt-3">
          <div className="row w-80">
            <div className="col-lg-8">
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="Post an announcement"
                value={post}
                onChange={handleChange}
              ></TextField>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-end">
              <CustomBtn text="Create Post" onClick={handlePost} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <ReactDataTableTask />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-end">
            <Typography className="mb-2">Today's Statistic</Typography>
            <Card className="p-4 mb-4 stat-card">
              <div className="row">
                <div className="col-lg-6">
                  <Typography variant="h3">3/45</Typography>
                </div>
                <div className="col-lg-6">
                  <Typography>Checked in</Typography>
                  <Link to="/employee-attendance-leave">View all</Link>
                </div>
              </div>
            </Card>
            <Card className="p-4 stat-card">
              <div className="row">
                <div className="col-lg-6">
                  <Typography variant="h3">4</Typography>
                </div>
                <div className="col-lg-6">
                  <Typography>Leave Request</Typography>
                  <Link to="/employee-attendance-leave">View all</Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}

function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps)(Index);
