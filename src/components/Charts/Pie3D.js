import { Chart } from "react-google-charts";
import React, { useEffect ,useState} from "react";
import {connect} from 'react-redux'


// 
function Pie3D({profile}) {
    const {task} = profile;
    const [value,setValue] = useState(task ? task :[])
    const [stat,setStat] = useState({complete:0,inComplete:0});

    
    // console.log(completedTask(), inComplete())

    useEffect(()=>{
        setValue(task)
    },[task])
    useEffect(()=>{
      const completedTask = ()=>{
        let cnt = 0;
        if(value){
            for (const item of value) {
                if(item.progress===100){
                    cnt=cnt+1
                };
            }
            return cnt
        }
    }
    const inComplete = ()=>{
        if(value){
            return value.length - completedTask()
        }
    }
        setStat({...stat,complete:completedTask(),inComplete:inComplete()})
    },[value,stat])
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Progress"],
          ["Incomplete", stat.inComplete],
          ["Completed", 2],
        ]}
        options={{
          title: "My Task Overview",
          // Just add this option
          is3D: true,
          slices: {
            1: { offset: 0.1 },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      profile: state.employee,
    };
  };

  export default connect(mapStateToProps)(Pie3D);

