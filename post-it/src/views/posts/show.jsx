const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 classname="inactive">
      No comment yet!
    </h3>
  )
    return (
      <Def>
      <main>
        <h1>{data.post.name}</h1>
        <img src={data.post.pic} alt = {data.post.name}/>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Comments</h2>
        {comments}
        <p>No comments yet!</p>

        <h2>Comment/Rant </h2>
            <form method="POST" action={`/places/${data.ppost.id}/comment`}>
                <div className="row">
                    <div className="form-group col=sm-6">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" />
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </div>
            </form>

        <h3>
          Located in {data.post.city}, {data.post.state}
        </h3>
        <h3> 
          {data.post.showEstablished()}
        </h3>
        <h4>
          Serving {data.post.cuisines}
        </h4>
        <a href={`/posts/${data.post.id}/edit`} className="btn btn-warning">
          <button>Edit</button>
        </a>
        {` `}
        <form method="POST" action={`/post/${data.post.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>

    )
}

module.exports = show
