import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

const Restaurant = () => {
    const params = useParams()
    const [reviews, setReviews] = useState([]);

  const fetchData = async (restaurantId) => {
    let url = `https://api.yelp.com/v3/businesses/${params?.id}/reviews`;
    
    let options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer RrPiTjcF_eyQalGoG7qsY72afRYSogAmfFDgOLUTGT0EaZggjmefr3Ud2BRvmuApp9BLnR2gWDeDMpffGTwBw3pJB93RjGGlhkBFeDpuKWlo3NsievXjoUq6qxhgXnYx'
      }
    };

    const data = await fetch(url, options)
    const result = await data.json();

    setReviews(result.reviews);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
       <div className='restaurantContainer'>
        {
          reviews.map(resObj => {
            return (
              <div key={resObj.id}>
                <h1>{resObj.user.name}</h1>
                <p>{resObj.text}</p>
                <p>{resObj.rating}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Restaurant;