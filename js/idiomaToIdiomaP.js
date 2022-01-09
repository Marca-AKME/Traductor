let text = "";
let state = 'idiomaPToIdioma'
const vocals = ['a', 'e', 'i', 'o', 'u']

function reverse(idBefore, idAfter) {
    idAfter == 'buttonTrdReverse' ? state = 'idiomaToIdiomaP' : state = 'idiomaPToIdioma';
    console.log('state :', state)

    document.getElementById(idBefore).setAttribute("id", idAfter);

    console.log(document.getElementById(idAfter))
}

function clean() {
    text = "";
}

function cleanAll() {
    print('')
    document.querySelector('#txtBefore').value = ''
}

function enter() {
    document
        .getElementById("txtBefore")
        .addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("buttonTrd").click();
            }
        });
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
// function idiomaPToIdioma() {
    document
        .getElementById('idiomaPToIdioma')
        .addEventListener('click', function () {
            
            if (state == 'idiomaPToIdioma') {   
                cleanAll()
                reverse('buttonTrd', 'buttonTrdReverse')
                startReverse()
            }
            
        })
// }

// function idiomaToIdiomaP() {
    document
        .getElementById('idiomaToIdiomaP')
        .addEventListener('click', function () {
            
            if (state == 'idiomaToIdiomaP') {
                cleanAll()
                reverse('buttonTrdReverse', 'buttonTrd')
                start()
            }
            
        })
// }


function start() {
    //if (document.getElementById('buttonTrd')) {

        document.getElementById('title').innerHTML = 'Idioma :';
        
        document
            .getElementById('buttonTrd')
            .addEventListener('click', function () {
                
                traductor(document.querySelector('#txtBefore').value)
                print(text)
                clean()
            })
        console.log('entraaa')
    
        enter()
        console.log('1rIf')
    //}
}
    

function startReverse() {
    //if (document.getElementById('buttonTrdReverse')) {

        document.getElementById('title').innerHTML = 'IdiomaP :';

        document
            .getElementById('buttonTrdReverse')
            .addEventListener('click', function () {
                
                // traductor(document.querySelector('#txtBefore').value)
                // print(text)
                // clean()
                console.log('startReverse')
                
            })
        
        enter()
        console.log('2nIf')
    //}
}
    