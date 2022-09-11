const React = require('react')
const Def = require('./default')

function about () {
    return (
        <Def>
        <main>
    <h1>Res Rant</h1>
    <div>
      <img src="post-it/src/Img/istockphoto-664954520-1024x1024.jpg" 
      alt="Post-it note board." />
      <div>
        The makers: Jay Holt, Aron Boone, Magdy and, Brapagon Voyles.
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Post Page</button>
    </a>
</main>


        </Def>
    )
}
module.exports = about
