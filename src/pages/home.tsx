import TaskManager from "../components/TaskManager";
import "../Styles/global.css";


export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Task Manager</h1>
      <TaskManager />
    </div>
  );
}

