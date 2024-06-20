/*
1. add book;
2. edit book;
3. delete book;
*/

/*
object book:

    {
        isbn?: string (unique) - ? опционально. может быть а может и не быть этот номер. делаем опциональным чтоб не обязательным была егопередача при разеых фкнкциях
        title: string
        year: number
        author: string
    }
*/

export type Book ={
    isbn?: string;
    title: string;
    year: number;
    author: string;
}

export type libraryAction = 
| {type: 'library/add', payload: Book }
| {type: 'library/edit', payload: Book} // передаем книгу в полезной нагрузке для изменения + нужно передать еще и isbn, при добавлении не нужно было сообщать этот номер
| {type: 'library/delete', payload: string }