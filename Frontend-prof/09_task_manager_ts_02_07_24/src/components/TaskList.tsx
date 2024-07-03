import { useEffect, useState } from "react";
// import axios from "axios";
import Task from "./Task";

export interface ITask {
  title: string;
  isCompleted: boolean;
  updatedAt: number | string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<Omit<ITask, 'updatedAt'>>({
    title: "",
    isCompleted: false,
  });
//Omit работает с дженериком. интсрумент который работает с существующим обектом. будет браться все, кроме ключа. передаем обект и что из него нужно исключить 
  
const sortByDate = (arr: ITask[]) => {
  return arr.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
};

  useEffect(() => {
    //инструмент позволяет работать с жизненным циклом инструмента. вначале идут хуки потом кастомные инструменты. сначала хуки реакта а потом мы пишем уже свой код
    // 
    const fetchTodos = async () => {
      try {
        // const data = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        // const data = await response.json() as {title: string, completed: boolean}; // мы уже знаем какую инфу мы получаем. то что получаем будет считать как и сообщаем что (массив объектов)
        const data = await response.json();
        console.log(data);
        // убираем из useState массив тот, что мы сами написали. ограничиваем жсон в 10 штук отображения. разбираем и возвращаем копию.ниже присваеваем таску эти задачи

        setTasks(
          sortByDate(
            data.splice(0, 10)
              .map((e: { title: string, completed: boolean }) => ({
                title: e.title,
                isCompleted: e.completed,
                updatedAt: new Date(
                  Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30
                ),
              }))
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos()
  }, []);

  const addTask = () => {
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.unshift({ ...newTask, updatedAt: new Date().toISOString() });
      setTasks(tasksCopy);
      setNewTask({title: '', isCompleted:false});
    }
  };

  const deleteTask = (i:number) => {
    setTasks(tasks.filter((_, index) => i !== index));
  };

  const editTask = (i:number, updatedTask: ITask) => {
    setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)));
  };

// сортируем задачи
// const sortedTasks =(arr: ITask[]) =>{
//     arr.sort((a, b) => {
//         // выполненные уходят вконец списка
//         if (a.isCompleted !== b.isCompleted) {
//           return a.isCompleted ? 1 : -1;
//         }
//         // дальше если не выполнено просто сортируем по времени обновления
//         return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
//       });
// }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Task Manager App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({ title: e.target.value, isCompleted: false })
          }
          className="form-control"
          placeholder="New Task"
        />
        <button onClick={addTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
            editTask={editTask}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

//useEffect (() => {}, []) - ничего не возвращает.метод принимает 2 параметра - функцмя и массив. в массив передаем инфу о зависимостях при обновлении которых будет перезапускаться данная функция прописанная ранее. если осталяем пустым, то запустится функцмя только один раз пока будет монтироваться компонент (создаваться).
// нам перехапустать не нужно. мы просто полуачем список хадач

//npm i axios - библиотека. позволяет более удобным способом работать с fetch запросами. не реакта. можно работать даже с обычным js. замена метода fetch. не нужно асинхронно обращаться к серверу потом к методу json и только потом делать что-то. делаем все и сразу