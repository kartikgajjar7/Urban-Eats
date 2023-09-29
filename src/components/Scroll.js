const MobileScroll = ({ url, name, off1, off2, time }) => {
  return (
    <>
      <div className="s0">
        <img className="s1" src={url} alt="" />
        <div className="absssssdwwws">
          <div className="a1">{off1}</div>

          <div className="a2">{off2}</div>
        </div>
        <div className="s2">{name}</div>
        <div className="s3">{time}</div>
      </div>
    </>
  );
};

export default MobileScroll;
