import React from 'react'

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:3000');

  return (
    <div className='Home'>
       {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"/>

        <h1>MainPage</h1>
    </div>
  );
}

export default Home;