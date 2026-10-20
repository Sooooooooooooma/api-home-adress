import React from "react";

const PostCodeInput = ({ postCode, setPostCode, searchAddress }) => {
  return (
    <div>
      <h2>郵便番号を入力</h2>
      <input
        placeholder="郵便番号を入力してください"
        onChange={(e) => setPostCode(e.target.value)}
        value={postCode}
      />
      <button onClick={searchAddress}>検索</button>
    </div>
  );
};

export default PostCodeInput;
