function Todo(props) {
    return(
        <li className="todoli">
            <div className='check'>
                <input id={props.id} type='checkbox' defaultChecked={props.isComplete} onChange={()=>props.toggleCheckbox(props.id)}/>
                <label className='task-label' htmlFor={props.id} >{props.task}</label>
                <button onClick={()=>props.delTask(props.id)}>Delete</button>
            </div>
        </li>
    );
}
export default Todo;