import Shimmer_cont from "./simmer_cont";
import Card from "./Card";
import Offercard from "./offercard";
import { useEffect } from "react";
import Crousel from "./Crousel";
import Shimmer_cont from "./simmer_cont";
import { useState } from "react";
import useOnlineStatus from "../CustomHooks/res_menu/useOnlineStatus";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import Cphonee from "./crouselphone";
import userContext from "../utils/UserContext";
import Shimmerphone from "./Shimmerphone";
import { Location_Unserviceable } from "./Location_Unserviceable";
import { useSelector } from "react-redux";
import Sliderres from "./sliderres";
const Body = () => {
  const [crouselcards, Setcrouselcards] = useState([]);
  const [maincards, Setmaincards] = useState([]);
  const [offercards, Setoffercards] = useState([]);
  const [onmind, Setonmind] = useState([]);
  const [mobile_data, setmobiledata] = useState();
  const status = useOnlineStatus();
  const From_where = useLocation();

  const Location_data = useSelector((state) => state.location.location);
  const ismobile = useSelector((state) => state.device.isPhone);

  const [mainpage, setmainpage] = useState(ismobile);
  const [resdata, SetResData] = useState([]);

  useEffect(() => {
    SetResData([]);
    async function fetchData() {
      try {
        if (ismobile) {
          const data = await fetch(
            `https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=${Location_data.lat}&lng=${Location_data.lan}&carousel=true&third_party_vendor=1`
          );
          const share = await data.json();

          setmobiledata(share.data.cards);

          share.data.cards.map((item, index) => {
            if (item.card.card.id === "top_brands_for_you") {
              Setcrouselcards(
                share?.data?.cards[index]?.card.card.gridElements?.infoWithStyle
                  ?.restaurants
              );
            }
          });
        }
        const data = await fetch(
          `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${Location_data.lat}&lng=${Location_data.lan}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );

        const MAIN_OBJ = await data.json();
        SetResData(MAIN_OBJ);
        MAIN_OBJ.data.cards.map((item, index) => {
          if (item.card.card.id === "topical_banner") {
            Setoffercards(
              MAIN_OBJ?.data?.cards[index]?.card?.card?.gridElements
                ?.infoWithStyle?.info
            );
          }
          if (item.card.card.id === "top_brands_for_you") {
            if (!ismobile) {
              console.log("mobile is not giving");
              Setcrouselcards(
                MAIN_OBJ?.data?.cards[index]?.card.card.gridElements
                  ?.infoWithStyle?.restaurants
              );
            }
          }
          if (item.card.card.id === "restaurant_grid_listing") {
            Setmaincards(
              MAIN_OBJ?.data?.cards[index]?.card.card.gridElements
                ?.infoWithStyle.restaurants
            );
          }
          if (item.card.card.id === "whats_on_your_mind") {
            Setonmind(
              MAIN_OBJ?.data?.cards[index]?.card.card.gridElements
                ?.infoWithStyle.info
            );
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [Location_data]);

  if (ismobile) {
    if (mobile_data === undefined) {
      console.log(mobile_data, "sss");
      console.log("heybey");
      return <Shimmerphone />;
    }
  }

  if (resdata?.data?.cards[0]?.card?.card?.title === "Location Unserviceable") {
    return <Location_Unserviceable />;
  }
  return (
    <>
      {mainpage ? (
        <>
          {console.log(mainpage, "asas")}
          <div className="dasdssawww">
            <div className="bre">
              <img
                onClick={() => {
                  setmainpage(false);
                }}
                className="djir"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ak4f9kufbxgb8fprancy"
                alt=""
              />
            </div>
            <div className="bref">
              <img
                className="djir"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/rxhxvcibw2jlbihmwqwh"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="topixs">
              <img
                className="w2"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/sl9oogwe7n5dusolt5xe"
                alt=""
              />
              <span className="cjnsd">Top Pics For You</span>
            </div>
          </div>
          <div className="scroll3">
            {console.log(mobile_data)}
            <Cphonee
              data={
                mobile_data[4]?.card?.card?.gridElements?.infoWithStyle
                  .restaurants ||
                mobile_data[5]?.card?.card?.gridElements?.infoWithStyle
                  ?.restaurants
              }
            />
          </div>
          <div className="crphoens">
            <Sliderres />
          </div>
        </>
      ) : (
        <div>
          <div className="uppar_body">
            <div className="set">
              <div className="left">
                <h1 color="text_High_Emphasis" className="RES_MIDDLE_NAME">
                  Order Food Online in {Location_data.name.slice(0, 15)}
                </h1>
                <div className="arrow">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 78 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
                      stroke="#F15700"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  {console.log("inside")}
                </div>
              </div>
              <div className="right">
                <img
                  className="HEADER_IMAGE"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
                  alt="SWIGGY HEADER IMAGE"
                  height="300"
                  width="501"
                />
              </div>
            </div>
          </div>
          {!status ? (
            <div className="sfaasd">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="144"
                viewBox="0 0 144 144"
                version="1.1"
              >
                <path
                  d="M0,142L8,142L8,144L0,144L0,142ZM28,142L32,142L32,144L28,144L28,142ZM96,142L104,142L104,144L96,144L96,142ZM80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100ZM82,140L84,140L84,142L82,142L82,140ZM12,136L20,136L20,138L12,138L12,136ZM110,134L116,134L116,136L110,136L110,134ZM0,128L32,128L32,130L0,130L0,128ZM72,128L128,128L128,130L72,130L72,128ZM68,64L68,68L72,68L72,64L68,64Z"
                  stroke="none"
                  fill="#535353"
                />
              </svg>
              <h1 className="text_off">Oops!something went wrong</h1>
            </div>
          ) : resdata.length === 0 ? (
            ismobile ? (
              <Shimmerphone />
            ) : (
              <Shimmer_cont />
            )
          ) : false ? (
            "d"
          ) : (
            <div className="container_main">
              <Crousel data={offercards} />
              <div className="crousel">
                <div className="upper">
                  <h1 className="cr_title">
                    Top restaurant chains in {`${Location_data.name}`}
                  </h1>
                  <div className="buttons">
                    <div
                      onClick={(e) => {
                        const slider =
                          document.getElementsByClassName("slider")[0];
                        if (
                          e.target.matches(".left_slide_btn") ||
                          e.target.closest(".left_slide_btn")
                        ) {
                          slider.scrollLeft -= 220;
                        }
                      }}
                      className="left_slide_btn"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        aria-hidden="true"
                        strokecolor="rgba(2, 6, 12, 0.92)"
                        fillcolor="rgba(2, 6, 12, 0.92)"
                      >
                        <path
                          d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
                          fill="rgba(2, 6, 12, 0.92)"
                          fillOpacity="0.92"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="right_slide_btn"
                      onClick={(e) => {
                        const slider =
                          document.getElementsByClassName("slider")[0];

                        if (
                          e.target.matches(".right_slide_btn") ||
                          e.target.closest(".right_slide_btn")
                        ) {
                          slider.scrollLeft += 220;
                        }
                      }}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        aria-hidden="true"
                        strokecolor="rgba(2, 6, 12, 0.92)"
                        fillcolor="rgba(2, 6, 12, 0.92)"
                      >
                        <path
                          d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z"
                          fill="rgba(2, 6, 12, 0.92)"
                          fillOpacity="0.92"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="perent_slider">
                  <div className="slider">
                    {/* {console.log(resdata.data, "focus")}
                {console.log(
                  resdata.data?.cards[1]?.card.card.gridElements?.infoWithStyle
                    ?.restaurants,
                  "before render"
                )} */}
                    {/* {ismobile
                  ? resdata.data?.cards[2]?.card.card.gridElements
                      ?.infoWithStyle?.restaurants
                    ? resdata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.map(
                        (data, index) => <Card key={index} res_data={data} />
                      )
                    : (() => {
                        // window.location.reload();
                        return null; // You can return null or some loading indicator here
                      })()
                  : null} */}

                    {crouselcards
                      ? crouselcards.map((data, index) => (
                          <Card key={index} res_data={data} />
                        ))
                      : (() => {
                          // window.location.reload();
                          return null; // You can return null or some loading indicator here
                        })()}
                  </div>
                </div>
              </div>
              <div className="br"> </div>
              <h1 className="topres">
                Restaurants with online food delivery in{" "}
                {From_where.state === null
                  ? "Ahemedabad"
                  : From_where.state.city_name}
              </h1>
              <div className="give_padding">
                {maincards.map((data, index) => (
                  <Card key={index} res_data={data} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {ismobile ? (
        <>
          <div className="tabsa">
            <div className="tabics">
              <svg className="hfg7fg" viewBox="0 0 559 825">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                ></path>
              </svg>
              <span className="aifuheb">Home</span>
            </div>
            <div className="tabics">
              <svg className="sujhwhhr green" viewBox="5 -1 12 25">
                <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
              </svg>

              <span className="aifuheb">Search</span>
            </div>
            <Link to="/cart">
              {" "}
              <div className="tabics">
                <svg
                  className="_1GTCsc _2MSid dddfww"
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                  fill="#686b78"
                >
                  <path
                    d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"
                    stroke-width="2"
                  ></path>
                </svg>
                <span className="aifuheb-v">0</span>
                <span className="aifuheb asfffffs">Cart</span>
              </div>
            </Link>

            <div className="tabics">
              <svg
                class="h-5 w-5 fill-defGray group-hover:fill-defBlack green"
                viewBox="6 0 12 24"
              >
                <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
              </svg>
              <span className="aifuheb asfffffs">SignIn</span>
            </div>
            <div className="tabics">
              <img
                className="fhrhbe"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
                alt=""
              />
              <span className="aifuheb asfffffs">About Me</span>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Body;
