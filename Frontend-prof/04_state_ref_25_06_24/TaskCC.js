const root = ReactDOM.createRoot(document.getElementById("root"));

class Task extends React.Component{
    
    render(){
        const [isEdit, setIsEdit] = React.useState(false);

        return isEdit ?(
            <div>
                <textarea></textarea>
                <button onClick= {() => setIsEdit(false)}>Save</button>
            </div>
        ) : (
            <div>
                <p>Name</p>
                <button onClick ={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

root.render(
    <>
       <Task />
    </>
);