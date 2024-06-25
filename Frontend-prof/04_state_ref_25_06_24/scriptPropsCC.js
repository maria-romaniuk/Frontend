const root = ReactDOM.createRoot(document.getElementById("root"));

class Student extends React.Component{

    render(){
        // const name = this.props.name;
        // const age = this.props.age;
        
//2. использование props
        const {name, age} = this.props; // аналог написан выше. деструктуризация объекта

        return(
            <>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
            </>
        )
    }
}
// null, undefined - не отображается

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