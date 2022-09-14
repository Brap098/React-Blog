// Home page

const React = require('react')
const Def = require('../default')
const { default: PostPage } = require('../pages/AddPost')

function PostPage (data) {
  let postsFormatted = data.posts.map((post, home) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/posts/${post.id}`}>
          {post.name}
          </a>
        </h2>
        <p clasName="text-center">
          {post.text}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Posts to comment on.</h1>
            <div className="row">
              {postsFormatted}
            </div>
        </main>
    </Def>
  )
}

  
module.exports = PostPage