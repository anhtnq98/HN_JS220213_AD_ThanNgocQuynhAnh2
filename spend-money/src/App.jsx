import "./App.css";
import Product from "./component/Product";

function App() {
  return (
    <>
      <div class="to-spend">
        <p>
          To Spend <strong>$1500000000000</strong>
        </p>
        <p>You have a lot of money</p>
      </div>
      <div className="all-app-container">
        <Product />
      </div>
    </>
  );
}

export default App;
