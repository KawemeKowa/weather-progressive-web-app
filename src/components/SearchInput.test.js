import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import SearchInput from './SearchInput'

//Verify that we correctly render our component
it("renders correctly", () => {
    const {queryByPlaceholderText} = render(<SearchInput/>)
    expect(queryByPlaceholderText('search...')).toBeTruthy()
})

//Verify that the fetchWeather function is not called when query is empty
describe("Search field", () => {
    describe("with empty query", ()=>{
        it("does not trigger fetch weather function", () => {
            const fetchWeather = jest.fn() 
            const {queryByPlaceholderText} = render(<SearchInput/>)
        fireEvent.keyPress(queryByPlaceholderText('search...'))
        expect(fetchWeather).not.toHaveBeenCalled()
    })
    })
})