var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery')
var Todo = require('Todo');

describe('Todo',() => {
  it('should exist',() => {
    expect(Todo).toExist();
  })

  it('should call the prop onToggle with id on click',() => {
    var todoData = {
      id : 1,
      text : 'testing the todo',
      completed : false,
    }
    var spy = expect.createSpy()
    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy}/>);
    var el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click(el[0]);
    expect(spy).toHaveBeenCalledWith(1);
  })
})
