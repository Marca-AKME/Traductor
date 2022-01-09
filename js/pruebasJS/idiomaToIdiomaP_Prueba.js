let text = "";
const vocals = ['a', 'e', 'i', 'o', 'u']

function clean() {
    text = '';
}

function print(msg) {
    
    document.getElementById("txtAfter")
            .innerHTML = msg;
}

function isVocal(letter) {
    for (const iterator of vocals) {
        if (iterator == letter) {
            // console.log(iterator)
            return true
        }
    }

    // vocals.forEach(elementLetter => {
    //     if (elementLetter === letter) ;
    //         console.log('funciona')
    //         // return true
            
    //     // return false
    // });
    

    // vocals.forEach(elemLetter => {
    //     if (elemLetter == letter) {
    //         console.log(elemLetter.indexOf())
    //         return true
    //     }
    // })
}


function traductor(msg) {
    for (let i = 0; i < msg.length; i++) {
        text += msg[i]
        if (isVocal(msg[i])) {
           text += 'p' + msg[i]
        }
        // if (msg[i] == 'a') {
        //     text += 'pa'
        // }
        // if (msg[i] == 'e') {
        //     text += 'pe'
        // }
        // if (msg[i] == 'i') {
        //     text += 'pi'
        // }
        // if (msg[i] == 'o') {
        //     text += 'po'
        // }
        // if (msg[i] == 'u') {
        //     text += 'pu'
        // }
        
        // text += msg[i];
        // msg[i] in vocals ? text += msg[i] + 'pa' : text += msg[i];
        
        // if (isVocal(msg[i]) == true) {
        //     console.log('funciiii')
        //     text += "pa";
        // }
        // isVocal(msg[i])
        
        // isVocal(msg[i]) ? text += msg[i] + 'pa' : text += msg[i];
    }
    console.log(text)
}

console.log(document.querySelector('#txtBefore').value)

document.getElementById('buttonTrd')
    .addEventListener('click',function () {
        traductor(document.querySelector('#txtBefore').value)
        // print(document.getElementById("txtBefore").value)
        print(text)
        clean()
    })

document
  .getElementById("txtBefore")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonTrd").click();
    }
  });



