const root = ReactDOM.createRoot(document.getElementById("root"));

//2. принятие props. props это объект
const Student = ({name, age}) => {

    // 3. использование props
    console.log(props);
    return (
        <>
           {

           }
        </>
    )
}
root.render(
    <>
        {/* 1. передача props */}
        <Student name='Tigran' age={5 + 12} />
        <Student name='John' age={25 - 6} />
        <Student name='Bill' age={3 * 8} />
        <Student name='Semeon' age={18} />
        <Student name='David' age={55 / 2} />
    </>
);