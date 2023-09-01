const Dis_box = () => {
  return (
    <>
      <div className="ppeerr">
        <div className="dis_box_cont">
          <div className="disrh">
            <img
              onClick={() => {
                setflag(!flag);
                console.log(2);
              }}
              className="vegl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
              alt=""
            />
            <p className="text_item_m">McSaver McVeggie Meal</p>
            <p className="text_item_p"> ₹279.05</p>
            <p className="text_item_d">
              Enjoy a combo of McVeggie + Fries (M) + Drink of your Choice .
              Order now to experience a customizable, delicious meal. Save Rs.50
              on this Meal.
            </p>
          </div>
          <div className="disll">
            {/* <div className="btnnnnn">Add</div> */}
            <img
              className="ehs"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/9b60c9cbf87719a34c6b54c4b7d0a47f"
              alt=""
            />
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
