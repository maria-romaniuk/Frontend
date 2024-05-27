const root = ReactDOM.createRoot(document.getElementById('root'));


class Student extends React.Component{
    render(){
        const {name, age} = this.props; //зарезервировано слово props, this является обязательым, дистуктуризвция
        return(
            <>
                <h1>Name: {name}</h1>
                <h2>Age: {age} </h2>
            </>
        )
    }
}

//в функцияональном компоненте нужно было создать передать и принять props,
// в классовом напряиую создаем и принимаем props. через this отбразаемся по функционалу даннго класса

root.render(
    <>
         {/*1. перердача props*/}
        <Student name = 'Peter' age = {22 - 2}/>
        <Student name = 'Mary' age = {13 + 7}/>
        <Student name = 'John' age = {32 + 1.7}/>
        <Student name = 'Leo' age = {50 / 2}/>
    </>
)