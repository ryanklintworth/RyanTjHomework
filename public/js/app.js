class App extends React.Compontent {
  state = {
    name:'',
    image:'',
    date:'',
    rated:'',
    movies:[]
  }

  render = () => {
    return(
      <div>
        <h1>TITLE</h1>
        <form obSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label><br/>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.image}/><br/>
          <label htmlFor="name">Image</label><br/>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.image}/><br/>
          <label htmlFor="name">Date</label><br/>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.date}/><br/>
          <label htmlFor="name">Rated</label><br/>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.rated}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
