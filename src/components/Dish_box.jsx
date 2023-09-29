import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { additem } from "./Reduxstore/slices/Cartslice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeitem } from "./Reduxstore/slices/Cartslice";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Dis_box = ({ item_info }) => {
  const cart_items = useSelector((state) => state.cart.items);
  const [addonsitem, setaddonsitem] = useState([]);
  const take_data = item_info?.card?.info;
  const item_in_cart = () => {
    const result = cart_items.filter(
      (incart) => incart.Main_item.card.info.name === take_data.name
    );
    if (result.length > 0) {
      console.log("found ", take_data.name, " in the cart");
      return true;
    }
  };
  console.log(item_in_cart(), " for ", take_data.name);
  const [incartin, setincartin] = useState(item_in_cart());
  const dispatch = useDispatch();
  const onRemove = () => {
    setincartin(false);
    dispatch(removeitem(take_data.name));

    console.log("removing ", take_data.name);
  };
  console.log(cart_items);
  // useEffect(() => {
  //   const item_in_cart = () => {
  //     const result = cart_items.filter(
  //       (incart) => incart.Main_item.card.info.name === take_data.name
  //     );
  //     if (result.length > 0) {
  //       console.log("found ", take_data.name, " in the cart");
  //       return true;
  //     }
  //   };
  //   item_in_cart();
  // }, [cart_items]);

  const price_of_Food = take_data?.price
    ? take_data?.price / 100
    : take_data.defaultPrice / 100;

  const getaddonobjects = (take_data) => {
    if (take_data && take_data.addons !== undefined) {
      const output = take_data.addons.flatMap((items) => {
        return items.choices.map((maps) => {
          return maps;
        });
      });
      return output;
    }
    return []; // Return an empty array if take_data or addons is undefined
  };
  const all_adoons = getaddonobjects(take_data);

  const [subtotal, setsubtotal] = useState(price_of_Food);
  const [showaddon, setshowaddon] = useState(false);
  const handle_the_click_check = (addonname) => {
    const addon_object_to_add = all_adoons.filter(
      (data) => data.name === addonname
    );
    if (addonsitem.some((element) => element.name === addonname)) {
      if (addon_object_to_add[0].price !== undefined) {
        setsubtotal((total) => total - addon_object_to_add[0].price / 100);
      }

      const set_this = addonsitem.filter((data) => data.name !== addonname);
      setaddonsitem(set_this);
      return;
    }

    if (addon_object_to_add[0].price !== undefined) {
      setsubtotal((total) => total + addon_object_to_add[0].price / 100);
    }

    setaddonsitem((items) => [...items, addon_object_to_add[0]]);
  };
  useEffect(() => {
    // This code block will run every time addonsitem changes
  }, [addonsitem]);
  const getaddon = (take_data) => {
    if (take_data && take_data.addons !== undefined) {
      const output = take_data.addons.flatMap((items) => {
        return items.choices.map((maps) => {
          return maps.name;
        });
      });
      return output;
    }
    return []; // Return an empty array if take_data or addons is undefined
  };
  const pass_to_adoon = getaddon(take_data);

  const onadd = () => {
    console.log("doing");
    setshowaddon(true);
  };
  const closeaddon = () => {
    setshowaddon(false);
  };
  return (
    <>
      <div className="ppeerr">
        {showaddon ? (
          <div
            onScroll={(e) => {
              e.preventDefault();
              console.log("hry");
              e.stopPropagation();
            }}
            className="peretnaddon"
          >
            <div
              onScroll={() => {
                e.stopPropagation();
              }}
              className="addondiv"
            >
              <div className="upperad">
                <div className="nameadd">
                  <p className="aiunf">{take_data?.name}</p>
                  <p className="sfasasd">
                    ₹
                    {take_data?.price
                      ? take_data?.price / 100
                      : take_data.defaultPrice / 100}
                  </p>
                </div>
                <img
                  onClick={closeaddon}
                  className="asfas"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1024px-OOjs_UI_icon_close.svg.png"
                  alt=""
                />
              </div>
              <div className="middleadd">
                <p className="combo">
                  make a combo<span className="asdssasd">(optional)</span>
                </p>

                <div className="addonitems">
                  {pass_to_adoon.length === 0 ? (
                    <div className="noaddon">
                      <p className="TEXTNOADDON">NO ADDONS AVAILABLE </p>
                    </div>
                  ) : /* No content is rendered when pass_to_adoon has a length other than 0 */
                  null}

                  {pass_to_adoon.map((item) => (
                    <div className="afdssd">
                      <img
                        className="asfff"
                        width="15px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
                        alt="veg"
                      />
                      <input
                        onClick={() => handle_the_click_check(item)}
                        key={item}
                        id="wp-comment-cookies-consent"
                        name={item}
                        type="checkbox"
                        value="yes"
                      />
                      <label className="asdassdd" for={item}>
                        {item}{" "}
                        <span className="affserttr">
                          {all_adoons.filter((data) => data.name === item)[0]
                            .price
                            ? `₹ ${
                                all_adoons.filter(
                                  (data) => data.name === item
                                )[0].price / 100
                              }`
                            : "Free"}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div
                onScroll={() => {
                  e.stopPropagation();
                }}
                onClick={() => {
                  dispatch(
                    additem({ addons: addonsitem, Main_item: item_info })
                  );
                  setincartin(true);
                  closeaddon();
                  toast(`${take_data?.name} is addded to the cart`);
                }}
                className="checkout"
              >
                <p className="asdijijjjs">Total ₹ {subtotal}</p>
                <p className="asdijijjjs">Add Item</p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="dis_box_cont">
          <div className="disrh">
            <img
              className="vegl"
              s
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
              alt=""
            />
            <p className="text_item_m">{take_data?.name}</p>
            <p className="text_item_p">
              ₹{" "}
              {take_data?.price
                ? take_data?.price / 100
                : take_data.defaultPrice / 100}
            </p>
            <p className="text_item_d">{take_data?.description}</p>
          </div>
          <div
            onScroll={() => {
              e.stopPropagation();
            }}
            className="disll"
          >
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
            {incartin ? (
              <button className="btnadds" onClick={onRemove}>
                Remove
              </button>
            ) : (
              <button className="btnadds" onClick={onadd}>
                Add
              </button>
            )}

            {take_data && take_data.addons ? (
              <span className="btnaddsa">Customisable</span>
            ) : null}
          </div>
        </div>
        <div className="dividessss"></div>
      </div>
    </>
  );
};
export default Dis_box;
