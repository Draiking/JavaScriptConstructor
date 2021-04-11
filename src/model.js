import image from './assets/image.jpg'

export const model = [
    { type: 'title', value: 'Конструктор сайтов на JavaScript', options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }},
    { type: 'text', value: 'here we go with some text' },
    {
        type: 'columns', value: [
            '111111',
            '222222',
            '333333',
        ]
    },
    {type: 'image', value: image}
]