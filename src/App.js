import { useState } from "react";
import HomeBankContainer from "./container/HomeContainer";
import NavBarContainer from "./container/NavBarContainer";

function App() {
  const [liftStateSearchData, setLiftStateSearchData] = useState("");
  function handleSearch(e) {
    const searchData = e ? e : "";
    // console.log('searchData', searchData);
    setLiftStateSearchData(searchData);
  }
  // console.log("liftStateSearchData", liftStateSearchData);

  return (
    <>
      <NavBarContainer handleSearch={handleSearch} />
      <HomeBankContainer
        liftStateSearchData={liftStateSearchData}
        handleSearch={handleSearch}
      />
    </>
  );
}

export default App;
