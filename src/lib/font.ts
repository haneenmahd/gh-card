import localFont from 'next/font/local';

const font = localFont({
    src: [
        {
            path: '../assets/font/350.ttf',
            weight: '350',
            style: 'normal'
        },
        {
            path: '../assets/font/500.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../assets/font/600.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../assets/font/700.ttf',
            weight: '700',
            style: 'normal'
        }
    ]
})

export default font;