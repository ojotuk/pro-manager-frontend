import React from "react";
import { useSelector } from "react-redux";

//
export default function CardDisplay({ title }) {
  const company = useSelector((state) => state.company);
  const { employeeProfile } = company;

  const displayController = ()=>{
      switch (title) {
          case "Basic Info":
             return <BasicInfo employeeProfile={employeeProfile} />;
            case "Contact Info":
                return <ContactInfo employeeProfile={employeeProfile}/>;
            case "Address Info":
                return <HomeAddress employeeProfile={employeeProfile}/>
            case "Emergency Contact":
                return <EmergencyContact employeeProfile={employeeProfile}/>
          default:
              break;
      }
  }
  return (
    <div className="info-container">
      {displayController()}
    </div>
  );
}

const BasicInfo = ({ employeeProfile }) => {
  const data = [
    {
      label: "Legal Name",
      value: `${employeeProfile?.firstName} ${employeeProfile?.lastName}`,
    },
    {
      label: "Preferred First Name",
      value: `${employeeProfile?.firstName}`,
    },
    {
      label: "Gender",
      value: employeeProfile?.gender,
    },
    {
      label: "Date of Birth",
      value: employeeProfile?.dob,
    },
  ];
  return (
      <>
      <div
  className="p-4"
  style={{ borderBottom: "thin solid black", backgroundColor: "#fff" }}
>
  <h6 className="mb-0 title">Basic Info</h6>
</div>
    <div className="card mt-0">
      {data.map((item, index) => (
        <div className="row mb-4" key={index}>
          <div className="col-lg-4 key">{item.label}</div>
          <div className="col-lg-8 value">{item.value}</div>
        </div>
      ))}
    </div>
    </>
  );
};
const ContactInfo = ({ employeeProfile }) => {
  const data = [
    {
      label: "Phone",
      value: `${employeeProfile?.phone}`,
    },
    {
      label: "Email",
      value: `${employeeProfile?.email}`,
    },
    {
      label: "Work Phone",
      value: employeeProfile?.workPhone,
    },
    {
      label: "Work Email",
      value: employeeProfile?.workEmail,
    },
  ];
  return (
      <>
      <div
  className="p-4"
  style={{ borderBottom: "thin solid black", backgroundColor: "#fff" }}
>
  <h6 className="mb-0 title">Contact Info</h6>
</div>
    <div className="card mt-0">
      {data.map((item, index) => (
        <div className="row mb-4" key={index}>
          <div className="col-lg-4 key">{item.label}</div>
          <div className="col-lg-8 value">{item.value}</div>
        </div>
      ))}
    </div>
    </>
  );
};


const HomeAddress=({employeeProfile})=>{
    const data = [
        {
          label: "Home Address",
          value: `${employeeProfile?.phone}`,
        },
      ];
    return(
        <>
        <div
    className="p-4"
    style={{ borderBottom: "thin solid black", backgroundColor: "#fff" }}
  >
    <h6 className="mb-0 title">Address Info</h6>
  </div>
      <div className="card mt-0">
        {data.map((item, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-lg-4 key">{item.label}</div>
            <div className="col-lg-8 value">{item.value}</div>
          </div>
        ))}
      </div>
      </>
    )
}
const EmergencyContact=({employeeProfile})=>{
    const data = [
        {
          label: "Primary contact",
          value: `${employeeProfile?.phone}`,
        },
        {
          label: "Secondary contact",
          value: `${employeeProfile?.phone}`,
        },
      ];
    return(
        <>
        <div
    className="p-4"
    style={{ borderBottom: "thin solid black", backgroundColor: "#fff" }}
  >
    <h6 className="mb-0 title">Emergency Contact Info</h6>
  </div>
      <div className="card mt-0">
        {data.map((item, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-lg-4 key">{item.label}</div>
            <div className="col-lg-8 value">{item.value}</div>
          </div>
        ))}
      </div>
      </>
    )
}

