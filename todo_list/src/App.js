import React, { Component } from "react";
import TodoListTemplate from "./components/TodoList/TodoListTemplate";
import Form from "./components/Form/Form";

class App extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form />}>
                React 프로젝트 만들기!
            </TodoListTemplate>
        );
    }
}

export default App;
