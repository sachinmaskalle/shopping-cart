export const Header = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a
            href="test.html"
            className="navbar-brand d-flex align-items-center"
          >
            <i className="fas fa-home"></i>
            <strong>Home</strong>
          </a>
          <div>
            <a
              href="test.html"
              className="navbar-brand d-flex align-items-center"
            >
              <i className="fas fa-cart-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
