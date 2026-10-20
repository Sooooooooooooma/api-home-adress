import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import PostCodeInput from "./Components/PostCodeInput";
import AddressInput from "./Components/AddressInput";

function App() {
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");

  const searchAddress = async () => {
    const response = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`,
    );
    const data = await response.json();
    console.log(data);
    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      setAddress(result.address1 + result.address2 + result.address3);
    }
    setPostCode("");
  };

  const showMap = () => {
    if (!address.trim()) {
      return;
    }

    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div>
        <Header />
      </div>
      {/* <div>
        <h2>郵便番号を入力</h2>
        <input
          placeholder="郵便番号を入力してください"
          onChange={(e) => setPostCode(e.target.value)}
          value={postCode}
        />
        <button onClick={searchAddress}>検索</button>
      </div> */}
      <PostCodeInput
        postCode={postCode}
        setPostCode={setPostCode}
        searchAddress={searchAddress}
      />
      <div>
        {/* <h2>住所</h2>
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
        <button onClick={showMap}>地図で表示する</button> */}
        {/* <p>{address}</p> */}
        {/* <p>{postCode}</p> */}
        <AddressInput
          address={address}
          setAddress={setAddress}
          showMap={showMap}
        />
      </div>
      
    </>
  );
}

export default App;
