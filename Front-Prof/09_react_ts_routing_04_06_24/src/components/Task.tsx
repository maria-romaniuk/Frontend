import { useRef, useState,  FC } from "react";

interface ITaskProps { title: string, del: () => void }

const Task: FC<ITaskProps> = ({ title, del }) => { //FunctionComponent = FC позволяет работать с женериками
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string | undefined>(title);
  const textId = useRef<HTMLTextAreaElement>(null);

  const handleClickSave = () => {
    // проверка на пустую строку. !  игнорирует проверку на null/undefined и делает все ошибкой.
    //? более корректн работает. делает проверку на null indefined и в случае, если проверка дала положительный результат возвразает undefined
    // по ключу 
    setUpdatedTask(textId.current?.value);

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
        className="border border-primary-subtle"
        style={{ margin: "5px auto", width: "33%" }}
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
