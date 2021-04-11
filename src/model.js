import image from './assets/image.jpg'
import {Block} from './class/blocks'

export const model = [
    new Block('title', 'Конструктор сайтов на JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new Block('image', image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'            
        }
    }),
    new Block('columns', [
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            'font-weight': 'bold',
            color: '#fff'
        }
    }),
    new Block('text', 'here we go with some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]