import React from "react"
import faker from "faker"

const CommentDetail = (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"  src={props.avatar} />
        </a>
        <div className="content">
          <a href="author">{props.author}</a>
          <div className="metadata">
            <span className="date">{(new Date).toLocaleTimeString()}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    )
}

export default CommentDetail