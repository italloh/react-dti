import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Todo from './index'
import * as todoAction from './todoAction'
import Item from '../item';

const TodoContainer = (props) => {
    const [list, setList] = useState([])
    
    useEffect(() => {
        setList(props.list)
    }, [props.list])

    return <Todo list={list} renderItem={item => <Item item={item} atualizar={props.setUpdate}/>} />
}

const mapDispatchToProps = {
    setUpdate: todoAction.setUpdate,
};

const mapStateToProps = ({todos}) => {
    return {
        list: todos
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)