import Task from "./Task";

const TaskLIst = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((toDo, ind) => (
        <Task toDo={toDo} key={ind} />
      ))}
    </div>
  );
};

export default TaskLIst;
