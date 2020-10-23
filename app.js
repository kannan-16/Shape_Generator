let button = document.getElementById("theBoxes");
var i = 1;
var oldValue = 0;

button.onclick = () => {
    let n = document.getElementById('number').value;
    let circle = document.getElementById('circle')
    let square = document.getElementById('square')
    let rect = document.getElementById('rectangle')
    // console.log(choice)
    n = parseInt(oldValue) + parseInt(n);
    // console.log(n);
    for (; i <= n; i++) {
        var box = document.createElement('div');
        if (square.checked) {
            box.classList.add('square');
            document.getElementById('box').appendChild(box);
            box.innerHTML += i;
            oldValue = document.getElementById('box').lastElementChild.innerHTML;
        } else if (circle.checked) {
            box.classList.add('circle');
            document.getElementById('box').appendChild(box);
            box.innerHTML += i;
            oldValue = document.getElementById('box').lastElementChild.innerHTML;
        } else if (rect.checked) {
            box.classList.add('rectangle');
            document.getElementById('box').appendChild(box);
            box.innerHTML += i;
            oldValue = document.getElementById('box').lastElementChild.innerHTML;
        } else {
            document.write("invalid Input");
        }
    }
}
