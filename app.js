let button = document.getElementById("theBoxes");
var i = 1;
var oldValue = 0;

button.onclick = () => {
    let n = document.getElementById('number').value;
    let choice = document.getElementById("choice").value;
    choice = parseInt(choice);
    // console.log(choice)
    n = parseInt(oldValue) + parseInt(n);
    // console.log(n);
    for (; i <= n; i++) {
        var box = document.createElement('div');
        if (choice === 1) {
            box.classList.add('square');
            document.getElementById('box').appendChild(box);
            box.innerHTML += i;
            oldValue = document.getElementById('box').lastElementChild.innerHTML;
        } else if (choice === 2) {
            box.classList.add('circle');
            document.getElementById('box').appendChild(box);
            box.innerHTML += i;
            oldValue = document.getElementById('box').lastElementChild.innerHTML;
        } else if (choice === 3) {
            box.classList.add('rectangle');
            document.getElementById('box').appendChild(box);
            box.innerHTML += i;
            oldValue = document.getElementById('box').lastElementChild.innerHTML;
        } else {
            document.write("invalid Input");
        }
    }
}