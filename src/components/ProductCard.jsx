import { Link } from 'react-router-dom';
// ... other imports

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      {/* Your existing ProductCard content */}
    </Link>
  );
};