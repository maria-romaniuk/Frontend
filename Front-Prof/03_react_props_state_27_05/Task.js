//с большой буквы пишем если внутри компонент,
// компонент всегда называется с большой буквы

const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = () => {


    // const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false);
    //useState() -хук(инструмент или метод), который принимет дефолтвое значение длкальнго состояния
    // возвращает tuples (кортеж / массив) из 2 элеметнов, 1 - данные которые мы туда складываем, 2 - метод, с пом которого будут мзненяться значения локального состояния.( что делаем с этими данными (как изменяем))
    //[isEdit, setIsEdit] Array(2)


    //isEdit = true; Ошибка! значение локального состояния изменилось, но React не следит за подобными изменениями
    //setIsEdit(true);  //так реакт слушает изменения локального состояния //корректный способ


    const textId = React.useRef();    // 1. ничего не приимает, а возвращает искомую сущность. получение абстрактной ссылки, которую моно повесить на любой из едементов

    const [updatedTask, setUpdatedTask] = React.useState('Task1');

    const handleClickSave = () =>{
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    }

    // if (isEdit = true) { //тоже самое
    if (isEdit) {
        return (
            <>
                <input readOnly value="name" />
                {/* 2. соединяем асьрактную ссылку с конктретным елементом, на который ссылка будет вести */}
                <textarea defaultValue = {updatedTask} ref={textId}></textarea>
                <button onClick = {() => setIsEdit(false)}>save</button> 
                {/* // выше тоже самое, что ниже, просто вынесли фунцию в отдельную функц */}
                <button onClick = {handleClickSave}>save</button>
            </>
        )
    } else {
        return (
            <>
                <h3>Name: </h3>
                <p>Description: {updatedTask}</p>
                <button onClick = {() => setIsEdit(true)}>edit</button>
                <button>delete</button>
            </>
        )
    }


}

root.render(
    <Task />
)