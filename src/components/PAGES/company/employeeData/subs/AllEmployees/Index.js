import React, { useEffect } from "react";
import ReactTable from "./components/ReactDataTable";
import AddEmployeeAction from "./components/AddEmployeeAction";
import { useDispatch } from "react-redux";
import { getCompanyProfile } from "./../../../../../../redux/actions/client";


export default function Index() {
  const dispatch = useDispatch();
  // 
  useEffect(() => {
        dispatch(getCompanyProfile());
  }, [dispatch]);
  return (
    <div>
      <AddEmployeeAction />
      <ReactTable />
    </div>
  );
}
