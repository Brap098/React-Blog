const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/App.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                        <a href="/postpage">Post Page</a>
                        </li>
                        <li>
                        <a href="/posts/new">Add Post</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def


