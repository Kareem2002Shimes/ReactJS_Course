function ProductEx({ product }) {
  if (product === "apple") {
    throw new Error("Not Found Apples");
  }
  return (
    <div>
      <h1>{product}</h1>
    </div>
  );
}

export default ProductEx;
