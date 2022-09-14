const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                    {data.message}
                </h4>
            )
        }
  
    return (
        <Def>
          <main>
            <h1>Add a New Post</h1>
            {message}
            <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Post Name</label>
                    <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">add text</label>
                    <input className="form-control" id="text" name="text" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Post" />
            </form>


          </main>
        </Def>
    )
}


  


module.exports = new_form
