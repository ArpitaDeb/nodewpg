window.onload = function attributeFinder() {
    const title = document.querySelector('h1')
    const division = document.querySelector('div')

    title.removeAttribute('id')
    division.removeAttribute('name')

    if (title.hasAttributes() && division.hasAttributes()) {
        title.setAttribute('class', 'striked');
        division.setAttribute('class', 'striked')
    } else {
        title.setAttribute('class','bold');
        division.setAttribute('class','bold');
    }
}