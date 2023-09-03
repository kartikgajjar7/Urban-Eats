import Dis_box from "./Dish_box";
const Res_Acc = ({ cat_data }) => {
  return (
    <>
      <div id="this_main" className="main_drop_cont">
        <div className="drop_head">
          <p className="aijf">{cat_data.title}(13)</p>
          <img
            className="asuif"
            src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/up-arrow.png"
            alt=""
          />
        </div>
        {/* {
        cat_data.itemCards?
        cat_data.itemCards?.map((data) => (
          <Dis_box item_info={data} />
        ): cat_data.categories.map((data)=>(data.map((items)=>(<Dis_box item_info={item}/>)))))} */}
        {cat_data.itemCards
          ? cat_data.itemCards.map((data) => <Dis_box item_info={data} />)
          : cat_data.categories.map((data) => {
              return data.itemCards?.map((item) => (
                <Dis_box item_info={item} />
              ));
            })}
      </div>
    </>
  );
};
export default Res_Acc;
// data?.map((item) => <Dis_box item_info={item} />);
