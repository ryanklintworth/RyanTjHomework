class App extends React.Compontent {
  state = {
    name:'',
    image:'',
    date:'',
    rated:'',
    movies:[]
  }
  
}

ReactDOM.render(<App></App>, document.querySelector('main'))
