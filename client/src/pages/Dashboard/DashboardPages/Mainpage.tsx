import React from 'react'
import { useRecoilValue } from 'recoil'
import { ActiveAtom } from '../../store/atom';
import Welcome from './Welcome';
import Contact from './Contact';
import Document from './Document';
import Profile from './Profile';
import Skilltracker from './Skilltracker';
import Taskscheduler from './Taskscheduler';
import MyJobTracker from '../../JobTracker/MyJobTracker';
import Board from '../../JobTracker/Board';

export default function Mainpage() {
  const mainpage = useRecoilValue(ActiveAtom);
  function setmainpage(){
    switch(mainpage){
      case "welcome":
        return <Welcome />;
      case "skilltracker":
        return <Skilltracker />;
      case "taskscheduler":
        return <Taskscheduler />;
      case "profile":
        return <Profile />;
      case "contact":
        return <Contact />;
      case "document":
        return <Document />;
      case "jobtracker":
        return <Board />;
      default:
        return <Welcome />;
    }
  }
  return (
    <>
   <div className=''> {setmainpage()}</div>
    </>
  )
}
