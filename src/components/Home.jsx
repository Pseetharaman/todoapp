import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <Link to={"/todo"}>Try todo app</Link>
    </div>
  )
}
