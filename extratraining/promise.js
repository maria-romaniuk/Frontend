// Promise — это встроенный объект в JavaScript, который представляет результат или ошибку асинхронной операции. Он является частью стандартного механизма работы с асинхронными задачами, позволяя вам выполнять код после завершения этих задач, независимо от того, завершились ли они успешно или произошла ошибка.

// Основные состояния Promise
// Promise может находиться в одном из трёх состояний:

// Pending (ожидание): Начальное состояние, не выполнено и не отклонено.
// Fulfilled (выполнено): Операция завершена успешно.
// Rejected (отклонено): Операция завершена с ошибкой.
// Создание и использование Promise
// Создать Promise можно с помощью конструктора Promise, который принимает функцию с двумя аргументами: resolve и reject. Эти функции используются для изменения состояния Promise:

// resolve переводит Promise в состояние "выполнено".
// reject переводит Promise в состояние "отклонено".
// Пример использования Promise

const firstPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
  });
  
  firstPromise1.then((value) => {
    console.log(value); // "one"
  });
  
//   В этом примере firstPromise является Promise, который выполнится через 500 миллисекунд и вызовет resolve с аргументом "one". Метод then регистрирует коллбэк, который будет вызван, когда Promise выполнится успешно.

//   Методы Promise
//   then(onFulfilled, onRejected?): Добавляет обработчики для выполнения и отклонения Promise.
//   catch(onRejected): Добавляет обработчик только для отклонения.
//   finally(onFinally): Добавляет обработчик, который будет выполнен независимо от исхода (успех или ошибка).



//   Примеры с объяснениями
//   Создание и выполнение Promise

const promise1 = new Promise((resolve, reject) => {
    // Имитация асинхронной операции, которая завершится через 1 секунду
    setTimeout(() => {
      resolve('Operation completed successfully');
    }, 1000);
  });
  
  promise1.then((result) => {
    console.log(result); // Выведет: Operation completed successfully
  }).catch((error) => {
    console.log(error);
  });


//   Отклонение Promise
  const promise2 = new Promise((resolve, reject) => {
    // Имитация асинхронной операции, которая завершится с ошибкой через 1 секунду
    setTimeout(() => {
      reject('Operation failed');
    }, 1000);
  });
  
  promise2.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error); // Выведет: Operation failed
  });



  //   Использование finally

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Operation completed successfully');
      // Или вызвать reject для ошибки
      // reject('Operation failed');
    }, 1000);
  });
  
  promise3.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log('Operation finished (success or failure)');
  });



//   1. Работа с сетевыми запросами
// Одним из наиболее распространенных примеров использования Promise является выполнение сетевых запросов, таких как запросы к API.

// Использование fetch для получения данных с сервера
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });


//   2. Чтение файлов с использованием FileReader
// Работа с файлами на стороне клиента, например, чтение файлов с использованием FileReader.

function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        resolve(reader.result);
      };
      
      reader.onerror = () => {
        reject(new Error('Ошибка чтения файла'));
      };
      
      reader.readAsText(file);
    });
  }
  
  const fileInput = document.querySelector('input[type="file"]');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    readFile(file)
      .then(content => {
        console.log('Содержимое файла:', content);
      })
      .catch(error => {
        console.error(error);
      });
  });
  

//   3. Таймеры и задержки
// Promise может быть использован для создания задержек в выполнении кода.
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  delay(2000).then(() => {
    console.log('Прошло 2 секунды');
  });
  
//   4. Последовательное выполнение асинхронных операций
// Promise позволяет выполнять асинхронные операции последовательно.
function asyncOperation(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
  }
  
  asyncOperation('Первый вызов')
    .then(result => {
      console.log(result);
      return asyncOperation('Второй вызов');
    })
    .then(result => {
      console.log(result);
      return asyncOperation('Третий вызов');
    })
    .then(result => {
      console.log(result);
    });
  
//     5. Параллельное выполнение асинхронных операций
// С помощью Promise.all можно выполнять несколько асинхронных операций параллельно и ждать их завершения.

function asyncOperation(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  Promise.all([
    asyncOperation('Операция 1', 1000),
    asyncOperation('Операция 2', 2000),
    asyncOperation('Операция 3', 1500)
  ])
  .then(results => {
    console.log(results); // ["Операция 1", "Операция 2", "Операция 3"]
  })
  .catch(error => {
    console.error(error);
  });


//   6. Пример использования промисов с async/await
// async/await предоставляет более удобный способ работы с промисами, позволяя писать асинхронный код в синхронном стиле.
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Данные загружены');
      }, 1000);
    });
  }
  
  async function loadData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
  loadData();
  

//   Promise.race — это статический метод класса Promise, который принимает массив (или любой итерируемый объект) промисов и возвращает новый промис. Этот новый промис разрешается или отклоняется с результатом первого завершившегося промиса из переданных в массиве, независимо от того, был ли он выполнен успешно (разрешен) или с ошибкой (отклонен).

// В вашем примере используются два промиса: firstPromise и secondPromise. Давайте разберем их и посмотрим, как работает Promise.race:

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one"); // метод res будет вызван через 500 миллисекунд с аргументом "one"
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two"); // метод res будет вызван через 100 миллисекунд с аргументом "two"
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// Как работает Promise.race
// firstPromise разрешается через 500 миллисекунд с результатом "one".
// secondPromise разрешается через 100 миллисекунд с результатом "two".
// Метод Promise.race возвращает новый промис, который будет разрешен или отклонен в зависимости от того, какой из переданных промисов завершится первым.

// Ход выполнения
// Promise.race запускает оба промиса одновременно.
// secondPromise завершается первым через 100 миллисекунд и возвращает значение "two".
// Так как secondPromise завершился первым, новый промис, созданный Promise.race, будет разрешен значением "two".



// Сетевые запросы с таймаутом
// Один из распространенных случаев использования Promise.race — это создание таймаута для сетевых запросов. Если запрос занимает слишком много времени, он будет прерван, и будет использовано значение таймаута.

function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url).then(response => response.json());
  
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Request timed out'));
    }, timeout);
  });
  
  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout('https://api.example.com/data', 5000)
  .then(data => console.log(data))
  .catch(error => console.error(error));
