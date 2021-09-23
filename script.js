const item         = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder'),
      img          = document.querySelector('.img');

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

img.style.display = "none"

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}



function dragStart(event) {
    let e = event.target

    img.style.display = "block"
    setTimeout(() => {
        e.classList.add('hide')
        img.style.display = "none"
    }, 0)

}

function dragEnd(event) {
    let e = event.target

    e.className = 'item'
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    let e = event.target

    e.classList.add('hovered')
    
}

function dragLeave(event) {
    let e = event.target

    e.classList.remove('hovered')
    
}

function dragDrop(event) {
    let e = event.target
    e.classList.remove('hovered')
    e.append(item)
}