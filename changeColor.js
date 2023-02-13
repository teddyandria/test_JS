const elements = document.getElementsByClassName("random-bg");

changeBg = () => {
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)

    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)

    let bgColor = `rgb(${a}, ${b}, ${c})`
    let textColor = `rgb(${x}, ${y}, ${z})`

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = bgColor;
        elements[i].style.color = textColor;
    }
}

setInterval(changeBg, 1000);