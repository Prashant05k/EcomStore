// import { useState } from "react";
import HomeBankContainer from "./container/HomeContainer";
// import NavBarContainer from "./container/NavBarContainer";

function App(props) {
  const { liftStateSearchData, handleSearch } = props;

  return (
    <>
      <HomeBankContainer
        liftStateSearchData={liftStateSearchData}
        handleSearch={handleSearch}
      />
    </>
  );
}

export default App;
