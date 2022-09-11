const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Post</h1>
            <form method="POST" action={`/posts/${data.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col=sm-6">
                        <label htmlFor="name">Post Name</label>
                        <input className="form-control" id="name" name="name" value={data.posts.name} required />
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="pic">Post Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="text">Text</label>
                        <input className="form-control" id="text" name="text" />
                    </div>
                    <div className="form-group col=sm-6">
                        <label htmlFor="time">Time</label>
                        <input className="form-control" id="time" name="time" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Post" />
                </div>
            </form>


          </main>
        </Def>
    )
}
  
module.exports = edit_form
