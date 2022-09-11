const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 classname="inactive">
      No comment yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '🎇'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 😎'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt = {data.place.name}/>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Comments</h2>
        {comments}
        <p>No comments yet!</p>

        <h2>Comment/Rant </h2>
            <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="row">
                    <div className="form-group col=sm-6">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" />
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="rant">Rant</label>
                        <input className="form-control" id="rant" name="rant" type = "checkBox"/>
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="stars">Stars</label>
                        <input className="form-control" id="stars" name="stars" type= "number" step= "0.5" min="0" max="5" required/>
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </div>
            </form>

        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <h3> 
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          <button>Edit</button>
        </a>
        {` `}
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>

    )
}

module.exports = show
