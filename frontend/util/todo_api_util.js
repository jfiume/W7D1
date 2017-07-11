export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todoos'
  })
);
