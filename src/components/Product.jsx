import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductAction from "./ProductAction";
import ProductReview from "./ProductReview";
import ProductSale from "./ProductSale";

const Product = ({ products, loading }) => {
  return (
    <>
      {products.map((productItem) => (
        <div key={productItem.id} className="col mb-5">
          {loading ? (
            <div className="card h-100">
              <h3>Loading...</h3>
            </div>
          ) : (
            <div className="card h-100">
              <ProductImage src={productItem.images[0]} />
              <ProductSale s_price={productItem.discountPercentage} />
              <div className="card-body p-4">
                <div className="text-center">
                  <ProductName name={productItem.title} />
                  <ProductPrice
                    o_price={productItem.price}
                    s_price={
                      productItem.price -
                      (productItem.price * productItem.discountPercentage) / 100
                    }
                  />
                  <ProductReview
                    voted={true ? productItem.price > 500 : false}
                  />
                </div>
              </div>
              <ProductAction />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Product;
