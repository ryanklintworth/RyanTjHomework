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

  deleteMovie = (event) => {
    axios.delete('/movies/' + event.target.value)
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
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

        <form className="createForm" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label><br/>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}/><br/>

          <label htmlFor="image">Image</label><br/>
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}/><br/>

          <label htmlFor="date">Date</label><br/>
          <input
            type="text"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}/><br/>

          <label htmlFor="rated">Rated</label><br/>
          <input
            type="text"
            id="rated"
            onChange={this.handleChange}
            value={this.state.rated}/><br/>
          <input type="submit"/>
        </form>
<<<<<<< HEAD
        <h1>Star Wars Titles</h1>
=======

        <h1>List of Star Wars Movies</h1>
          <ul>
          { this.state.movies.map((movie) => {
            return (
              <li>
              {movie.name}
              <img src={movie.image} alt={movie.name}/>
                <button value={movie._id} onClick={this.deleteMovie}>WATCHED</button>
              <details>
              <summary>Edit this Movie</summary>
              <form id={movie._id} onSubmit={this.updateMovie}>
              <label htmlFor="name">Name</label><br/>
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                /><br/>

              <label htmlFor="image">Image</label><br/>
              <input
                type="text"
                id="image"
                onChange={this.handleChange}
                /><br/>

              <label htmlFor="date">Date</label><br/>
              <input
                type="text"
                id="date"
                onChange={this.handleChange}
                /><br/>

              <label htmlFor="rated">Rated</label><br/>
              <input
                type="text"
                id="rated"
                onChange={this.handleChange}
                /><br/>
              <input type="submit"/>
              </form>
              </details>
              </li>
            )
          })}
        </ul>
>>>>>>> daad79a549839fceaeafa4e4f15b0191ac9713b8
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
