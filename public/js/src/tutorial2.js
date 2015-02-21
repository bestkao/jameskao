var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    )
  }
})

var CommentList = React.createClass({
  render: function() {
    return (
      <div className='commentList'>
        Hello, World! I am a CommentList.
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className='commentForm'>
        Hello, World! I am a CommentForm.
      </div>
    )
  }
})

React.render(
  <CommentBox />,
  document.getElementById('content')
)
