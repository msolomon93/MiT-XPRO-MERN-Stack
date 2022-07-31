function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'Learn React',
        isCompleted: false,
      },
      {
        text: 'Pass MIT-XPRO Course',
        isCompleted: false,
      },
      {
        text: 'Get a Great Job in the field',
        isCompleted: false,
      }        
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
    }
    const removeTodo = index => {
      let temp = [...todos];    
      temp.splice(index, 1);
      setTodos(temp);
    }
  
    return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
        <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );