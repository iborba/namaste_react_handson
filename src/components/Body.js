import RestaurantCards from './RestaurantCards'
import ShimmerUI from './ShimmerUI'
import { useEffect, useState } from 'react';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  // AGAIN: whenever a state variable changes, React rerender the component!!!
  // Why React is fast? Due to React Fiber, which is a set of Core Algorithms of React that uses, 
  // among others, reconciliation strategies to, for example, compare the differences between 2 different Virtual DOMs and updates, when required
  // only the small modified parts instead of everything.

  console.log('component rendered')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let url = 'https://api.yelp.com/v3/businesses/search?location=Alpharetta&categories=icecream&sort_by=rating&limit=5';

    let options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer RrPiTjcF_eyQalGoG7qsY72afRYSogAmfFDgOLUTGT0EaZggjmefr3Ud2BRvmuApp9BLnR2gWDeDMpffGTwBw3pJB93RjGGlhkBFeDpuKWlo3NsievXjoUq6qxhgXnYx'
      }
    };

    const data = await fetch(url, options)
    const result = await data.json();

    setRestaurants(result.businesses);
    setFilteredRestaurants(result.businesses);
  }
  
  // whenever a state variable changes, React rerender the component!!!
  return filteredRestaurants.length === 0 ? <ShimmerUI /> : ( // Conditional rendering
    <div className='body'>
      <div className='search'>
        <button 
          onClick={() => {
            setFilteredRestaurants(restaurants.filter(res => res.rating >= 5))
          }}
          className='filter-btn'>
          Top Rated Restaurants
        </button>
        <div>
          <input 
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            type="text"
            className='search-box'
            value={searchText}
            placeholder='Search' />
          <button 
            onClick={() => {
              setFilteredRestaurants(restaurants.filter(res => res.name.toLowerCase().includes(searchText)))
            }}
            className='filter-btn'>
            Search
          </button>
        </div>
      </div>
      <div className='restaurantContainer'>
        {
          filteredRestaurants.map(resObj => <RestaurantCards 
            key={resObj.id}
            restData={resObj} />)
        }
      </div>
    </div>
  )
}

export default Body;