const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({title, description, taskDelete}) =>{
    

    const [titleUpdated, setTitleUpdated] = React.useState(title);
    const [textUpdated, setTextUpdated] = React.useState(description);
    const [isTaskFinished, setIsTaskFinished] = React.useState(false);

    const [isEdit, setIsEdit] = React.useState(false)  
    const textRef = React.useRef(description);
    const titleRef = React.useRef(title);
    
    const handleClickSave = () => {

     
        setIsEdit(false);
        setTextUpdated(textRef.current.value);
        setTitleUpdated(titleRef.current.value)

    }

    const handleClickEdit = () => {
        setIsEdit(true);
    }

    return isEdit ?(
        <div>
            <input ref={titleRef} defaultValue = {titleUpdated}></input>
            <textarea ref={textRef} defaultValue = {textUpdated}></textarea>
            <button onClick= {handleClickSave}>Save</button> 
           
        </div>
    ) : (
        <div className={`task ${isTaskFinished ? 'finished' : ''}`}>
            <h2>Name: {titleUpdated}</h2>
            <p>Description: {textUpdated}</p>
            <button onClick ={handleClickEdit}>Edit</button>
            <button onClick= {taskDelete}>Delete</button>
            <input type="checkbox" checked = {isTaskFinished} onChange={() => setIsTaskFinished((prev) => !prev)}></input>
        </div>
    )
}

const TaskList =() =>{
    const [tasks, setTasks] = React.useState([
        {title: 'Task1',
            description: 'task1 description',
            isTaskFinished: false
        },
        {title: 'Task2',
            description: 'task2 description',
            isTaskFinished: false
        },
        {title: 'Task3',
            description: 'task3 description',
            isTaskFinished: false
        }
    ])

    const handleDelete = (index) => {
        //глубокая копия массива. подходит для редактирования, [...] оператор spread в  называется
        const tasksCopy = [...tasks]

        // удаление i-того элемента массива мз копии массива, вводим индекс и колчество что хотим удалить (1)
                tasksCopy.splice(index,1);

        // передали обновленную копию в качестве нового значение локального состояния
        setTasks(tasksCopy);
      };
    return(
        <>
          {tasks.map((task,index) => (
                <Task key={Math.random()} title = {task.title} description = {task.description} isTaskFinished = {task.isTaskFinished} 
                taskDelete={() => handleDelete(index)}/>
            ))
            }
        </>
    )
}

root.render(
    <>
       <TaskList />
    </>
);
