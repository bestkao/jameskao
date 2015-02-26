var NAV_LINKS = {
  'about': {
    link: '/#about',
    title: 'About Me'
  },
  'what-i-do': {
    link: '/#what-i-do',
    title: 'What I Do'
  },
  'background': {
    link: '/#background',
    title: 'Background'
  },
  'gallery': {
    link: '/#gallery',
    title: 'Gallery'
  },
  'contact': {
    link: '/#contact',
    title: "Let's Connect"
  },
  'testimonials': {
    link: '/#testimonials',
    title: 'What Others Say'
  }
}

var NavMain = React.createClass({displayName: "NavMain",
  render: function() {
    return (
      React.createElement("div", {className: "NavMain", class: "navbar navbar-inverse navbar-fixed-top"}, 
        React.createElement("nav", {class: "navbar navbar-inverse navbar-fixed-top"}
        )
      )
    )
  }
})
// <div className='NavMain'>
//   <nav class="navbar navbar-inverse navbar-fixed-top">
//     <div class="container">
//       <div class="navbar-header">
//         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//           <span class="sr-only">Toggle navigation</span>
//           <span class="icon-bar"></span>
//           <span class="icon-bar"></span>
//           <span class="icon-bar"></span>
//         </button>
//         <a class="navbar-brand" href="#">James Kao</a>
//       </div>
//       <div id="navbar" class="collapse navbar-collapse">
//         <ul class="nav navbar-nav">
//           <li class="active"><a href="#">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div><!--/.nav-collapse -->
//     </div>
//   </nav>
// </div>

React.render(
  React.createElement(NavMain, null),
  document.getElementById('navigation')
)
