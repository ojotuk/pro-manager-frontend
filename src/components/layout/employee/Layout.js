import { useEffect, useState } from "react";
import { useDispatch,connect } from "react-redux";
import { signUOutCompany } from "../../../redux/actions/auth";
import "./../../../asset/css/side-bar.css";
import { Link } from "react-router-dom";
// import classnames from 'classnames'
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";

import styles from "./Layout.module.css";
import logo from "./../../../logo.svg";
import { Avatar } from "@material-ui/core";
import {getMyProfile} from './../../../redux/actions/employee';

//
function Layout({ children, profile }) {
// console.log(profile)
  const dispatch = useDispatch()
  // 
  const [navCollapse, setNavCollapse] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  // 
  const path = window.location.pathname;
  // 
useEffect(()=>{
//  limit axios call on navigation
  if(profile.reload){
    dispatch(getMyProfile())
  }

},[profile.reload,dispatch])
  
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
            <img src={logo} alt="brand" />
            <Menu>
              <MenuItem>Pro manager</MenuItem>
            </Menu>
          </div>
          <Menu>
            <MenuItem onClick={() => setNavCollapse(!navCollapse)}>
              <div className={styles.toggleCollapse}>
                <i
                  className={
                    navCollapse
                      ? "bi bi-box-arrow-in-right"
                      : "bi bi-box-arrow-in-left"
                  }
                ></i>
              </div>
            </MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M24 19V4C24 3.20435 23.6839 2.44129 23.1213 1.87868C22.5587 1.31607 21.7956 1 21 1H3C2.20435 1 1.44129 1.31607 0.87868 1.87868C0.31607 2.44129 0 3.20435 0 4L0 19H11V21H6V23H18V21H13V19H24ZM3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V13H2V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM2 15H22V17H2V15Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            >
              <Link to="/005/console" style={{ color: "#fff" }}>
                Dashboard
              </Link>
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem
              icon={
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 12.5H14V15.5H11.5V18H8.5V15.5H6V12.5H8.5V10H11.5V12.5ZM20 5.879V24H0V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L14.121 0L20 5.879ZM17 21V8H12V3H3V21H17Z" fill="white"/>
                </svg>
              }
              className={path==="/005/task" ? "active-nav":""}
            >
              <Link to="/005/task" style={{ color: "#fff" }}>
                Tasks
              </Link>
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.31607 22.5587 0 21.7956 0 21L0 0H2V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H24V24Z"
                    fill="white"
                  />
                  <path d="M16 11H14V20H16V11Z" fill="white" />
                  <path d="M8 11H6V20H8V11Z" fill="white" />
                  <path d="M20 6H18V20H20V6Z" fill="white" />
                  <path d="M12 6H10V20H12V6Z" fill="white" />
                </svg>
              }
              className={path==="/005/attendance" ? "active-nav":""}
            >
              <Link to="/005/attendance" style={{ color: "#fff" }}>
                Attendance
              </Link>
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 0H13V2H20.586L0 22.586L1.414 24L22 3.414V11H24V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0V0Z"
                    fill="white"
                  />
                  <path
                    d="M6 10C6.79113 10 7.56448 9.7654 8.22228 9.32588C8.88008 8.88635 9.39277 8.26164 9.69552 7.53073C9.99827 6.79983 10.0775 5.99556 9.92314 5.21964C9.7688 4.44371 9.38784 3.73098 8.82843 3.17157C8.26902 2.61216 7.55629 2.2312 6.78036 2.07686C6.00444 1.92252 5.20017 2.00173 4.46927 2.30448C3.73836 2.60723 3.11365 3.11992 2.67412 3.77772C2.2346 4.43552 2 5.20887 2 6C2 7.06087 2.42143 8.07828 3.17157 8.82843C3.92172 9.57857 4.93913 10 6 10ZM6 4C6.39556 4 6.78224 4.1173 7.11114 4.33706C7.44004 4.55682 7.69638 4.86918 7.84776 5.23463C7.99913 5.60009 8.03874 6.00222 7.96157 6.39018C7.8844 6.77814 7.69392 7.13451 7.41421 7.41421C7.13451 7.69392 6.77814 7.8844 6.39018 7.96157C6.00222 8.03874 5.60009 7.99913 5.23463 7.84776C4.86918 7.69638 4.55682 7.44004 4.33706 7.11114C4.1173 6.78224 4 6.39556 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                    fill="white"
                  />
                  <path
                    d="M18 14C17.2089 14 16.4355 14.2346 15.7777 14.6741C15.1199 15.1136 14.6072 15.7384 14.3045 16.4693C14.0017 17.2002 13.9225 18.0044 14.0769 18.7804C14.2312 19.5563 14.6122 20.269 15.1716 20.8284C15.731 21.3878 16.4437 21.7688 17.2196 21.9231C17.9956 22.0775 18.7998 21.9983 19.5307 21.6955C20.2616 21.3928 20.8864 20.8801 21.3259 20.2223C21.7654 19.5645 22 18.7911 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14ZM18 20C17.6044 20 17.2178 19.8827 16.8889 19.6629C16.56 19.4432 16.3036 19.1308 16.1522 18.7654C16.0009 18.3999 15.9613 17.9978 16.0384 17.6098C16.1156 17.2219 16.3061 16.8655 16.5858 16.5858C16.8655 16.3061 17.2219 16.1156 17.6098 16.0384C17.9978 15.9613 18.3999 16.0009 18.7654 16.1522C19.1308 16.3036 19.4432 16.56 19.6629 16.8889C19.8827 17.2178 20 17.6044 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20Z"
                    fill="white"
                  />
                </svg>
              }
              className={path==="/005/salary" ? "active-nav":""}
            >
              <Link to="/005/salary" style={{ color: "#fff" }}>
                Salary & Benefit
              </Link>
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M19.828 3.414L17.586 1.172C17.2154 0.799307 16.7745 0.503824 16.2889 0.302651C15.8033 0.101478 15.2826 -0.00139093 14.757 -1.36689e-06H6C5.20435 -1.36689e-06 4.44129 0.316069 3.87868 0.878678C3.31607 1.44129 3 2.20435 3 3V24H21V6.242C20.9974 5.1817 20.5762 4.16533 19.828 3.414ZM18.414 4.828C18.4643 4.88256 18.5114 4.93999 18.555 5H16V2.445C16.06 2.48864 16.1174 2.53572 16.172 2.586L18.414 4.828ZM5 22V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2H14V7H19V22H5ZM7 16H17V10H7V16ZM9 12H15V14H9V12ZM7 18H17V20H7V18Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              className={path==="/005/leaves" ? "active-nav":""}
            >
              <Link to="/005/leaves" style={{ color: "#fff" }}>
                Leave & Holidays
              </Link>
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 2H18V0H16V2H8V0H6V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.31607 3.44129 0 4.20435 0 5L0 24H24V5C24 4.20435 23.6839 3.44129 23.1213 2.87868C22.5587 2.31607 21.7956 2 21 2ZM2 5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H21C21.2652 4 21.5196 4.10536 21.7071 4.29289C21.8946 4.48043 22 4.73478 22 5V8H2V5ZM2 22V10H22V22H2Z"
                    fill="white"
                  />
                  <path d="M17 13H15V15H17V13Z" fill="white" />
                  <path d="M13 13H11V15H13V13Z" fill="white" />
                  <path d="M9 13H7V15H9V13Z" fill="white" />
                  <path d="M17 17H15V19H17V17Z" fill="white" />
                  <path d="M13 17H11V19H13V17Z" fill="white" />
                  <path d="M9 17H7V19H9V17Z" fill="white" />
                </svg>
              }
              className={path==="/005/calendar" ? "active-nav":""}
            >
              <Link to="/005/calendar" style={{ color: "#fff" }}>
                Calender
              </Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <MenuItem onClick={() => dispatch(signUOutCompany())}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
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
              <a href="/sign-in">Log Out</a>
            </MenuItem>
          </Menu>
          <br></br>
          <div style={{ fontSize: "14px" }} className="pl-4 mb-4">
            &copy; Stutern 0.9 (8)
          </div>
        </SidebarFooter>
      </ProSidebar>
    );
  };

  const ToolBar = () => {
    return (
      <div className={styles.toolBar}>
        <div className="container-fluid">
          <div className={styles.togglers}>
            <span onClick={() => setNavToggle(!navToggle)}>
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </span>
          </div>
          <div className={styles.panels}>
            <div className={styles.search}>
              <div className={styles.svgWrapper}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.032 22.618L17.77 16.356C19.3966 14.3666 20.1964 11.8281 20.0039 9.26557C19.8113 6.70304 18.6412 4.31254 16.7356 2.58853C14.83 0.864519 12.3346 -0.0610992 9.76565 0.00313259C7.1967 0.0673644 4.75071 1.11653 2.93362 2.93362C1.11653 4.75071 0.0673644 7.1967 0.00313259 9.76565C-0.0610992 12.3346 0.864519 14.83 2.58853 16.7356C4.31254 18.6412 6.70304 19.8113 9.26557 20.0039C11.8281 20.1964 14.3666 19.3966 16.356 17.77L22.618 24.032L24.032 22.618ZM10.032 18.032C8.44976 18.032 6.90304 17.5628 5.58745 16.6838C4.27185 15.8047 3.24647 14.5553 2.64097 13.0935C2.03547 11.6317 1.87704 10.0231 2.18573 8.47129C2.49441 6.91944 3.25633 5.49397 4.37515 4.37515C5.49397 3.25633 6.91944 2.49441 8.47129 2.18573C10.0231 1.87704 11.6317 2.03547 13.0935 2.64097C14.5553 3.24647 15.8047 4.27185 16.6838 5.58745C17.5628 6.90304 18.032 8.44976 18.032 10.032C18.0296 12.153 17.186 14.1865 15.6862 15.6862C14.1865 17.186 12.153 18.0296 10.032 18.032Z"
                    fill="#374957"
                  />
                </svg>
              </div>
              <input />
            </div>
            <div className={styles.panelRight}>
              <ul className={styles.ul}>
                <li className={styles.adminNotify}>
                  <svg
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7653 16.2041L20.1653 6.83308C19.6101 4.8285 18.4003 3.06722 16.7285 1.82957C15.0568 0.591911 13.0191 -0.0509976 10.9397 0.00316203C8.86039 0.0573217 6.85892 0.805437 5.25385 2.12844C3.64878 3.45145 2.53235 5.27331 2.08226 7.30408L0.0712631 16.3541C-0.0260442 16.7925 -0.0236707 17.2472 0.0782085 17.6846C0.180088 18.122 0.378873 18.531 0.659898 18.8813C0.940923 19.2316 1.29702 19.5144 1.70191 19.7087C2.1068 19.903 2.55015 20.004 2.99926 20.0041H6.60626C6.83578 21.1344 7.44899 22.1506 8.342 22.8805C9.23502 23.6104 10.3529 24.0091 11.5063 24.0091C12.6596 24.0091 13.7775 23.6104 14.6705 22.8805C15.5635 22.1506 16.1767 21.1344 16.4063 20.0041H19.8763C20.3384 20.0039 20.7942 19.8969 21.2081 19.6915C21.6221 19.4862 21.983 19.1879 22.2628 18.8201C22.5425 18.4523 22.7335 18.0248 22.8208 17.5711C22.9082 17.1173 22.8895 16.6495 22.7663 16.2041H22.7653ZM11.5063 22.0041C10.888 22.0015 10.2856 21.808 9.78156 21.45C9.27749 21.092 8.89635 20.587 8.69026 20.0041H14.3223C14.1162 20.587 13.735 21.092 13.231 21.45C12.7269 21.808 12.1245 22.0015 11.5063 22.0041ZM20.6713 17.6091C20.578 17.7328 20.457 17.8329 20.3181 17.9015C20.1792 17.9701 20.0262 18.0052 19.8713 18.0041H2.99926C2.84952 18.0041 2.7017 17.9704 2.56671 17.9056C2.43172 17.8408 2.313 17.7465 2.21932 17.6297C2.12564 17.5129 2.05938 17.3765 2.02545 17.2307C1.99152 17.0849 1.99077 16.9332 2.02326 16.7871L4.03426 7.73708C4.38862 6.14328 5.26557 4.71368 6.52572 3.67553C7.78587 2.63737 9.35689 2.05025 10.989 2.00749C12.6212 1.96473 14.2208 2.4688 15.5336 3.43955C16.8463 4.4103 17.7969 5.79202 18.2343 7.36508L20.8343 16.7361C20.8767 16.8843 20.8841 17.0403 20.8558 17.1918C20.8275 17.3433 20.7643 17.4862 20.6713 17.6091Z"
                      fill="#374957"
                    />
                  </svg>
                  <sup>4</sup>
                  {/* <Notifications /> */}
                </li>
                <li className={styles.adminChat}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C23.9966 15.1815 22.7312 18.2318 20.4815 20.4815C18.2318 22.7312 15.1815 23.9966 12 24ZM12 2.00001C10.0222 2.00001 8.08879 2.5865 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80689 19.0679 4.93215C17.1931 3.05742 14.6513 2.00292 12 2.00001Z"
                        fill="#374957"
                      />
                      <path
                        d="M13 15H11V14.257C10.9852 13.5514 11.1596 12.8547 11.5049 12.2393C11.8503 11.6238 12.3541 11.112 12.964 10.757C13.3335 10.5535 13.6291 10.2384 13.8088 9.85672C13.9884 9.47506 14.0427 9.04639 13.964 8.63199C13.8861 8.23719 13.6922 7.87458 13.4072 7.59048C13.1223 7.30637 12.759 7.11367 12.364 7.03699C12.0757 6.98363 11.7792 6.9943 11.4955 7.06825C11.2118 7.1422 10.9479 7.27761 10.7223 7.4649C10.4968 7.6522 10.3151 7.88679 10.1903 8.15206C10.0655 8.41734 10.0005 8.70681 10 8.99999H8C8.00025 8.29449 8.18709 7.60162 8.54155 6.99164C8.89602 6.38166 9.40552 5.87628 10.0183 5.52677C10.6312 5.17726 11.3256 4.99605 12.031 5.00152C12.7365 5.007 13.428 5.19895 14.0353 5.55793C14.6426 5.9169 15.1442 6.43012 15.4892 7.04552C15.8342 7.66093 16.0102 8.35662 15.9995 9.06203C15.9888 9.76744 15.7918 10.4575 15.4283 11.0621C15.0649 11.6668 14.5479 12.1646 13.93 12.505C13.6347 12.6896 13.3933 12.9487 13.2301 13.2563C13.0668 13.5638 12.9875 13.909 13 14.257V15Z"
                        fill="#374957"
                      />
                      <path d="M13 17H11V19H13V17Z" fill="#374957" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {/* <Messages /> */}
                </li>
                <li className={styles.adminPaneDrop}>
                  <span className='mr-2'>{profile?.lastName}</span>
                  <Avatar>AM</Avatar>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0005 16C11.3375 16.0004 10.7016 15.7374 10.2325 15.269L4.93945 9.975L7.06145 7.854L12.0005 12.793L16.9395 7.854L19.0615 9.975L13.7685 15.268C13.5363 15.5001 13.2606 15.6843 12.9573 15.8099C12.6539 15.9355 12.3288 16.0001 12.0005 16Z"
                      fill="#374957"
                    />
                  </svg>

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


const mapStateToProps = (state)=>{

  return{
    profile:state.employee
  }
}

export default connect(mapStateToProps)(Layout)

