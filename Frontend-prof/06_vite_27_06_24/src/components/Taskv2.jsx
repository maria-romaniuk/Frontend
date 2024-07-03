// /* eslint-disable react/prop-types */
// import React from "react";

// const Task = ({ task: { title, description, isTaskFinished, createdAt, isEdited }, taskDelete, editTask, index }) => {

//     const [isEdit, setIsEdit] = React.useState(false)
//     const textRef = React.useRef();
//     const titleRef = React.useRef();


//     const handleClickSave = () => {

//         editTask(index, { title: titleRef.current.value, description: textRef.current.value, isTaskFinished, createdAt: new Date().toLocaleString(), isEdited: true });
//         setIsEdit(false);
//     }


//     return isEdit ? (
//         <div className='d-flex  mt-3'>
//             <input ref={titleRef} defaultValue={title} />
//             <textarea ref={textRef} defaultValue={description}></textarea>
//             <button onClick={handleClickSave} className='btn'><i class="fa-regular fa-floppy-disk"></i></button>

//         </div>
//     ) : (
//         <div className={`task ${isTaskFinished ? 'finished' : ''}`}>
//             <divc className='col-9'>
//                 <h4 style={{ textDecoration: isTaskFinished ? 'line-through' : 'none' }}>{title}</h4>
//                 <div>Description: <p>{description}</p></div>
//                 <div>{isEdited ? 'Last Edited:' : 'Created:'} <span>{createdAt}</span></div>
//             </divc>
//             <div className='col-3'>
//                 <input type="checkbox" className='col-2 mx-2' checked={isTaskFinished} onChange={() => editTask(index, { title, description, isTaskFinished: !isTaskFinished })} />
//                 <button onClick={() => setIsEdit(true)} className='btn col-3 mx-2'><i class="fa-regular fa-pen-to-square"></i></button>
//                 <button onClick={taskDelete} className='btn col-3 mx-2'><i class="fa-regular fa-trash-can"></i></button>
                
//             </div>
//         </div>
//     )
// }

// export default Task;