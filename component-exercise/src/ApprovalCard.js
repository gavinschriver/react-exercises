import React from "react";

const ApprovalCard = (props) => {
    console.log(props)
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic green button">Reject</div>
                </div>
            </div>
      </div>

  );
};

export default ApprovalCard;


    // <div id="approvalCard">
    //   {props.children}
    //   <div id={`approvalCardButtons`}>
    //     <button
    //       onClick={() =>
    //         (document.getElementById(`approvalCardButtons`).innerHTML = "")
    //       }
    //     >
    //       Approve
    //     </button>
    //     <button
    //       onClick={() =>
    //         (document.getElementById(`approvalCard`).innerHTML = "")
    //       }
    //     >
    //       Reject
    //     </button>
    //   </div>
    // </div>