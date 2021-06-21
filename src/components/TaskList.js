import Task from "./Task";

const TaskLIst = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((toDo) => (
        <Task toDo={toDo} />
      ))}
    </div>
  );
};

export default TaskLIst;
