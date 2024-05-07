import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 5,
    title: "My First Book",
    description: "My first book I ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "Part II",
    description: "Continuation of part I",
  },
  {
    id: "p3",
    price: 5,
    title: "Part III",
    description: "Part III of the series",
  },
  {
    id: "p4",
    price: 15,
    title: "Part IV",
    description: "Mystry unflolds",
  },
  {
    id: "p5",
    price: 25,
    title: "Final Chapter",
    description: "Answer to every question",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{DUMMY_PRODUCTS.map((product) => (<ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          key={product.id}
          id={product.id}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
