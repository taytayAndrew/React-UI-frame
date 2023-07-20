import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'; // 或者 react-test-renderer/test-utils，根据您的测试环境选择
import  React from 'react'
import Button from '../button'

describe('button', () => {
    it('是个 div', () => {
        let json;
        act(() => {
            json = renderer.create(<Button />).toJSON();
          });
        expect(json).toMatchSnapshot()
    })
})