const root = ReactDOM.createRoot(document.getElementById('root'));

//DRY - don't repeat yourself. если нужно повторять код. проверь и сделай его универсальным
//1.
// const Cohort40 = () => {
//     const num = 3;
//     if (num % 2) {
//         return (
//             <div>
//                 <h1 style={{ textAlign: 'left' }}>Cohort40!</h1>
//                 <h1 className='text-center'>Cohort40!</h1>
//             </div>
//         )
//     } return (
//         <div>
//             <h1 style={{ textAlign: 'right' }}>Cohort40!</h1>
//             <h1 className='text-center'>Cohort40!</h1>
//         </div>
//     )
// }

//2. Ternary operator

// const Cohort40 = () =>{
//     const num = 3;
//         return num % 2 ? (
//                 <div>
//                     <h1 style={{ textAlign: 'left' }}>Cohort40!</h1>
//                     <h1 className='text-center'>Cohort40!</h1>
//                 </div>
            
//         ) : (
//             <div>
//                 <h1 style={{ textAlign: 'right' }}>Cohort40!</h1>
//                 <h1 className='text-center'>Cohort40!</h1>
//             </div>
//         )
// }

//3. Advanced создание универсального кода без повторений


const Cohort40 = () =>{
    const num = 2;
        return (
                <div>
                    {/* <h1 style={num % 2 ? { textAlign: 'left' }: { textAlign: 'right' }}>Cohort40!</h1>  все равно повторяется textAlign. ниже второй вариант без повторения*/}
                    <h1 style={ { textAlign: num %2 ? 'left' : 'right' }}>Cohort40!</h1>
                    <h1 className='text-center'>Cohort40!</h1>
                </div>
            
        )
};

root.render(
    <>
     <Cohort40 />
    </>
)