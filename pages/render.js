const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const input = document.querySelector('#input')
btn1.addEventListener('click', () => {
    alert(myAPI.version)
})
btn2.addEventListener('click', () => {
    myAPI.saveFile(input.value)
    input.value = ''
})
btn3.addEventListener('click', async () => {
    const data = await myAPI.readFile()
    alert(data)
})

