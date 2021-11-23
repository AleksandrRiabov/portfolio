import './NotFound.css';
import { Link } from 'react-router-dom';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';

const NotFound = () => {
  return (
    <section className="page notFound">
      <div className="nfInner">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/" className="goBack">
          <ArrowLeftSharpIcon color="inherit" /> Go to Home Page..
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
