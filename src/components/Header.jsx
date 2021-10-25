export const Header = () => {
    return(
        <header>
  <nav className="navbar navbar-expand-md fixed-top bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="abc.html">
      <i class="fas fa-home"></i>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="abc.htmlnavbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search" />
        </form>
        <div>
        <i class="fas fa-cart-plus"></i> &nbsp; &nbsp;
        </div>
        <div>
          Profile menu
        </div>
      </div>
    </div>
  </nav>
</header>
)}
