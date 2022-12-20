import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "Khaki"
};

//親のサイレントに伴って再レンダリングされないようにするmemo化
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("childAreaがレンダリングされた！！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
