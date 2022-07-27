import React from 'react';
import {View} from 'react-native';
import {TodoHeader, TodoList} from '../components';

const Todo = ({state, setState}) => {
  return (
    <View>
      <TodoHeader state={state} />
      <TodoList state={state} setState={setState} />
    </View>
  );
};

export default Todo;
