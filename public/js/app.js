class App extends React.Component {
  state = {
    name:'',
    image:'',
    date:'',
    rated:'',
    movies:[]
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('/movies', this.state)
      .then(response => this.setState({
        movies: response.data,
        name:'',
        image:'',
        date:'',
        rated:''
      })
    )
  }

  updatedMovie = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('/movies/' + id, this.state)
      .then(response => {
        this.setState({
          movies: response.data,
          name:'',
          image:'',
          date:'',
          rated:''
        })
      }
    )
  }

  componentDidMount = () => {
    axios.get('/movies').then((response) => {
      this.setState({
        movies: response.data,
      })
    })
  }

  render = () => {
    return(
      <div>
        <h1>Star Wars Titles</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label><br/>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}/><br/>

          <label htmlFor="name">Image</label><br/>
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}/><br/>

          <label htmlFor="name">Date</label><br/>
          <input
            type="text"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}/><br/>

          <label htmlFor="name">Rated</label><br/>
          <input
            type="text"
            id="rated"
            onChange={this.handleChange}
            value={this.state.rated}/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
