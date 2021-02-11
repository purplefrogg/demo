import React, { Component } from 'react';

import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("profile status component", () => {
  test('status from props should be in the state', () => {
    const component = TestRenderer.create(<ProfileStatus status='the world' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("the world")
  });

  test('after creation status-div should contains correct status', () => {
    const component = TestRenderer.create(<ProfileStatus status='the world' />)
    const root = component.root
    let div = root.findAllByType('div')
    expect(div[1].props.children[1]).toBe('the world')
  });

  test('input should be displayed instead of status-div',() => {
    const component = TestRenderer.create(<ProfileStatus status='the world'/>)
    const root = component.root
    let div = root.findAllByType('div')
    div[1].props.onClick()
    let input = root.findAllByType('input')
    expect(input[0].props.value).toBe('the world')
  });

  test('callback should be colled', () => {
    const mockCallback = jest.fn()
    const component = TestRenderer.create(<ProfileStatus status='the world'
     updateStatus={mockCallback} />)
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  });

})