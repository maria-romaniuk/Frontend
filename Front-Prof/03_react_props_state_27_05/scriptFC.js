const root = ReactDOM.createRoot(document.getElementById('root'));

function Cohort40(){
    return(
        <>
        {/* {первые скобки - вышли в обычный js из jsx, вторые скобки - вышли в css} */}
        <h1 style={{textAlign: 'center'}}>Cohort40!</h1>
        <h1 className = 'text-center'>Cohort40!</h1>
        </>
    )
}

root.render(
    <>
    <Cohort40 />
    <Cohort40 />
    <Cohort40 />
    <Cohort40 />
    </>
)