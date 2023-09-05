const Coupen_card = ({
  couponCode,
  description,
  descriptionTextColor,
  header,
  offerLogo,
}) => {
  return (
    <div className="Copen_card_cont">
      <div className="Coupen_wrap">
        <div className="askdf">
          <img
            className="offer_icon"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${offerLogo}`}
            alt="offericon"
          />
          <p className="cp_up">{header}</p>
        </div>
        <div className="asknf">
          <p className="afas">
            {couponCode} {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Coupen_card;
