const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = () =>{
    // React.useState() //метод. начальное значение локального состояния. при изменение локального сост будет происхоить перерендео того что изменяется, значение. при слабои интернете это очень важное значение. сначала передаем стартовое значение
    const [isEdit, setIsEdit] = React.useState(false)  //редактирование изначально в режиме просмотра isEdit-false// особбый мтод за которым сделит реакт. который отправляет изменения в массив

    //isEdit менять напрямую нельзя. она константа  по js. реакт не следит напрямую за isedit а следит за отправкой через setisEdit. если мы напишем isEdit =true ничего не проихойдет даже если изменим на let. реакт не будет следить за этим изменением.



    return isEdit ?(
        <div>
            <input placeholder='name'></input>
            <textarea placeholder ='description'></textarea>
            <button onClick= {() => setIsEdit(false)}>Save</button>
        </div>
    ) : (
        <div>
            <h2>Name: </h2>
            <p>Description: </p>
            <button onClick ={() => setIsEdit(true)}>Edit</button>
            <button>Delete</button>
        </div>
    )
   
}

//вызов setIsEit внутри стрелочной функции - В этом случае setIsEdit(true) вызывается сразу же, когда компонент рендерится, и результат вызова (undefined, так как setIsEdit не возвращает значение) передается как значение атрибута onClick. Поэтому при клике на кнопку ничего не произойдет, так как onClick не является функцией.
// В случае со стрелочной функцией () => setIsEdit(true) создается и передается как обработчик события onClick. Когда кнопка нажимается, стрелочная функция выполняется, и setIsEdit(true) вызывается именно в этот момент.



// <p> Name:</p> 
//<button>Edit</button>
//<button>Delete</button>


//textarea>
//<button> safe</button>

root.render(
    <>
       <Task />
    </>
);