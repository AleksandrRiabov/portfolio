import "./NotFound.css";
import { Link } from "react-router-dom";
import ArrowLeftSharpIcon from "@mui/icons-material/ArrowLeftSharp";
import useSendAnalytics from "../../analytics/useSendPageViewAnalytics";

const NotFound = () => {
  useSendAnalytics({ title: "404 Not Found page" });
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
