import Dis_box from "./Dish_box";

const buttonclicked = () => {
  const div_main = document.getElementById("this_main");
};

const Drop_cont = () => {
  return (
    <>
      <div id="this_main" className="main_drop_cont">
        <div className="drop_head">
          <p className="aijf">Recommended (13)</p>
          <img
            onClick={buttonclicked}
            className="asuif"
            src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/up-arrow.png"
            alt=""
          />
        </div>
        <Dis_box />
        <Dis_box />
        <Dis_box />
      </div>
    </>
  );
};
export default Drop_cont;
