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
import axios from "axios";
import Popup from "./Components/Popup";
import { CgProfile } from "react-icons/cg";
import { IoMoveSharp } from "react-icons/io5";

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
    { index: 27, value: 22, show: false, done: false, image: dragon },
    { index: 28, value: 22, show: false, done: false, image: dragon },
  ]);

  let [moves, setMoves] = useState(0);
  let [value, setValue] = useState({ first: undefined, second: undefined });
  let [gameOver, setGameOver] = useState(false);
  let [toggle, setToggle] = useState(false);
  let [highscore, setHighestScore] = useState();
  let [popup, showup] = useState();

  useEffect(() => {
    setData((prevData) => [...prevData].sort(() => Math.random() - 0.5));
    getScores();
  }, []);

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
      }, 800);
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
    setGameOver(data.every((ele) => ele.done === true));
  }, [toggle]);

  useEffect(() => {
    if (gameOver) {
      if (highscore?.score > moves) {
        showup(true);
      }
    }
  }, [gameOver]);

  async function getScores() {
    let data = await axios.get(
      "https://resturant-backend-34sx.onrender.com/resturant/v1/booking/getscore"
    );
    setHighestScore(data.data.data[0]);
  }

  return (
    <div className="border h-screen w-full">
      <div className="border  w-full h-10 flex items-center justify-between p-3">
        <span className="font-bold">
          <b className="text-yellow-700 text-2xl">M</b>emory game
        </span>{" "}
        <span className="flex justify-center items-center gap-1">
          <IoMoveSharp />
          Moves {moves}
        </span>
      </div>
      <div className="  w-full h-10 gap-5 flex justify-between md:justify-start items-center p-3">
        <span className="font-bold">
          <b>H</b>ighest Score
        </span>
        <span className="flex justify-center items-center gap-1">
          <CgProfile />
          <span className="font-semibold">{highscore?.firstName}</span>
        </span>
        <span className="flex justify-center items-center gap-1">
          <IoMoveSharp />
          {highscore?.score} Moves
        </span>
      </div>
      <div className=" grid md:grid-cols-6 grid-cols-4 m-auto md:grid-rows-6 grid-rows-10 gap-2 p-3 md:w-[70%]  h-screen">
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
      {popup && (
        <Popup
          showup={showup}
          oldFirstName={highscore?.firstName}
          score={moves}
        />
      )}
    </div>
  );
}

export default App;
