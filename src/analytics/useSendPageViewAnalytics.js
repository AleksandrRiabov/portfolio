import { useEffect } from "react";
import ReactGA from "react-ga4";

function useSendAnalytics({ title }) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: title,
    });
  }, [title]);
}

export default useSendAnalytics;
