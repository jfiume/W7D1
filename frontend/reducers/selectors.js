export const getAllTodos = ({ todos }) => (Object.keys(todos).map(key => (todos[key])));
