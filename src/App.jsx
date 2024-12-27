import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import apple from "/apple.jpg";
import banana from "/banana.jpg";
import coconut from "/coconut.jpg";
import custardapple from "/custardapple.jpg";
import grapes from "/grapes.jpg";
import orange from "/orange.jpg";
import papaya from "/papaya.jpg";
import pineapple from "/pineaaple.jpg";
import purplegrapes from "/purplegrapes.jpg";
import watermelon from "/watermelon.jpg";
import straw from "/straw.jpg";
import pear from "/pear.jpg";
import dragon from "/dragon.jpg";

function App() {
  let [data, setData] = useState([
    { index: 1, value: 10, show: false, done: false, image: banana },
    { index: 2, value: 11, show: false, done: false, image: apple },
    { index: 3, value: 12, show: false, done: false, image: coconut },
    { index: 4, value: 13, show: false, done: false, image: custardapple },
    { index: 5, value: 14, show: false, done: false, image: grapes },
    { index: 6, value: 15, show: false, done: false, image: orange },
    { index: 7, value: 16, show: false, done: false, image: papaya },
    { index: 8, value: 17, show: false, done: false, image: pineapple },
    { index: 9, value: 18, show: false, done: false, image: purplegrapes },
    { index: 10, value: 19, show: false, done: false, image: watermelon },
    { index: 11, value: 10, show: false, done: false, image: banana },
    { index: 12, value: 11, show: false, done: false, image: apple },
    { index: 13, value: 12, show: false, done: false, image: coconut },
    { index: 14, value: 13, show: false, done: false, image: custardapple },
    { index: 15, value: 14, show: false, done: false, image: grapes },
    { index: 16, value: 15, show: false, done: false, image: orange },
    { index: 17, value: 16, show: false, done: false, image: papaya },
    { index: 18, value: 17, show: false, done: false, image: pineapple },
    { index: 19, value: 18, show: false, done: false, image: purplegrapes },
    { index: 20, value: 19, show: false, done: false, image: watermelon },
    { index: 21, value: 20, show: false, done: false, image: straw },
    { index: 22, value: 20, show: false, done: false, image: straw },
    { index: 23, value: 21, show: false, done: false, image: pear },
    { index: 24, value: 21, show: false, done: false, image: pear },
    { index: 25, value: 22, show: false, done: false, image: dragon },
    { index: 26, value: 22, show: false, done: false, image: dragon },
  ]);

  useEffect(() => {
    setData((prevData) => [...prevData].sort(() => Math.random() - 0.5));
  }, []);

  let [moves, setMoves] = useState(0);
  let [value, setValue] = useState({ first: undefined, second: undefined });

  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (value.first != value.second) {
      setTimeout(() => {
        setData((prevData) =>
          prevData.map((ele) =>
            ele.show !== false && ele.done == false
              ? { ...ele, show: false }
              : ele
          )
        );
        setToggle((prev) => !prev);
      }, 1000);
    } else {
      setData((prevData) =>
        prevData.map((ele) =>
          ele.show !== false ? { ...ele, done: true } : ele
        )
      );
      setToggle((prev) => !prev);
    }
  }, [value.second]);

  useEffect(() => {
    setValue((prev) => {
      return { first: undefined, second: undefined };
    });
  }, [toggle]);

  return (
    <div className="border h-screen w-full">
      <div className="border  w-full h-10 flex items-center justify-between p-3">
        <span className="font-bold">
          <b>M</b>emory game
        </span>{" "}
        <span>Moves {moves}</span>
      </div>
      <div className="border grid md:grid-cols-6 grid-cols-4 m-auto md:grid-rows-6 grid-rows-10 gap-2 p-3 md:w-[70%]  h-screen">
        {data.map((ele) => {
          return (
            <Cards
              key={ele.index}
              value={ele}
              setValue={setValue}
              setMoves={setMoves}
              setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
