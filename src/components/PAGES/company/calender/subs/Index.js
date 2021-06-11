import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { connect } from "react-redux";

const localizer = momentLocalizer(moment);


const MyCalendar = ({myEvents}) =>{ 
// console.log(myEvents)
return (
  <div>
    <Calendar
      localizer={localizer}
      events={myEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
      selectable
      onSelectSlot={(e)=>console.log(e)}
      />
  </div>
);
}



const mapStateToProps=(state)=>{
  const leaves=state.company.leaves;
  const tasks=state.company.tasks;

  const myEvents=[];
  for (const i of tasks) {
    let event={};
    event.start=i.start;
    event.end=i.end;
    event.title=<div><i className='bi bi-list-task mr-2'></i>{i.title}</div>;
    event.allDay=true;
    myEvents.push(event)
  }
  const approved=leaves.filter(item=>item.status==="APPROVED")
  for (const i of approved) {
    let event={};
    event.start=i.commence;
    event.end=i.ends;
    event.title=<div><i className='bi bi-arrow-up-right-square mr-2'></i><span>{i.applicant.firstName} {i.applicant.lastName} ({i.type})</span></div>;
    event.allDay=true;
    myEvents.push(event)
}
  return{
    leaves:state.company.leaves,
    tasks:state.company.tasks,
    attendances:state.company.attendances,
    myEvents:[...myEvents]
  }
}

export default connect(mapStateToProps)(MyCalendar)
