import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { connect } from "react-redux";
import moment from "moment";
import { Typography } from "@material-ui/core";

const Timeline = ({ memo }) => {
  // console.log(memo);
  const [memos, setMemos] = useState(memo);
  useEffect(() => {
    setMemos(memo);
  }, [memo]);
  const dateFormater = (str) => {
    const date = new Date(str);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const items = memos.map((item) => {
    let it = {
      title: dateFormater(item.date),
      cardTitle: `${item.location}`,
      cardSubtitle: `${item.title}`,
      cardDetailedText: ` ${moment(item.date).fromNow()} : ${item.note}`,
    };
    return it;
  });

  return (
    <>
      <Typography className="mb-4" variant="body1">
        Previous Logs
      </Typography>

      <div style={{ height: "600px" }}>
        <Chrono
          items={items}
          allowDynamicUpdate
          scrollable
          slideItemDuration={5000}
          mode="VERTICAL"
          slideShow={true}
          theme={{ primary: "#060B20", secondary: "#38EFC3" }}
        />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const memo = state.company.memo;
  return { memo };
}

export default connect(mapStateToProps)(Timeline);

// const items = [
//   {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardSubtitle:
//       "Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText:
//       "Men of the British Expeditionary Force (BEF) wade out to..",
//     // media: {
//     //   type: "IMAGE",
//     //   source: {
//     //     url: "http://someurl/image.jpg"
//     //   }
//     // }
//   },
//   {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardSubtitle:
//       "Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText:
//       "Men of the British Expeditionary Force (BEF) wade out to..",
//     // media: {
//     //   type: "IMAGE",
//     //   source: {
//     //     url: "http://someurl/image.jpg"
//     //   }
//     // }
//   },
//   {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardSubtitle:
//       "Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText:
//       "Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg",
//       },
//     },
//   },
// ];
