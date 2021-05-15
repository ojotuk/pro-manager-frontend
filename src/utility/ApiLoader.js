import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {connect} from "react-redux"


// 
const ApiLoader = ({ loading }) => {
  //other logic
  const styles = {
    wraperr: {
      position: "fixed",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,.2)",
      zIndex:"2000"
    },
  };
  return (
    <>
      {loading.isLoading ? (
        <div style={styles.wraperr}>
          <Loader
            type="BallTriangle"
            color="#38efc3"
            height={100}
            width={100}
            //   timeout={10000} //3 secs
          />
        </div>
      ) : null}
    </>
  );
};

function mapStateToProps(state) {
  const { loading } = state
  return { loading }
}

export default connect(mapStateToProps)(ApiLoader);
