import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </nav>
  )
}
