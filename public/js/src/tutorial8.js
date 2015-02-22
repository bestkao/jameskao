var converter = new Showdown.converter()

var data = [
  {author: 'James Kao', text: 'This is one comment'},
  {author: 'Ray Kruzweil', text: 'This is *another comment'}
]

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
        <Comment author='Peter Thiel'>This is *another* comment</Comment>
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

var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString())
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }
})

React.render(
  <CommentBox />,
  document.getElementById('content')
)
