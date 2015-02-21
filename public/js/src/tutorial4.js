var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
})

var CommentList = React.createClass({
  render: function() {
    return (
      <div className='commentList'>
        <Comment author='James Kao'>This is one comment</Comment>
        <Comment author='Ray Kurzweil'>This is one *another* comment</Comment>
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
