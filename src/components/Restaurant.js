import {useParams} from 'react-router'

const Restaurant = () => {
  const params = useParams()
  
  return (
    <div>
      <a href="/">Return</a>
      <h2>Restaurant {params?.id} page</h2>
    </div>
  )
}

export default Restaurant;