const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ task: { title, isCompleted }, deleteTask, editTask, index }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  // Все React инструменты (hook) начинаются с приставки use (использовать).
  // const [updatedTask, setUpdatedTask] = React.useState(title);
  const textRef = React.useRef(); // { current: document.getElementById() }
  // const completedRef = React.useRef(); // { current: document.getElementById() }

  // console.log(textRef);
  const handleClickSave = () => {
    // 1. При клике на кнопку Save меняем значение isEdit, что приводит к перерисовке всего, что зависит от его значения
    // setUpdatedTask(textRef.current.value);
    editTask(index, { title: textRef.current.value, isCompleted });
    setIsEdit(false);
  };

  //   const handleClickEdit = () => {
  //     setIsEdit(true);
  //   }

  return isEdit ? (
    <>
      <textarea ref={textRef} defaultValue={title}></textarea>
      <button onClick={handleClickSave}>Save</button>
    </>
  ) : (
    <>
      <p>{title}</p>
      {/* () => setIsEdit(true)       setIsEdit(true)          setIsEdit */}
      <input checked={isCompleted} onChange={() => editTask(index, { title, isCompleted: !isCompleted })} /*ref={completedRef}*/ type='checkbox'/>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={deleteTask}>Del</button>
    </>
  );
};

const TaskList = () => {
  //
  const [tasks, setTasks] = React.useState([
    { title: "Task 1", isCompleted: false },
    { title: "Task 2", isCompleted: false },
    { title: "Task 3", isCompleted: false }
  ]);
  const [newTask, setNewTask] = React.useState({ title: '', isCompleted: false });

  const addTask = () => {
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
      setTasks(tasksCopy);
    }
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => i !== index));
  };

  const editTask = (i, updatedTask) => {
    setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)));
  };

  return (
    <>
      <h1>Task Manager App</h1>
      <div>
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ title: e.target.value, isCompleted: false })}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={Math.random()}
            task={task}
            deleteTask={() => deleteTask(index)}
            editTask={editTask}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

root.render(
  <>
    <TaskList />
  </>
);

/*
    Режим просмотра:

    <p>Name</p>
    <button>Edit</button>
    <button>Del</button>

    Режим редактирования:

    <textarea>Name</textarea>
    <button>Save</button>
*/
