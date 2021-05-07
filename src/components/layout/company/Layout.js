import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUOutCompany } from "../../../redux/actions/auth";
import "./../../../asset/css/side-bar.css";
// import classnames from 'classnames'
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import styles from "./Layout.module.css";
import logo from "./../../../logo.svg";





// 
export default function Layout({ children }) {
  const [navCollapse, setNavCollapse] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
const dispatch= useDispatch()
  const SideBar = ({ collapsed }) => {
    return (
      // <div style={{position:'fixed', height:'100vh'}}>
      <ProSidebar
        collapsed={collapsed}
        toggled={navToggle}
        breakPoint="md"
        onToggle={() => setNavToggle(false)}
      >
        <SidebarHeader>
          <div className={styles.sideBarHeader}>
            <img src={logo} alt='brand' />
            <Menu>
            <MenuItem>Pro manager</MenuItem>
            </Menu>
          </div>
          <Menu>
          <MenuItem onClick={() => setNavCollapse(!navCollapse)}>
          <i
              className={
                navCollapse
                  ? "bi bi-box-arrow-in-right"
                  : "bi bi-box-arrow-in-left"
              }
            ></i>
          </MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <SubMenu
              title="Employees"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>Add Employee</MenuItem>
              <MenuItem>Manage Employees</MenuItem>
              <MenuItem>Permissions</MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <SubMenu
              title="Accounts"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>Estimate</MenuItem>
              <MenuItem>Invoice</MenuItem>
            </SubMenu>
            <SubMenu
              title="Payroll"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>Employee Salary</MenuItem>
              <MenuItem>Payslip</MenuItem>
              <MenuItem>Payments</MenuItem>
            </SubMenu>
            <SubMenu
              title="Reports"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>Expense Report</MenuItem>
              <MenuItem>Invoice Report</MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <SubMenu
              title="Leave"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>View Application</MenuItem>
              <MenuItem>Leave Settings</MenuItem>
            </SubMenu>
            <SubMenu
              title="Task"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>Assign Task</MenuItem>
              <MenuItem>Manage Task</MenuItem>
            </SubMenu>
            <SubMenu
              title="Attendance"
              icon={<i className="bi bi-card-heading"></i>}
            >
              <MenuItem>View Chart</MenuItem>
              <MenuItem>Settings</MenuItem>

            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <MenuItem onClick={()=>dispatch(signUOutCompany())}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='mr-4'
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M3 3H8V0H3C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H8V21H3V3Z"
                    fill="white"
                  />
                  <path
                    d="M23.9998 13.5V10.5L9.3088 10.526L12.7738 7.061L10.6498 4.939L6.0648 9.52499C5.73976 9.85 5.48192 10.2359 5.30601 10.6605C5.13009 11.0852 5.03955 11.5403 5.03955 12C5.03955 12.4597 5.13009 12.9148 5.30601 13.3395C5.48192 13.7641 5.73976 14.15 6.0648 14.475L10.6498 19.061L12.7708 16.939L9.3588 13.526L23.9998 13.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Log Out
            </MenuItem>
          </Menu>
          <br></br>
          <div style={{fontSize:'14px'}} className='pl-4 mb-4'>&copy; Stutern 0.9 (8)</div>
        </SidebarFooter>
      </ProSidebar>
    );
  };

  const ToolBar = () => {
   
    return (
      <div className={styles.toolBar}>
        <div className="container">
          <div className={styles.togglers}>
            <span onClick={() => setNavToggle(!navToggle)}>
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </span>
          </div>
          <div className={styles.panels}>
            <div className={styles.panelRight} >
              <ul className={styles.ul}>
                <li className={styles.adminNotify}>
                  <i className="bi bi-bell"></i>
                  <sup>4</sup>
                  {/* <Notifications /> */}
                </li>
                <li className={styles.adminChat}>
                  <i className="bi bi-chat-text"></i>
                  <sup>4</sup>
                  {/* <Messages /> */}
                </li>
                <li className={styles.adminPaneDrop}>
                  <i className="bi bi-person-circle"></i>
                  <span>Admin</span>
                  {/* <AdminMenu /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className={styles.layout}>
        <div className={styles.sideWrapper}>
          <SideBar collapsed={navCollapse} />
        </div>
        <div className={styles.views}>
          <ToolBar />
          <div className={styles.layoutChildren}>{children}</div>
        </div>
      </section>
    </>
  );
}
