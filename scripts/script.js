window.addEventListener('DOMContentLoaded', () => {
    let blogRation = document.querySelectorAll('.rating--text')

    blogRation.forEach(el => {
        if (el.innerHTML.includes('+')) {
            el.style.color = "#47c270"
        }else if (el.innerHTML.includes('-')) {
            el.style.color = "#d04e4e"
        }
    })
})