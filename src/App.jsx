import "./App.css";
import { Fragment, useState } from "react";
import Form from "./components/Form";
import Product from "./components/product/Product";
import { styled } from "styled-components";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "apple",
      desc: "this is an apple",
      rate: 4,
      price: 12,
      img: "product.jpg",
    },
    {
      id: 2,
      name: "orange",
      desc: "this is a orange",
      rate: 3,
      price: 15,
      img: "product.jpg",
    },
    {
      id: 3,
      name: "banana",
      desc: "this is a banana",
      rate: 2,
      price: 20,
      img: "product.jpg",
    },
  ]);
  const test = 2;
  return (
    <Fragment>
      <Form />
      <Grid>
        {items.map(({ name, desc, price, rate, id, img }) => (
          <Product
            key={id}
            name={name}
            desc={desc}
            rate={rate}
            price={price}
            img={img}
          />
        ))}
      </Grid>
    </Fragment>
  );
}
const Grid = styled.div`
  display: flex;
  color: ${(props) => (props.test === 1 ? "red" : "black")};
`;

export default App;
