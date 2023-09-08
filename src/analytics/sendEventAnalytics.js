import ReactGA from "react-ga4";

function sendEventAnalytics({ category, action, label }) {
  // Send a custom event
  ReactGA.event({
    category,
    action,
    label
  });
  console.log(category, action, label)
}

export default sendEventAnalytics;
