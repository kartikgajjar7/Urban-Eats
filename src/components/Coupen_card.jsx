const Coupen_card = ({ offer, code, icon_img }) => {
  return (
    <div className="Copen_card_cont">
      <div className="Coupen_wrap">
        <div className="askdf">
          <img className="offer_icon" src={icon_img} alt="offericon" />
          <p className="cp_up">{offer}</p>
        </div>
        <div className="asknf">
          <p className="afas">{code}</p>
        </div>
      </div>
    </div>
  );
};
export default Coupen_card;
