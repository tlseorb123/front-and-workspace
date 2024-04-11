import DaumPostcode from "./components/DaumPostcode";
import KakaoMap from "./components/KakaoMap";

const App = () => {
  return (
    <>
      <button onClick={DaumPostcode}>주소 검색</button>
      <KakaoMap />
    </>
  );
};

export default App;
