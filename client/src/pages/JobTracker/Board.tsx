import React, { useEffect, useState } from 'react';
import Modal from '../../components/JobModal';
import axios from 'axios';
import JobBox from '../../components/JobBox';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function useJobdetail(n: number) {
  const [job, setJob] = useState<any[]>([]);

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/job/getjobdetails`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        });
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();


    const interval = setInterval(fetchJobs, n * 1000);

    return () => clearInterval(interval);
  }, [n]);

  return job;
}

function Board() {
  const [isModalopen, setModalopen] = useState(false);
  const JobData = useJobdetail(10);
  const [jobdetail, setJobdetails] = useState<any[]>([]);

  useEffect(() => {
    setJobdetails(JobData);
  }, [JobData]);

  console.log("this is job details", jobdetail);
  
  
  const jobwishlist = jobdetail.filter((item) => item.status === "wishlist");
  const jobapplied = jobdetail.filter((item) => item.status === "applied");
  const jobinterview = jobdetail.filter((item) => item.status === "interview");
  const joboffer = jobdetail.filter((item) => item.status === "offer");
  const jobrejected = jobdetail.filter((item) => item.status === "rejected");
  
  function onpress2() {
    setModalopen(true);
  }
  function handleCloseModal() {
    setModalopen(false);
  }
  
  async function handleDragEnd(result) {
    console.log("Drag end triggered", result); 
    
    const { source, destination } = result;
    
    if (!destination) {
      console.log("No destination, returning"); 
      return;
    }  
    if (source.droppableId === destination.droppableId) {
      console.log("Same source and destination, returning");
    }
    
    const draggedItem = jobdetail.find(
      (job) => job._id.toString() === result.draggableId
    );
    
    if (!draggedItem) {
      console.log("No dragged item found", result.draggableId);
      return;
    }
    
    console.log("Updating item:", draggedItem); 
    
   
    const updatedJobs = jobdetail.map(job => 
      job._id === draggedItem._id 
        ? { ...job, status: destination.droppableId }
        : job
    );
    setJobdetails(updatedJobs);
    
    try {
      
      const response = await axios.put(
        `${API_BASE_URL}/api/job/updatestatus`,
        {
          id: draggedItem._id,
          newstatus: destination.droppableId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log("Update successful:", response.data); 
    } catch (error) {
      
      console.error("Error updating job status:", error);
      setJobdetails(jobdetail);
    }
  }
  // function onpress2(){
  //   setModalopen(true);
  // }
  // function handleCloseModal(){
  //   setModalopen(false);
  // }
  
  return (
    <>
    <div className='m-1 flex flex-row justify-between'>
  <div className='text-color2 font-semibold text-center'>Board</div>
  <div className='last-order'>
    <button className='p-1 rounded bg-customColor text-white' onClick={onpress2}>
      Create
    </button>
  </div>
</div>
    <DragDropContext onDragEnd={handleDragEnd}>
      <section id="boards" className="overflow-x-hidden">
        <div className="flex flex-row">
          <div className="min-h-screen box-border border-r-2 inline-block align-top flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className='align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">star</span>
              <span className='ml-[40px] text-t1 font-[600]'> WISHLIST</span>
              <center>{jobwishlist.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
            </button>
            <Droppable droppableId="wishlist">
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  {...provided.droppableProps} 
                  className="flex-1 overflow-y-auto min-h-[200px]"
                >
                  {jobwishlist.map((item, index) => (
                    <Draggable 
                      key={item._id} 
                      draggableId={item._id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            marginBottom: '8px',
                            opacity: snapshot.isDragging ? 0.8 : 1
                          }}
                        >
                          <JobBox 
                            title={item.title} 
                            company={item.company}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="min-h-screen box-border border-r-2 inline-block align-top flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className='align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">draft</span>
              <span className='ml-11 text-t1 font-[600]'>APPLIED</span>
              <center>{jobapplied.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
            </button>
            <Droppable droppableId="applied">
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  {...provided.droppableProps} 
                  className="flex-1 overflow-y-auto min-h-[200px]"
                >
                  {jobapplied.map((item, index) => (
                    <Draggable 
                      key={item._id} 
                      draggableId={item._id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            marginBottom: '8px',
                            opacity: snapshot.isDragging ? 0.8 : 1
                          }}
                        >
                          <JobBox 
                            title={item.title} 
                            company={item.company}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="min-h-screen box-border border-r-2 inline-block align-top flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className='align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">business_center</span>
              <span className='ml-11 text-t1 font-[600]'>INTERVIEW</span>
              <center>{jobinterview.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
            </button>
            <Droppable droppableId="interview">
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  {...provided.droppableProps} 
                  className="flex-1 overflow-y-auto min-h-[200px]"
                >
                  {jobinterview.map((item, index) => (
                    <Draggable 
                      key={item._id} 
                      draggableId={item._id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            marginBottom: '8px',
                            opacity: snapshot.isDragging ? 0.8 : 1
                          }}
                        >
                          <JobBox 
                            title={item.title} 
                            company={item.company}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="min-h-screen box-border border-r-2 inline-block align-top flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className='align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">emoji_events</span>
              <span className='ml-11 text-t1 font-[600]'>OFFER</span>
              <center>{joboffer.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
            </button>
            <Droppable droppableId="offer">
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  {...provided.droppableProps} 
                  className="flex-1 overflow-y-auto min-h-[200px]"
                >
                  {joboffer.map((item, index) => (
                    <Draggable 
                      key={item._id} 
                      draggableId={item._id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            marginBottom: '8px',
                            opacity: snapshot.isDragging ? 0.8 : 1
                          }}
                        >
                          <JobBox 
                            title={item.title} 
                            company={item.company}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="min-h-screen box-border inline-block align-top flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className='align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">thumb_down</span>
              <span className='ml-11 text-t1 font-[600]'>REJECTED</span>
              <center>{jobrejected.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
            </button>
            <Droppable droppableId="rejected">
              {(provided) => (
                <div 
                  ref={provided.innerRef} 
                  {...provided.droppableProps} 
                  className="flex-1 overflow-y-auto min-h-[200px]"
                >
                  {jobrejected.map((item, index) => (
                    <Draggable 
                      key={item._id} 
                      draggableId={item._id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            marginBottom: '8px',
                            opacity: snapshot.isDragging ? 0.8 : 1
                          }}
                        >
                          <JobBox 
                            title={item.title} 
                            company={item.company}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </section>
    </DragDropContext>
    <Modal isModalopen={isModalopen} onClose={handleCloseModal} />
    </>
  );
}

export default Board;
