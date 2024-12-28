import axios from "axios";
import React, { useState } from "react";

const Popup = ({ showup, score, oldFirstName }) => {
  const [name, setName] = useState("");

  async function updateScore() {
    let data1 = {
      oldFirstName: oldFirstName,
      newFirstName: name,
      newScore: score,
    };
    let data = await axios.post(
      "https://resturant-backend-34sx.onrender.com/resturant/v1/booking/updatescore",
      data1
    );
    console.log(data);
    showup(false);
  }

  function onConfirm() {
    if (name) {
      updateScore();
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Highest Record!!
        </h2>
        <input
          type="text"
          placeholder="Enter you name"
          value={name}
          onChange={(w) => setName(w.target.value)}
          className="border border-black rounded w-full p-1 mb-1"
        />
        <p>
          You have beaten the best of the best <b>{oldFirstName}</b>
        </p>
        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
