import MobileScroll from "./Scroll";
import { Link } from "react-router-dom";
const Cphonee = ({ data }) => {
  console.log(data, "hey");
  return (
    <div className="crouselx">
      <div className="upper"></div>
      <div className="perent_slider">
        <div className="sliderw">
          {data.map((data) => {
            return (
              <Link
                to={`restaurant/${data.info.areaName}/${data.info.areaName}}/${data.info.id}`}
              >
                <MobileScroll
                  url={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`}
                  name={data.info.name}
                  off1="34% OFF"
                  off2="UPTO ₹100"
                  time={data.info.sla.slaString}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cphonee;
