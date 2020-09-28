import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'https://localhost/test.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title);
    })
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url);
    })

    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = 'animate__fadeIn';
        expect(div.prop('className')).toContain(className);
        // La que usa fernando en el curso
        // expect(div.prop('className').includes(className)).toBe(true);
    })
})