const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.posts.map((post, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/posts/${post.id}`}>
          {post.name}
          </a>
        </h2>
        <p clasName="text-center">
          {post.cuisines}
        </p>
        <img src={post.pic} alt={post.name} />
        <p clasName="text-center">
          Located in {post.city}, {post.state}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

  
module.exports = index
