const RestaurantCards = (props) => {
  const {image_url, name, categories: categoriesObj, rating, distance} = props.restData
  const categories = categoriesObj.map(x => x.title)

  return (
    <div className='restaurantCard'>
      <div>
        <img 
          className='restaurantLogo'
          src={image_url} 
          alt="" />
      </div>
      <div className='restaurantDetails'>
        <h3>{name}</h3>
        <h6>{categories.join(', ')}</h6>
        <h4>{rating} stars</h4>
        <h5>Distance: {Math.floor(distance / 1000)} Km</h5>
      </div>
    </div>
  )
}

export default RestaurantCards;