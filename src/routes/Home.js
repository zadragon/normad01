import React, {useState} from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import ToDo from "../components/ToDo";

const Home = ({toDos, addTodo}) => {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value)
    }
    function onSubmit(e){
        e.preventDefault();
        addTodo(text)
        setText('');
    }
    return (
        <>
            <h1>To do</h1>
            <form>
                <input type="text" value={text} onChange={onChange}/>
                <button onClick={onSubmit}>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}
            </ul>
        </>
    );
};

function mapStateToProps(state, ownState){
    return{toDos:state}
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        addTodo : (text)=>dispatch(actionCreators.addTodo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);