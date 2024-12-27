const Cards = ({ value, setValue, setData, setMoves }) => {
  function onCardclick() {
    setData((prev) =>
      prev.map((item) =>
        item.index === value.index ? { ...item, show: true } : item
      )
    );

    setValue((prev) => {
      if (!prev.first) {
        return { ...prev, first: value.value };
      } else {
        return { ...prev, second: value.value };
      }
    });

    setMoves((prev) => prev + 1);
  }
  return (
    <div className="border rounded ">
      {value.show || value.done ? (
        <div className="h-full w-full rounded overflow-hidden flex justify-center p-3 font-bold text-5xl items-center">
          <img
            src={value.image}
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
      ) : (
        <div
          className="h-full w-full bg-black rounded overflow-hidden"
          onClick={onCardclick}
        >
          No
        </div>
      )}
    </div>
  );
};

export default Cards;
