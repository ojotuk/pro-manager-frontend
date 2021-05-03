import React from "react";
import task from "./../../../asset/img/Add tasks-pana 1.png";
import quiting from "./../../../asset/img/Quitting a job-pana 1.png";
import invoice from "./../../../asset/img/Invoice-cuate 1.png";
import hunt from "./../../../asset/img/Job hunt-pana 1.png";
import bgImg from "./../../../asset/img/Group 41 (1).png";
import "./feature.css";

//
export default function Features() {
  return (
    <div className="container">
      <h3 className="section-caption">
        Take advantage of every feature Pro manager has to offer
      </h3>
      <div className="features-l-r row">
        <div className="feature-bg col-lg-6 col-sm-12">
          <img src={hunt} className="img-caption"  alt='brand'/>
          <img src={bgImg} className="bg"  alt='brand'/>
        </div>
        <div className="col-lg-6 col-sm-12 feature-description">
          <h4 className="feature-caption">Attendance management </h4>
          <p className="feature-text">
            Reduce errors in pay checks by linking this to leave, payroll and
            accounting systems. Track attendance of employees along with
            full-day and half-day leaves. Manage shifts, time clock, and
            functionality of both onsite and remote employees. Keep track of
            mandotary rest breaks and meetings.{" "}
          </p>
        </div>
      </div>
      <div className="features-l-r row feature-r-l">
        <div className="col-lg-6 col-sm-12 feature-description">
          <h4 className="feature-caption">Leave management</h4>
          <p className="feature-text">
            Automate granting, requesting, validating, tracking and managing any
            absence from work. Streamline request and approval processes.
            Incorporate leaves in the team calendar. Prioritize leave requests
            on the basis of their reasons (health, legal, duty, vacation).
            Integrate with workforce management, time and attendance systems.
          </p>
        </div>
        <div className="feature-bg col-lg-6 col-sm-12">
          <img src={quiting} className="img-caption"  alt='brand'/>
          <img src={bgImg} className="bg" alt='brand' />
        </div>
      </div>
      <div className="features-l-r row">
        <div className="feature-bg col-lg-6 col-sm-12" alt='brand'>
          <img src={invoice} className="img-caption" alt='invoice'/>
          <img src={bgImg} className="bg" alt='brand' />
        </div>
        <div className="col-lg-6 col-sm-12 feature-description">
          <h4 className="feature-caption">Payroll management</h4>
          <p className="feature-text">
            Get timely information of the employees to make instant decisions.
            Tend to employee benefits, healthcare, and pension/welfare packages.
            Provide online enrollment and automate communication and
            information.
          </p>
        </div>
      </div>
      <div className="features-l-r row feature-r-l">
        <div className="col-lg-6 col-sm-12 feature-description">
          <h4 className="feature-caption">Performace management</h4>
          <p className="feature-text">
            Track all round performance feedback. Schedule promotions and talent
            management events. Align job standards, frameworks for competence,
            and other relevant systems. Automate and schedule appraisal
            processes and meetings.
          </p>
        </div>
        <div className="feature-bg col-lg-6 col-sm-12">
          <img src={task} className="img-caption" alt='brand' />
          <img src={bgImg} className="bg"  alt='brand' />
        </div>
      </div>
    </div>
  );
}
