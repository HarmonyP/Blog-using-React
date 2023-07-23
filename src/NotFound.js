import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you are looking for is not found</p>
            <Link to='/'> 
            Back to the Homepage...
            </Link>
        </div>
     );
}
 
export default NotFound;