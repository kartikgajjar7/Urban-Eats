const Dis_box = ({ item_info }) => {
  const take_data = item_info?.card?.info;

  return (
    <>
      <div className="ppeerr">
        <div className="dis_box_cont">
          <div className="disrh">
            <img
              onClick={() => {}}
              className="vegl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
              alt=""
            />
            <p className="text_item_m">{take_data?.name}</p>
            <p className="text_item_p">₹{take_data?.price / 100}</p>
            <p className="text_item_d">{take_data?.description}</p>
          </div>
          <div className="disll">
            {/* <div className="btnnnnn">Add</div> */}
            {take_data?.imageId ? (
              <img
                className="ehs"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${take_data?.imageId}`}
                alt=""
              />
            ) : (
              ""
            )}

            {/* <div className="btnnnnn">
              <p>Add</p>
            </div> */}
            <p className="asdasdasd">Add</p>
          </div>
        </div>
        <div className="dividessss"></div>
      </div>
    </>
  );
};
export default Dis_box;
