import React from "react";

class Comment extends React.Component {
 
  
render() {
    return (
    <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.content}</p> 
        <hr></hr>
    </div>
    );
}

}

export default Comment;