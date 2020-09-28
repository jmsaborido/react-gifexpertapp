import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'https://localhost/test.jpg';

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot();
    })
})