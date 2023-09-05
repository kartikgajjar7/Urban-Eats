// import { useState } from "react";
// import Dis_box from "./Dish_box";
// const Res_Acc = ({ cat_data }) => {
//   const [show, setshow] = useState(true);

//   const handliclick = (e) => {
//     if (show === false) e.target.style.transform = "rotate(180deg)";
//     if (show === true) e.target.style.transform = "rotate(0deg)";

//     setshow((prevShow) => !prevShow);
//     console.log(show);
//   };

//   return (
//     <>
//       <div id="this_main" className="main_drop_cont">
//         <div className="drop_head">
//           <p className="aijf">
//             {cat_data?.title} ({cat_data.itemCards?.length})
//           </p>
//           <img
//             onClick={handliclick}
//             className="asuif"
//             src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/up-arrow.png"
//             alt=""
//           />
//         </div>

//         {cat_data.itemCards && show
//           ? cat_data.itemCards.map((data, index) => (
//               <Dis_box key={index} item_info={data} />
//             ))
//           : cat_data.categories?.map((data, index) => {
//               return data.itemCards?.map((item, keys) => (
//                 <Dis_box key={keys} item_info={item} />
//               ));
//             })}
//         <div className="shuthefuckup"></div>
//       </div>
//     </>
//   );
// };

// data?.map((item) => <Dis_box item_info={item} />);
import { useState } from "react";
import Dis_box from "./Dish_box";
const Res_Acc = ({ cat_data }) => {
  const [show, setshow] = useState(true);

  const handliclick = (e) => {
    if (show === false) e.target.style.transform = "rotate(180deg)";
    if (show === true) e.target.style.transform = "rotate(0deg)";
    setshow(!show);
  };

  return (
    <>
      <div id="this_main" className="main_drop_cont">
        <div className="drop_head">
          <p className="aijf">
            {cat_data.title} ({cat_data.itemCards?.length}
            {cat_data.categories?.length})
          </p>
          <img
            onClick={handliclick}
            className="asuif"
            src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/up-arrow.png"
            alt=""
          />
        </div>

        {cat_data.itemCards && show
          ? cat_data.itemCards.map((data, index) => (
              <Dis_box key={index} item_info={data} />
            ))
          : show
          ? cat_data.categories?.map((data, index) => {
              return data.itemCards?.map((item, keys) => (
                <Dis_box key={keys} item_info={item} />
              ));
            })
          : null}

        <div className="shuthefuckup"></div>
      </div>
    </>
  );
};
export default Res_Acc;
