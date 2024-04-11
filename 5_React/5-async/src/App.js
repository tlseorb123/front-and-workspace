import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal";
import { useEffect, useState } from "react";

const App = () => {
  //const [data, setData] = useState([]); // console이 배열값 이어서 빈 배열을 쓴다

  //const dataLoad = async () => {
  //const result = await getAxios();
  //setData(result);
  // getAwait().then((result) => {
  //   console.log(result);
  //   setData(result);
  // });
  //};

  //useEffect(() => {
  // dataLoad();
  //}, []);

  
  // react-query
  const { data, isLoading, isError } = useGetQuery();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <>
      {data?.map((animal) => (
        // ? =  null 이 포함된것 처리
        <div key={animal.no}>{animal.name}</div>
      ))}
    </>
  );
};

export default App;
