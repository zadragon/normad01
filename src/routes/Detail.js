import React from 'react';
import {connect} from "react-redux";

function Detail({toDo}){
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Create at : {toDo?.id}</h5>
        </>
    );
};

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: {id}
        }
    } = ownProps //id 객체를 비구조화 할당해서 id <- 이 이름으로 속성값 사용가능
    return {toDo: state.find(toDo => toDo.id === parseInt(id))}

}

export default connect(mapStateToProps)(Detail);
