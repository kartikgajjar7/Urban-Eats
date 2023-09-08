import { useState } from "react";
import Dis_box from "./Dish_box";
const Res_Acc = ({ veg, setveg, cat_data }) => {
  const [show, setshow] = useState(true);

  const handliclick = (e) => {
    if (show === false) e.target.style.transform = "rotate(180deg)";
    if (show === true) e.target.style.transform = "rotate(0deg)";
    setshow(!show);
  };
  const lengthss = cat_data.itemCards
    ? cat_data.itemCards.filter((data, index) => {
        if (veg) {
          return data?.card?.info?.itemAttribute?.vegClassifier === "VEG";
        }

        return data;
      })
    : cat_data.categories?.map((data, index) => {
        return data.itemCards?.filter((item, keys) => {
          if (veg) {
            return item.card?.info?.itemAttribute?.vegClassifier === "VEG";
          }

          return data;
        });
      });

  return (
    <>
      <div id="this_main" className="main_drop_cont">
        <div className="drop_head">
          <p className="aijf">
            {cat_data.title} ({lengthss.length})
          </p>
          <img
            onClick={handliclick}
            className="asuif"
            src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/up-arrow.png"
            alt=""
          />
        </div>

        {/* {cat_data.itemCards && show
          ? cat_data.itemCards.map((data, index) => {
              if (veg) {
                return data?.card?.info?.itemAttribute?.vegClassifier ===
                  "VEG" ? (
                  <Dis_box key={index} item_info={data} />
                ) : null;
              }

              return <Dis_box key={index} item_info={data} />;
            })
          : show
          ? cat_data.categories?.map((data, index) => {
              return data.itemCards?.map((item, keys) => {
                if (veg) {
                  return item.card?.info?.itemAttribute?.vegClassifier ===
                    "VEG" ? (
                    <Dis_box key={index} item_info={data} />
                  ) : null;
                }

                return <Dis_box key={keys} item_info={item} />;
              });
            })
          : null} */}
        {cat_data.itemCards && show
          ? cat_data.itemCards
              .filter(
                (data) =>
                  !veg ||
                  data?.card?.info?.itemAttribute?.vegClassifier === "VEG"
              )
              .map((data, index) => <Dis_box key={index} item_info={data} />)
          : show
          ? cat_data.categories?.map((data, index) =>
              data.itemCards
                .filter(
                  (item) =>
                    !veg ||
                    item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                )
                .map((item, keys) => <Dis_box key={keys} item_info={item} />)
            )
          : null}

        <div className="shuthefuckup"></div>
      </div>
    </>
  );
};
export default Res_Acc;
