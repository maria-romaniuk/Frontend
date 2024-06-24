const root = ReactDOM.createRoot(document.getElementById("root"));

//2. принятие props 
const Student = (props) => {

    // 3. использование props
    console.log(props);
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
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