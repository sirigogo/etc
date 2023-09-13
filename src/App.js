/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let title = "ReactBlog";

  let [text, setText] = useState([
    "남자 코드 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }

  function changeText() {
    let copy = [...text];
    copy[0] = "여자 코드 추천";
    setText(copy);
  }

  function sortText() {
    let copy1 = [...text.sort()];
    setText(copy1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{title}</h4>
      </div>
      <button onClick={changeText}>글수정</button>
      <button onClick={sortText}>가나다순 정렬</button>
      {text.map((x) => {
        return (
          <div className="list">
            <h4>
              {x} <span onClick={clickLike}>😍</span> {like}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
