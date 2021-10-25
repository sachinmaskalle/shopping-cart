// import "./fonts"
import { Header } from "./components/Header";
import { CategoryItem } from "./components/CategoryItem";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <CategoryItem />
        </div>
      </main>
    </div>
  );
}

export default App;
