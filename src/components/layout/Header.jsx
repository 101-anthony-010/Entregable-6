import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section>
        <Link to="/">
            <h1>E-Commerce</h1>
        </Link>
        <nav>
            <Link to="/login">
                <i className="bx bx-user"></i>
            </Link>
            <Link to="/purchases">
                <i className="bx bx-box"></i>
            </Link>
            <button>
                <i className="bx bx-cart"></i>
            </button>
        </nav>
    </section>
  )
}

export default Header