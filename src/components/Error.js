import { useRouteError } from "react-router"

const Error = () => {
  const error = useRouteError();
  console.log(error)
  
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <h3>{error}</h3>
    </div>
  )
}

export default Error;
