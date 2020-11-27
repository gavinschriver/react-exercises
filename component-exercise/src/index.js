import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const Message = (props) => {
  return (
    <div className="ui message">
      {props.header}
      {props.text}
    </div>
  )
}

const Segment = (props) => {
  return (
    <div className="ui placeholder segment">
      {props.children}
    </div>
  )
}



const App = () => {

  return (
    <div className="ui container comments">
      <Message header={<div className="header">Changes In Service</div>} text={<p>We're changing the game. Lookout.</p>} />
      <ApprovalCard>
        "CHECK MY STYLE"
        <CommentDetail
          author="sammy"
          avatar={faker.image.animals()}
          content="tought"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="jammy"
          avatar={faker.image.animals()}
          content="its sweet"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="fimmy"
          avatar={faker.image.sports()}
          content="NOICE BURH"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
