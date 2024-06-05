import React, { useRef, useState } from "react";

interface TaskProps {
  title: string;
  del: () => void;
}

const Task: React.FC<TaskProps> = ({ title, del }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string>(title);
  const textId = useRef<HTMLTextAreaElement>(null);

  const handleClickSave = () => {
    if (textId.current) {
      setUpdatedTask(textId.current.value);
    }
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <>
        <textarea ref={textId} defaultValue={updatedTask}></textarea>
        <button className="btn btn-success" onClick={handleClickSave}>
          Save
        </button>
      </>
    );
  } else {
    return (
      <div
        className="border border-primary-subtle w-50"
        style={{ margin: "0 auto" }}
      >
        <p className="mt-2">{updatedTask}</p>
        <div className="d-flex justify-content-center mb-5">
          <button className="btn btn-warning" onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={del}>
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default Task;
