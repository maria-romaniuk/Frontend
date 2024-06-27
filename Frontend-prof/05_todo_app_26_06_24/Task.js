const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ title, description, taskDelete, editTask, index, isTaskFinished }) => {


    // const [titleUpdated, setTitleUpdated] = React.useState(title);
    // const [textUpdated, setTextUpdated] = React.useState(description); // это уже не нужно. мы меняем из массива tasklist меняем ниже значения на те, что пришли из массыва
    // const [isTaskFinished, setIsTaskFinished] = React.useState(false);

    const [isEdit, setIsEdit] = React.useState(false)
    const textRef = React.useRef(description);
    const titleRef = React.useRef(title);
    // { current: document.getElementById() }
    const completedRef = React.useRef();

    const handleClickSave = () => {

        editTask(index, {title: titleRef.current.value, description: textRef.current.value, isTaskFinished});
        setIsEdit(false);
        // setTextUpdated(textRef.current.value);
        // setTitleUpdated(titleRef.current.value)
        // при этом не изменяем массив. изменили отображение на странице, это не зависит от локального состояния. нужно менять массив tasks

        

    }


    return isEdit ? (
        <div>
            <input ref={titleRef} defaultValue={title} />
            <textarea ref={textRef} defaultValue={description}></textarea>
            <button onClick={handleClickSave}>Save</button>

        </div>
    ) : (
        <div className={`task ${isTaskFinished ? 'finished' : ''}`}>
            <h2 style={{textDecration: isTaskFinished ? 'line-through' : 'none'}}>Name: {title}</h2>
            <p>Description: {description}</p>
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button onClick={taskDelete}>Delete</button>
            {/* <input type="checkbox" checked={isTaskFinished} onChange={() => setIsTaskFinished((prev) => !prev)}></input> */}
            <input type="checkbox" checked = {completedRef}  onChange = {() => editTask(index, {title, description, isTaskFinished: !isTaskFinished})}/>
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
    const [newTask, setNewTask] = React.useState({title: '', description:'', isTaskFinished: false});
    // тайтл написан пустым, чтоб не попасть в трим ниже. при слуучайном нажатии ничего не произойдет

    const addTask = () => {
        // setTasks(tasks.push('test'))
        //с pushнужно осторожно. меняет оригинал и возвращает новую длинну массива

        // tasks.push('test');
        // setTasks(tasks);
        // тоже нельзя. создаем серую зону. сначла меняем оригинал и реакт за этим не следит. а потом уже отправляем. локальное начальное состояние не мутабельное

        if (newTask.trim()) { //когда пустая строка этого не делай. когда новая задача с удаленными лишними проблелами не равно нулю (true) тогда и делай действие внутри условия

            const tasksListCopy = [...tasks];
            tasksListCopy.push(newTask); // теперь можем пушть newtask. мы уже изменли его локальное состояние в инпуте
            setTasks(tasksListCopy);
            // создаем копию. ьуда отправляем новое значение и отправляем новый массив в массив тасков
        }   
    }

    // const handleDelete = (index) => {
    const handleDelete = (i) => { // для варианта 2.
        // //глубокая копия массива. подходит для редактирования, [...] оператор spread в  называется
        // const tasksCopy = [...tasks]

        // // удаление i-того элемента массива мз копии массива, вводим индекс и колчество что хотим удалить (1)
        // tasksCopy.splice(index, 1);

        // // передали обновленную копию в качестве нового значение локального состояния
        // setTasks(tasksCopy);

        //!!!! var2
        //filter работает с копией. возвращает копию. можно не создавать отодельную переменную для копии
        // setTasks(tasks.filter((e, index) => i !== index))
        setTasks(tasks.filter((_, index) => i !== index)) // доступа к параметру е не будет. будет работать также, что и выше
        // индекс той хзадачи, что хотим удалить не совпадал с индексом. в отфильрованую копию попали все кроме учитываемого индекса
    };

    const editTask = (i, updatedTask) =>{
        // принимаеи еще и парамент нового значения имени. мы еще не знаем какой. получаем новое в функции выще. 
        // updatedTask передаем объект
        
                //map и интеррирует массив и менет его знаение. тожн возвразает копию
                setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)))
        
                // index  === i равен ли игдеркс индексу интерриуемого елемента, то заменяем, если нет, то оставляем старое значение елемента
                // 
            }

    return (
        <>
            <h1>Task manager App</h1>

            <div>
                <input type='text' value={newTask.title} onChange={(e) => setNewTask({title:e.target.value, isTaskFinished: false})} />
                {/* //изначально будет занчение локального состояние newTask. во время перерендеринга будет изначально пустое*/}
                {/* //onChange принимает информацию о событии. потому е. onChange следит за вводом каждый буквы до нажатия кнопки */}
                {/* //двойная связка. можно заменить на useRef. каждый раз когда меняется знаение инпута поменяй значение локального состояния (управляемый компонент) */}
                {/* //oninput - вместо onChange -возможный аналог. следит за отменой фокуса на инпуте */}
                <textarea type='text' value={newTask.description} onChange={(e) => setNewTask(e.target.value)}></textarea>
                <button onClick={addTask}>add</button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <Task key={Math.random()} 
                        title={task.title} 
                        description={task.description} 
                        isTaskFinished={task.isTaskFinished}
                        taskDelete={() => handleDelete(index)} editTask = {editTask} 
                        index = {index}/>

                    // <Task key={React.usedId()} title = {task.title} description = {task.description} isTaskFinished = {task.isTaskFinished} 
                    // taskDelete={() => handleDelete(index)}/> //React.usedId()- подходит для использоваия одного айдшника. не подходит для большого кол-ва однотипных блоков

                    // должна представлять ф-цию обертку. передаем индекс ячкйки массива которую нужно удалить
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
