export default function Conditional({ products }) {
  const listItem = products.map((product) => (
    <h4 key={product.id} style={{ color: product.isFruit ? "red" : "green" }}>
      {product.title}
    </h4>
  ));
  return (
    <div className="card">
      <div>{listItem}</div>
    </div>
  );
}
