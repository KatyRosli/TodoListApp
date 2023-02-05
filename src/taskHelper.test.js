import { addTask, removeTask, updateTask } from './taskHelper';

describe('taskHelper behavior on tasks', ()=>{
  it('should add todo to the list', () => {
    jest.spyOn(Date, 'now').mockReturnValueOnce(1);
    jest.spyOn(Math, 'random').mockReturnValueOnce(2);
    const startTodos = [];
    
    const expected =[{ id: 'todo-2', title: 'one', description: '', completed: false }];
    const result = addTask(startTodos, 'one', '')
    expect(result).toEqual(expected)
  })

  it('should update todo in the list', () => {
    const startTodos = [{ id: 'todo-1', title: 'one', description: '', completed: false }];
    
    const expected = [{ id: 'todo-1', title: 'one', description: '', completed: true }];
    const result = updateTask(startTodos, 'todo-1');
    expect(result).toEqual(expected)
  })

  it('should remove todo from the list', () => {
    const startTodos = [{ id: 'todo-1', title: 'one', description: '', completed: false }];
    
    const expected = [];
    const result = removeTask(startTodos, 'todo-1');
    expect(result).toEqual(expected)
  })
});
