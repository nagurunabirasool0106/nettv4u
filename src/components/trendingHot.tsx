import React from 'react'
import MovieReviews from './movieReviews'
import Trailers from './trailers'
import News from './news'
import Articles from './articles'
export default function TrendingHot() {
  return (
    <>
      <div>
        <MovieReviews />
      </div>
      <div>
        <Trailers />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Articles />
      </div>
    </>
  )
}
