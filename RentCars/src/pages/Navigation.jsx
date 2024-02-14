import { Link } from "react-router-dom";


const Navigation = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/favourite">Favourite Cars</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navigation;
