import Header from "./Header";
import Grocery from "./Grocery";
import GroceryModel from "../models/Grocery";

const App = () => {
  return (
    <div>
      <Header />
      {GroceryModel.map((g) => (
        <Grocery name={g.name} quantity={g.quantity} key={g.id.toString()} />
      ))}
    </div>
  );
};

export default App;
