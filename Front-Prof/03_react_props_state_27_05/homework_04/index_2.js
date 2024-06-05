const root = ReactDOM.createRoot(document.getElementById('root'));


const ChessChampion = ({ photo, name, years }) => {
    return (
        <>
            <div className="championBlock">
                <img src={photo} alt={name} className="championImg" />
                <h2 style={{ textAligh: 'center' }}>{name}</h2>
                <p>World Champion: {years}</p>

                {/* если oscar true то показываемБ если нет, то просто пустота. даже блок не добавляется */}
                {oscar ? <p>has chess oscar </p> : <></>}
                {oscar && <p>has chess oscar </p> }
                {/* обе строки выше прежставляют собой одно и тоже. если oscar false, то дальше не идет проверка и заканчивается функция.  выше тернарный оператор, ниже это еще не учили*/}
                
            </div>
        </>
    )
}

const champions = [
    { name: "Bobby Fischer", years: "1972-1975", photo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Bobby_Fischer_1972.jpg" },
    { name: "José Raúl Capablanca", years: "1921- 1927", photo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg" },
    { name: "Magnus Carlsen", years: '2013 - 2023', photo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/MagnusCarlsen24.jpg" },
    { name: "Ding Liren", years: "2023- present", photo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Ding_Liren_in_2023_%2852638329254%29.jpg" },
    { name: "Max Euwe", years: '1935 - 1937', photo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Max_Euwe_1963.jpg", oscar: true },
    { name: "Emanuel Lasker", years: "1894- 1921", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg/220px-Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg" },
    { name: "Wilhelm Steinitz", years: " 1886 -1894", photo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Wilhelm_Steinitz2.jpg" },
];



root.render(
    <>
        {/* также как и sort итерирует массив, только при итеррации получаем доступ до итерр эоемента и его инжексБ а возвразается новый компонент */}
        {/* если в функции пишем {} нужно писать return, создаем новый блок для кода
    ()- принимает всеБ как цельное выражение с встроенным return */}

    {/* итерируем массив и возвращаем компонент */}
        {
            champions.map((element, index) => (
                <ChessChampion key={index} photo={element.photo} name={element.name} years={element.years} oscar={element.oscar} />
            ))
        }
    </>
)