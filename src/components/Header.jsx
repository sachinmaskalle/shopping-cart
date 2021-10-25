import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
          >
            <i className="fas fa-home"></i>
            <strong>Home</strong>
          </Link>
          <div>
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center"
            >
              <i className="fas fa-cart-plus"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
