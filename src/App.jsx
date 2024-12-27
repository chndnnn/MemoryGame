import { useEffect, useState } from "react";
import Cards from "./Components/Cards";

function App() {
  let [data, setData] = useState([
    { index: 2, value: 11, show: false, done: false, image: "/apple.jpg" },
    { index: 1, value: 10, show: false, done: false, image: "/banana.jpg" },
    { index: 3, value: 12, show: false, done: false, image: "/coconut.jpg" },
    {
      index: 4,
      value: 13,
      show: false,
      done: false,
      image: "/custardapple.jpg",
    },
    { index: 5, value: 14, show: false, done: false, image: "/grapes.jpg" },
    { index: 6, value: 15, show: false, done: false, image: "/orange.jpg" },
    { index: 7, value: 16, show: false, done: false, image: "/papaya.jpg" },
    { index: 8, value: 17, show: false, done: false, image: "/pineaaple.jpg" },
    {
      index: 9,
      value: 18,
      show: false,
      done: false,
      image: "/purplegrapes.jpg",
    },
    {
      index: 10,
      value: 19,
      show: false,
      done: false,
      image: "/watermelon.jpg",
    },
    { index: 11, value: 11, show: false, done: false, image: "/apple.jpg" },
    { index: 12, value: 10, show: false, done: false, image: "/banana.jpg" },
    { index: 13, value: 12, show: false, done: false, image: "/coconut.jpg" },
    {
      index: 14,
      value: 13,
      show: false,
      done: false,
      image: "/custardapple.jpg",
    },
    { index: 15, value: 14, show: false, done: false, image: "/grapes.jpg" },
    { index: 16, value: 15, show: false, done: false, image: "/orange.jpg" },
    { index: 17, value: 16, show: false, done: false, image: "/papaya.jpg" },
    { index: 18, value: 17, show: false, done: false, image: "/pineaaple.jpg" },
    {
      index: 19,
      value: 18,
      show: false,
      done: false,
      image: "/purplegrapes.jpg",
    },
    {
      index: 20,
      value: 19,
      show: false,
      done: false,
      image: "/watermelon.jpg",
    },
    { index: 21, value: 16, show: false, done: false, image: "/papaya.jpg" },
    { index: 22, value: 17, show: false, done: false, image: "/pineaaple.jpg" },
    { index: 23, value: 16, show: false, done: false, image: "/papaya.jpg" },
    { index: 24, value: 17, show: false, done: false, image: "/pineaaple.jpg" },
    { index: 25, value: 21, show: false, done: false, image: "/straw.jpg" },
    { index: 26, value: 21, show: false, done: false, image: "/straw.jpg" },
    { index: 27, value: 22, show: false, done: false, image: "/pear.jpg" },
    { index: 28, value: 22, show: false, done: false, image: "/pear.jpg" },
    { index: 29, value: 23, show: false, done: false, image: "/dragon.jpg" },
    { index: 30, value: 23, show: false, done: false, image: "/dragon.jpg" },
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
