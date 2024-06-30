import { useState } from 'react'
import { useRef } from 'react'

// eslint-disable-next-line react/prop-types
const Task = ({ task: { title, description, isTaskFinished }, taskDelete, editTask, index }) => {

    const [isEdit, setIsEdit] = useState(false)
    const textRef = useRef();
    const titleRef = useRef();


    const handleClickSave = () => {

        editTask(index, { title: titleRef.current.value, description: textRef.current.value, isTaskFinished });
        setIsEdit(false);
    }


    return isEdit ? (
        <div className='d-flex  mt-3'>
            <input ref={titleRef} defaultValue={title} />
            <textarea ref={textRef} defaultValue={description}></textarea>
            <button onClick={handleClickSave} className='btn'><i className="fa-regular fa-floppy-disk"></i></button>

        </div>
    ) : (
        <div className={`task ${isTaskFinished ? 'finished' : ''}`}>
            <divc className='col-9'>
                <h4 style={{ textDecoration: isTaskFinished ? 'line-through' : 'none' }}>{title}</h4>
                <div>Description: <p>{description}</p></div>
            </divc>
            <div className='col-3'>
                <input type="checkbox" className='col-2 mx-2' checked={isTaskFinished} onChange={() => editTask(index, { title, description, isTaskFinished: !isTaskFinished })} />
                <button onClick={() => setIsEdit(true)} className='btn col-3 mx-2'><i className="fa-regular fa-pen-to-square"></i></button>
                <button onClick={taskDelete} className='btn col-3 mx-2'><i className="fa-regular fa-trash-can"></i></button>
                
            </div>
        </div>
    )
}

export default Task