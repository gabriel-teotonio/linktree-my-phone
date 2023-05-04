const linkList = document.querySelector('.link-list')
const prevIcons = document.querySelector('.prev-icons')
const date = new Date()
const daysWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

window.addEventListener('load', () => {
    setTimeout(() => {
        linkList.classList.add('show')
        prevIcons.style.display = 'none'
    }, 1000);
})

const renderDateTime = () => {
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const day = date.getDay()
    const dayWeek = daysWeek[day]
    const monthFormated = date.toLocaleDateString('pt-BR', {
        month:'long'
    })
    const clockEl = document.querySelector('#clock')
    const localDateEl = document.querySelector('#localDate')

    clockEl.innerHTML = `${addZeroToTime(hour)}:${addZeroToTime(minutes)}`
    localDateEl.innerHTML = `${dayWeek}, ${day} de ${monthFormated}`

}

const addZeroToTime = (num) => num < 10 ? `0${num}`: num

renderDateTime()