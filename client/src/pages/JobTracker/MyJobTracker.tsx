import React, { useState, useMemo } from "react";
import JobModal from "../../components/JobModal";
import Activities from "./Activities";
import Board from "./Board";


export default function MyJobTracker() {
  const [activeSegment, setActiveSegment] = useState("home");
  const[isModalopen, setModalopen] = useState(false);
  

  const renderContent = () => {
    switch (activeSegment) {
      case "boards":
        return <Board />
      case "activities":
        return <Activities />
      default:
        return;
    }
  };

  function onpress2(){
    setModalopen(true);
  }
  function handleCloseModal(){
    setModalopen(false);
  }


  return (
    <>
    <div>
      <div className="list-none border-b-2 fixed flex  w-[100vw]">
        <div className="inline-block flex justify-between">
        <div className="order-2">
        <div className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("boards")}>
          <span className="material-symbols-outlined align-bottom">home</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Board</span>
        </div>
        <div className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("activities")}>
          <span className="material-symbols-outlined align-bottom">description</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Activities</span>
        </div>
        </div>
        <div className="order-3">
        <div className="m-1 text-t1 inline-block ">
            <button className="rounded-lg p-1 mt-2 bg-customColor text-white" onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
              Create
            </button>
          </div>
        </div>
          
        </div>
      </div>


       
      <JobModal isModalopen={isModalopen} onClose={handleCloseModal} />


      <div className="pt-14">
        {renderContent()}
      </div>
    </div>
    </>
  );
}
