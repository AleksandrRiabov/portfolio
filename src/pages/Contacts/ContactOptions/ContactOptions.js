import "./ContactOptions.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import data from "../../../data";

const ContactOptions = () => {
  return (
    <div className="contactOptions">
      <div className="contactOptionsInner">
        <div className="contactOptionsSocial">
          {data.socialLinks.map(({ url, name, icon }) => {
            return (
              <a key={name} href={url}>
                <div className="contactOptionContent contactOption">
                  <div className="contactOptionIcon">{icon}</div>
                  <p> {name}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="contactOption">
          <p className="optionName">Phone:</p>
          <div className="contactOptionContent">
            <div className="contactOptionIcon">
              <PhoneAndroidIcon fontSize="inherit" />
            </div>
            <p className="phone">+447946434597</p>
          </div>
        </div>
        <div className="contactOption">
          <p className="optionName">Email:</p>
          <div className="contactOptionContent">
            <div className="contactOptionIcon">
              <AlternateEmailIcon fontSize="inherit" />
            </div>
            <p className="phone">sania.riabov@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
