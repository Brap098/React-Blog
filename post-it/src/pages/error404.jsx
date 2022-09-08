const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>OOPS! sorry page was lost!</p>
                <div>
      <img src="https://cdn-acpnj.nitrocdn.com/SDkrhncnWeetGsYGlzwaPnbfptfOeIKk/assets/static/optimized/rev-00d8738/wp-content/uploads/2020/01/Free-Hilarious-Anime-Memes-7.jpg" alt="ME most classes" />
      <div>
        Photo by <a href="creator">She hates memes</a> on <a href="https://memesbams.com/anime-memes/">memesbams</a>
      </div>
    </div>
            </main>
        </Def>
    )
}

module.exports = error404