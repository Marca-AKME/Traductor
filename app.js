let text = "";
const vocals = ['a', 'e', 'i', 'o', 'u']



function clean() {
    text = '';
}

function isVocal(letter) {
    for (const iterator of vocals) {
        if (iterator == letter) {
            // console.log(iterator)
            return true
        }
    }
}

function traductor(msg) {
    for (let i = 0; i < msg.length; i++) {
        text += msg[i]
        if (isVocal(msg[i])) {
           text += 'p' + msg[i]
        }
    }
    console.log(text)
}

function print(msg) { 
    document.getElementById("txtAfter")
            .innerHTML = msg;
}




// history
console.log(document.querySelector('#txtBefore').value)



// function start
document
    .getElementById('buttonTrd')
    .addEventListener('click', function () {

        traductor(document.querySelector('#txtBefore').value)
        print(text)
        clean()

    })

// Btn Enter
document
  .getElementById("txtBefore")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonTrd").click();
    }
  });