const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ task:{title, description,isTaskFinished}, taskDelete, editTask, index }) => {

    const [isEdit, setIsEdit] = React.useState(false)
    const textRef = React.useRef();
    const titleRef = React.useRef();
    

    const handleClickSave = () => {

        editTask(index, { title: titleRef.current.value, description: textRef.current.value, isTaskFinished });
        setIsEdit(false);
    }


    return isEdit ? (
        <div>
            <input ref={titleRef} defaultValue={title} />
            <textarea ref={textRef} defaultValue={description}></textarea>
            <button onClick={handleClickSave}>Save</button>

        </div>
    ) : (
        <div className={`task ${isTaskFinished ? 'finished' : ''}`}>
            <h2 style={{ textDecration: isTaskFinished ? 'line-through' : 'none' }}>Name: {title}</h2>
            <p>Description: {description}</p>
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button onClick={taskDelete}>Delete</button>
            <input type="checkbox" checked={isTaskFinished} onChange={() => editTask(index, { title, description, isTaskFinished: !isTaskFinished })} />
        </div>
    )
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState([
        {
            title: 'Task1',
            description: 'task1 description',
            isTaskFinished: false
        },
        {
            title: 'Task2',
            description: 'task2 description',
            isTaskFinished: false
        },
        {
            title: 'Task3',
            description: 'task3 description',
            isTaskFinished: false
        }
    ]);
    const [newTask, setNewTask] = React.useState({ title: '', description: '', isTaskFinished: false });

    const addTask = () => {
// description может оставаться пустым
        if (newTask.title.trim() ) {
            const tasksListCopy = [...tasks];
            tasksListCopy.push(newTask);
            setTasks(tasksListCopy);

        }
    }


    const handleDelete = (i) => {

        setTasks(tasks.filter((_, index) => i !== index))
    };

    const editTask = (i, updatedTask) => {

        setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)))


    }

    return (
        <>
            <h1>Task manager App</h1>

            <div>
                <input type='text' value={newTask.title} onChange={(e) => setNewTask({ title: e.target.value, isTaskFinished: false })} />

                <textarea type='text' value={newTask.description} onChange={(e) => setNewTask(e.target.value)}></textarea>
                <button onClick={addTask}>add</button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <Task key={Math.random()}
                        title={title}
                        description={description}
                        isTaskFinished={task.isTaskFinished}
                        taskDelete={() => handleDelete(index)} editTask={editTask}
                        index={index} />
                ))
                }
            </div>
        </>
    )
}

root.render(
    <>
        <TaskList />
    </>
);
