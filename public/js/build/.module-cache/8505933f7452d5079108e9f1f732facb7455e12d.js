var converter = new Showdown.converter()

var CommentBox = React.createClass({displayName: "CommentBox",
  loadCommentsFromServer: function() {
    $.ajax(this.props.url, {
      dataType: 'json',
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function() {
    return {data: []}
  },
  componentDidMount: function() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },
  handleCommentSubmit: function(comment) {
    this.setState({data: this.state.data.concat([comment])})
    $.ajax(this.props.url, {
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
      )
    )
  }
})

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      )
    })
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    )
  }
})

var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit: function(e) {
    e.preventDefault()
    var author = this.refs.author.getDOMNode().value.trim()
    var text = this.refs.text.getDOMNode().value.trim()
    if (!text || !author) {
      return
    }
    this.props.onCommentSubmit({author: author, text: text})
    this.refs.author.getDOMNode().value = ''
    this.refs.text.getDOMNode().value = ''
  },
  render: function() {
    return (
      React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
        React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    )
  }
})

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString())
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    )
  }
})

React.render(
  React.createElement(CommentBox, {url: "comments.json", pollInterval: 2000}),
  document.getElementById('content')
)
