const linkList = document.querySelector('.link-list')
const prevIcons = document.querySelector('.prev-icons')
const date = new Date()
const daysWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

const logoDev = document.querySelector(".logo-dev")
const colors = ["green", "blue", "yellow", "orange", "purple"]

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


function loop() {
  const hRange = window.innerWidth - logoDev.clientWidth
  const vRange = window.innerHeight - logoDev.clientHeight
  const time = performance.now() * 0.1

  const x = Math.abs((time % (hRange * 2)) - hRange)
  logoDev.style.left = `${x}px`
  const y = Math.abs((time % (vRange * 2)) - vRange)
  logoDev.style.top = `${y}px`

  const bounces = Math.floor(time / hRange) + Math.floor(time / vRange)
  logoDev.style.fill = colors[bounces % colors.length]

  requestAnimationFrame(loop)
}

loop()
renderDateTime()