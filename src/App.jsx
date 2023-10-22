import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { CartContext } from "./Context/Cart";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

function App() {
  const fill = "black";
  const [fetchData, setFetchData] = useState([]);
  const { addItems, handleSubmit, handleDelete, subTotal } =
    useContext(CartContext);

  useEffect(() => {
    const fetchItems = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setFetchData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Navbar
        fill={fill}
        addItems={addItems}
        onDelete={handleDelete}
        subTotal={subTotal}
      />
      <Main
        fill={fill}
        fetchData={fetchData}
        setFetchData={setFetchData}
        onHandleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
