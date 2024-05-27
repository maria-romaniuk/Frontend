const root = ReactDOM.createRoot(document.getElementById('root'));

// //2. прнимаем props
// const Student = (props) => {
//     return (
//         <>
//             {/* {3. испрльзование props} */}
//             <h1>Name: {props.name}</h1>
//             <h3>Age: {props.age}</h3>
//          
//         </>
//     )
// }

//принятие и отдельная диструктуризация для наглядности
//диструктуризация props, не использовать props.
// const Student = (props) => {

//    const {name, age} = props; присвоение диструктуризации вхрдязим props

//     return (
//         <>
//             {/* {3. испрльзование props} */}
//             <h1>Name: {name}</h1>
//             <h3>Age: {age}</h3>
//         </>
//     )
// }

//2. прнимаем props
//диструктуризация props, не использовать props.
const Student = ({name, age}) => {
    console.log(name, age);
    return (
        <>
            {/* {3. испрльзование props} */}
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
            <button>order</button>
        </>
    )
}
root.render(
    <>
         {/*1. перердача props*/}
        <Student name = 'Peter' age = {22 - 2}/>
        <Student name = 'Mary' age = {13 + 7}/>
        <Student name = 'John' age = {32 + 1.7}/>
        <Student name = 'Leo' age = {50 / 2}/>
    </>
)