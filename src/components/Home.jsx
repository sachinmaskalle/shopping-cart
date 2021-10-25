import { CategoryItem } from "./CategoryItem";
export const Home = () => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Banner example</h1>
            <p className="lead text-muted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              sunt nobis quia doloremque cupiditate error sit autem rerum vero
              asperiores?
            </p>
          </div>
        </div>
      </section>
      <div className="py-4 bg-light">
        <div className="container">
          <CategoryItem />
        </div>
      </div>
    </main>
  );
};
