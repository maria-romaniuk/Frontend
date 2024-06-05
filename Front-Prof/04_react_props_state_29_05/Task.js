//с большой буквы пишем если внутри компонент,
// компонент всегда называется с большой буквы

const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = ({title, del}) => {


    // const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false);
    //useState() -хук(инструмент или метод), который принимет дефолтное значение длкальнго состояния
    // возвращает tuples (кортеж / массив) из 2 элеметнов, 1 - данные которые мы туда складываем, 2 - метод, с пом которого будут мзненяться значения локального состояния.( что делаем с этими данными (как изменяем))
    //[isEdit, setIsEdit] Array(2)


    //isEdit = true; Ошибка! значение локального состояния изменилось, но React не следит за подобными изменениями
    //setIsEdit(true);  //так реакт слушает изменения локального состояния //корректный способ


    const textId = React.useRef();    // 1. ничего не приимает, а возвращает искомую сущность. получение абстрактной ссылки, которую моно повесить на любой из едементов

    const [updatedTask, setUpdatedTask] = React.useState(title);

    const handleClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    }

    // if (isEdit = true) { //тоже самое
    if (isEdit) {
        return (
            <>
                {/* <input readOnly value="name" /> */}
                {/* 2. соединяем асьрактную ссылку с конктретным елементом, на который ссылка будет вести */}
                <textarea defaultValue={updatedTask} ref={textId}></textarea>
                {/* <button onClick={() => setIsEdit(false)}>save</button>
                 */}
                {/* // выше тоже самое, что ниже, просто вынесли фунцию в отдельную функц */}
                <button onClick={handleClickSave}>save</button>
            </>
        )
    } else {
        return (
            <>
                {/* <h3>Name: </h3> */}
                <p>Description: {updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>edit</button>
                <button onClick={del}>delete</button>
            </>
        )
    }


}

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);
    const [newTask, setNewTask] = React.useState('');

    const deleteTask = (i) => {

        //глубокая копия массива. подходит для редактирования, оператор spread в [...] называется
        const tasksCopy = [...tasks]

        // удаление i-того элемента массива мз копии массива, вводим индекс и колчество что хотим удалить (1)
                tasksCopy.splice(i,1);

        // передали обновленную копию в качестве нового значение локального состояния
        setTasks(tasksCopy);
    }
    const addTask =() => {
        if(newTask.trim()){ //пустая строка бдет false. если там есть пробелы используем trim. он убирает пробелы и проверяет строку
        const newCopy = [... tasks];
        newCopy.push(newTask); 
        setTasks(newCopy); // обновение зачении оригинала на копию. оьправляем в таски! а не в новую
    }
        setNewTask('') //меняем значение инпута на пустое после отправки задач в массив задач
    }

    return (
        <>
        <h1>Todo List App</h1>
        <div>
            {/* требуется двухсторонняя связь. при изменении локального состояния должно меняться ив значении инпута и когда в зависимости от value всегда будет равно что написанов newTask. onChange срабатывает каждый раз когда меняется значение input*/}
            <input value ={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="enter your new task"/>
            <button onClick={addTask}>Add task</button>
        </div>
            {tasks.map((task, i) => (
                // свойство key является обязательным (слуэебный интсрумент React)
                //у нас нет доскупа к значению, переданного с помощью props key нам недоступен

                // делаем рандом для того, чтоб не удалялся последний елемент, а именно тот, что мы выбрали. у нег должен быть уникальный key

                //newDate().getTime() + task моожно использовать вместо Math. показывает в имлисекундах с 1970 года. если не добавляются задачи слигком быстро
                <Task key={Math.random()} title = {task} del = {() => deleteTask(i)}/>
                // index={i} если нам нужен игекс, то нам нужно создать его любым другим способом кроме key 
            ))
            }
        </>
    )
}



root.render(
    <TaskList />
)

// поверхностная копия массива
// копия ссылки на массив. грубо говоря это не копия
// поверхностная копия. просто присваеваем ссылку тасков новой конст. будет изменять изначальный массив
// подходит для чтрения
// const tasksCopy2 = tasks;