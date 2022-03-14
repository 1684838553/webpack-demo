export function craeteSpanElement(content) {
    const span = document.createElement('span')
    span.innerHTML = content
    document.body.appendChild(span)
}
