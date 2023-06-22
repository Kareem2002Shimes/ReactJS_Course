import styles from "./product.module.css";
function Product({ name, desc, img, rate, price }) {
  return (
    <div style={{ flexBasis: "calc(100% / 3)" }} className={styles.item}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <img
        src={`/images/${img}`}
        alt="product-img"
        width="100%"
        height="100%"
      />
      <strong>Price : ${price}</strong>
      <div>
        <span>Rate :{rate}</span>
      </div>
    </div>
  );
}

export default Product;
