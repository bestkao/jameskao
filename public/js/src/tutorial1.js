var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        Hello, World! I am a CommentBox.
      </div>
    )
  }
})

React.render(
  <CommentBox />,
  document.getElementById('content')
)
