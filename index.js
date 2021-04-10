const model = [
    { type: 'title', value: 'Hello World from JS' },
    { type: 'text', value: 'here we go with some text' },
    {
        type: 'columns', value: [
            '111111',
            '222222',
            '333333',
        ]
    }
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = '';

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = `
        <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
        </div>
        `
    } else if (block.type === 'columns') {
        html = `
        <div class="row">
        <div class="col-sm">
            ${block.value}
        </div>
        <div class="col-sm">
            ${block.value}
        </div>
        <div class="col-sm">
            ${block.value}
        </div>
        </div>
        `
    }

    $site.insertAdjacentHTML('beforeend', html)

})


function title (block) {
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
`
}