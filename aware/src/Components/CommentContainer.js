import React from "react";
import Comment from "./Comment";
import Grid from '@material-ui/core/Grid';

class CommentContainer extends React.Component {
  
  state = {
    comments : [],
    newComment : {species_id: this.props.species_id}
  }
  componentDidMount(){
    fetch('http://localhost:4000/comments')
    .then(res => res.json())
    .then(comments => this.setState({comments})) 
  }

  handleFormChange = (e) => {
    this.setState({newComment: {...this.state.newComment, [e.target.name]:e.target.value}})
  }

  addComment = (comment) => {
		this.setState({
			comments: [...this.state.comments, comment],
		});
	};

  handlePost = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/comments',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
      },
      body: JSON.stringify(this.state.newComment)
    })
    .then(res => res.json())
    .then(comment => {this.addComment(comment)})
  }

  render() {
    let filteredComments = this.state.comments.filter(comment => comment.species_id === this.props.species_id)
    return (
      <div>
        <Grid container spacing={0} direction="row" justify="space-around" alignItems="center">
        <Grid sm ={4}>
         <form className="new-comment-form" onSubmit={this.handlePost}>
        <input type="hidden" name="species" id="species" value={this.props.species_id}></input>
        <input placeholder="Enter Name" name="name" onChange={this.handleFormChange}/> <br></br>
        <textarea placeholder="Comment" rows={10} name="content" onChange={this.handleFormChange}/> <br></br>
        <input type="submit" value="Add Comment" />
      </form>
      </Grid>
      <Grid sm ={4}>
      <div className="comments-container">
        {filteredComments.length ? 
          filteredComments.map(comment => 
            <Comment key={comment.id} name={comment.name} content={comment.content} comment={comment}/>)
        : "No comments yet!"}
      </div>
      </Grid>
      </Grid>
      </div>
    );
  }
}

export default CommentContainer;