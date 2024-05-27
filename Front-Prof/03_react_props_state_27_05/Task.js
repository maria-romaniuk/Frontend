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


    // if (isEdit = true) { //тоже самое
    if (isEdit) {
        return (
            <>
                <input readOnly value="name" />
                <textarea defaultValue = 'description'></textarea>
                <button onClick = {() => setIsEdit(false)}>save</button>
            </>
        )
    } else {
        return (
            <>
                <h3>Name: </h3>
                <p>Description: </p>
                <button onClick = {() => setIsEdit(true)}>edit</button>
                <button>delete</button>
            </>
        )
    }


}

root.render(
    <Task />
)