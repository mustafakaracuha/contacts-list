import React from 'react'

function index({filterLetter,setFilterLetter}) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const clearFilter = () => {
    setFilterLetter(null);
  };


  return (
    <div className="fixed top-[16rem] ml-[24.7rem] max-sm:top-[15.5rem] max-sm:ml-[24rem] m-auto text-center flex flex-col z-50 animation-letter">
    {filterLetter && (
      <button
        key="clearButton"
        onClick={clearFilter}
        className="text-center text-xs mr-2 font-semibold transition-all duration-300 text-rose-500 cursor-pointer mb-1"
      >
        X
      </button>
    )}
    {letters.map((letter) => (
      <>
        <button
          key={letter}
          className={`mr-2 text-xs cursor-pointer mb-1 font-semibold transition-all duration-300 ${
            filterLetter === letter ? "text-violet-200" : "text-[#8B5CF6]"
          }`}
          onClick={() => setFilterLetter(letter)}
        >
          {letter}
        </button>
      </>
    ))}
  </div>
  )
}

export default index
