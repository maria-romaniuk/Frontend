import {  useState } from "react";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {
            title: 'Task1',
            description: 'task1 description',
            isTaskFinished: false,
            createdAt: new Date().toLocaleString(),
            isEdited: false
           
        },
        {
            title: 'Task2',
            description: 'task2 description',
            isTaskFinished: false,
            createdAt: new Date().toLocaleString(),
            isEdited: false
           
        },
        {
            title: 'Task3',
            description: 'task3 description',
            isTaskFinished: false,
            createdAt: new Date().toLocaleString(),
            isEdited: false
           
        }
    ]);
    const [newTask, setNewTask] = useState({ title: '', description: '', isTaskFinished: false, createdAt: '' });

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
        // setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)))
        // добавляем новое состояние изменения времен и даты. нужно передавать обратно кроме новоизененного таска еще и новое время
        setTasks(tasks.map((e, index) => (index === i ? { ...updatedTask, createdAt: new Date().toLocaleString() } : e)));


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

export default TaskList;