const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ task: { title, description, isTaskFinished }, taskDelete, editTask, index }) => {

    const [isEdit, setIsEdit] = React.useState(false)
    const textRef = React.useRef();
    const titleRef = React.useRef();


    const handleClickSave = () => {

        editTask(index, { title: titleRef.current.value, description: textRef.current.value, isTaskFinished });
        setIsEdit(false);
    }


    return isEdit ? (
        <div className='d-flex  mt-3'>
            <input ref={titleRef} defaultValue={title} />
            <textarea ref={textRef} defaultValue={description}></textarea>
            <button onClick={handleClickSave} className='btn'><i class="fa-regular fa-floppy-disk"></i></button>

        </div>
    ) : (
        <div className={`task ${isTaskFinished ? 'finished' : ''}`}>
            <divc className='col-9'>
                <h4 style={{ textDecoration: isTaskFinished ? 'line-through' : 'none' }}>{title}</h4>
                <div>Description: <p>{description}</p></div>
            </divc>
            <div className='col-3'>
                <input type="checkbox" className='col-2 mx-2' checked={isTaskFinished} onChange={() => editTask(index, { title, description, isTaskFinished: !isTaskFinished })} />
                <button onClick={() => setIsEdit(true)} className='btn col-3 mx-2'><i class="fa-regular fa-pen-to-square"></i></button>
                <button onClick={taskDelete} className='btn col-3 mx-2'><i class="fa-regular fa-trash-can"></i></button>
                
            </div>
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
        if (newTask.title.trim(' ')) {
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
    const sortedTasks = tasks.sort((a, b) => {
        if (a === newTask) return -1; // newTask всегда в начало
        if (b === newTask) return 1; // newTask всегда в начале после только что добавленной
        if (a.isTaskFinished === b.isTaskFinished) return 0; // Оставляем в текущем порядке, если одинаковые

        // Невыполненные задачи отображаются вверзху. выподенные должны уходить вконец списка
        return a.isTaskFinished ? 1 : -1;
    });

    return (
        <>
            <h1>Task manager App</h1>

            <div className='taskBlock d-flex flex-column col-6 mb-5'>
                <div className = ' d-flex flex-column'><span>Title:</span> <input type='text' value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} /></div>

                {/* //ошибка была из-за тогоБ что я передавала строку тайтл и булеан сразу. нужно было взять все состояние newTask и при реструктуризации добавить состояние что ввели в данное поле и остаивть newTask объектом */}

                <div className='d-flex flex-column mt-3'><span>Description:</span> <textarea type='text' value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}></textarea></div>
                <button className='btn align-self-end mt-3 col-2' onClick={addTask}>add</button>
            </div>
            <div className = 'col-6'>
                {sortedTasks.map((task, index) => (
                    <Task key={Math.random()}
                        task={task}
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
