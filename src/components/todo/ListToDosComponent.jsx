export const ListToDosComponent = () => {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDay()
  );
  const toDos = [
    { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    {
      id: 2,
      description: "Learn Full stack development",
      done: false,
      targetDate: targetDate,
    },
    { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  ];
  return (
    <div className="container">
      <h1>Things You want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Completed</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {toDos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};