import { useEffect, useRef } from "react";

const KakaoMap = () => {
  const mapRef = useRef(null);

  var options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  useEffect(() => {
    var map = new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{ width: "500px", height: "400px" }}
    ></div>
  );
};
export default KakaoMap;
