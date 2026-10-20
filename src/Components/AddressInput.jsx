import React from "react";

const AddressInput = ({address,setAddress,showMap}) => {
  return (
    <div>
      <h2>住所</h2>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={showMap}>地図で表示する</button>
    </div>
  );
};

export default AddressInput;
