const delay = 40
const dot = '·'
const space = '&hairsp;'
const numDots = 3

document.querySelectorAll('.next-button').forEach($button => {
  const line = $button.querySelector('.arrow-dotted-line')
  let hovered = true

  const sleep = delay => new Promise(r => setTimeout(r, delay))

  const addDot = () => line.innerHTML += dot + space

  const removeDot = () => line.innerHTML = line.innerHTML.slice(0, -dot.length - 1)

  $button.addEventListener('mouseenter', async () => {
    hovered = true
    for (let i = 0; i < numDots; i++) {
      addDot()
      await sleep(delay)
      if (!hovered) return
    }
  })

  $button.addEventListener('mouseleave', async () => {
    hovered = false
    for (let i = 0; i < numDots; i++) {
      removeDot()
      await sleep(delay)
      if (hovered) return
    }
  })
})