import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("APP");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);
  //関数のmemo化
  const onClickClose = useCallback(() => setOpen(false), []);

  // 変数のmemo化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  const onClickCountUp = () => {
    setCount(count + 1);
    //setCountでStateの値が更新される
    //コンポーネントは再レンダリングされる。
    //DOMの差分を見て差分がある場所のみ更新される。
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

//stateが更新されたコンポーネントは再レンダリング
//propsが更新されたコンポーネントは再レンダリング
//再レンダリングされたコンポーネント配下の子要素は再レンダリング
