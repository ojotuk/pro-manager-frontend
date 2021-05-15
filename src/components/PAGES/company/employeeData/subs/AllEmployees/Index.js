import React, { useEffect } from "react";
import ReactTable from "./components/ReactDataTable";
import AddEmployeeAction from "./components/AddEmployeeAction";
import useAxios from "../../../../../../utility/axios-token-manager/init";
import { useDispatch } from "react-redux";
import { getCompanyProfile } from "./../../../../../../redux/actions/client";
import { loadStart, loadStop } from "./../../../../../../redux/actions/loading";

export default function Index() {
  const dispatch = useDispatch();

  // 
  useEffect(() => {
    const getEmployees = async () => {
      dispatch(loadStart());
      const response = await useAxios.get("/app/v2/004/all-employees");
      if (response.data.code === 200) {
        dispatch(loadStop());
        dispatch(getCompanyProfile(response.data.client));
      } else {
        dispatch(loadStop());
      }
    };
    getEmployees();
  }, [dispatch]);
  return (
    <div>
      <AddEmployeeAction />
      <ReactTable />
    </div>
  );
}
