import {useState} from 'react';
function Form(props) {
    const [task, setTask] = useState('Use react hooks');
    function handleSubmit(e) {
        e.preventDefault();
        if (task!==''){
        props.addTask(task);}
        setTask('');
        
    }
    function handleChange(e) {
        //console.log(e.target.value);
        setTask(e.target.value);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3><label htmlFor='newtask' className='label' >Task to be done</label></h3>
            <input type="text" id='newtask' className='inputtask' onChange={handleChange}/>
            <button type='submit' className='btn'>Add</button>
        </form>
    );
}
export default Form;