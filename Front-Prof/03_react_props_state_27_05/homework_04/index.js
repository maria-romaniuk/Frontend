const root = ReactDOM.createRoot(document.getElementById('root'));


const ChessChampions = ({photo, name, years}) => {
    return (
        <>
            <div className="championBlock">
            <img src={photo} alt={name} className = "championImg"/>
            <h2>{name}</h2>
            <p>World Champion: {years}</p>
            </div>
        </>
    )
}
root.render(
    <>
       <ChessChampions name = "Bobby Fischer" years = {1972 + " – "+ 1975} photo="https://upload.wikimedia.org/wikipedia/commons/3/34/Bobby_Fischer_1972.jpg"/>
       
       <ChessChampions name = "José Raúl Capablanca" years = {1921 + " – " + 1927} photo="https://upload.wikimedia.org/wikipedia/commons/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg"/>

       <ChessChampions name = "Magnus Carlsen" years = {2013 + " – " + 2023} photo="https://upload.wikimedia.org/wikipedia/commons/5/5f/MagnusCarlsen24.jpg"/>

       <ChessChampions name = "Ding Liren" years = {2023+ " – present"} photo="https://upload.wikimedia.org/wikipedia/commons/d/db/Ding_Liren_in_2023_%2852638329254%29.jpg"/>

       <ChessChampions name = "Max Euwe" years = {1935 + " – " + 1937} photo="https://upload.wikimedia.org/wikipedia/commons/4/4f/Max_Euwe_1963.jpg"/>

       <ChessChampions name = "Emanuel Lasker" years = {1894+ " – " + 1921} photo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg/220px-Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg" />

       <ChessChampions name = "Wilhelm Steinitz" years = {1886 + " – " + 1894 } photo="https://upload.wikimedia.org/wikipedia/commons/b/b2/Wilhelm_Steinitz2.jpg" />
    </>
)