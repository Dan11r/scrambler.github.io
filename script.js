//что бы зашифровать number = 13, что бы расшифровть number = 20
function encrypt(message, number, key){
    let toArr = message.split('')
    let alf = (key + key).split('')
    let indexes = []
    let toTrans = ''
    toArr.forEach((e, i)=>{
      alf.some((elem, index)=>{
         if(e === elem || e.toLowerCase() === elem){
           indexes.push(index+number)
           return toTrans =toTrans + (e === e.toUpperCase() ? alf[indexes[i]].toUpperCase() : alf[indexes[i]])
          } 
          if(e.toLowerCase() === e.toUpperCase()){
            indexes.push('not letter')
            return toTrans = toTrans + e
          }
       })
    })
    return(toTrans)
  }

const genKey = () => {
    const baseString = 'зирудежбыъсёпютьщэйфочшцклвгяхмна';
    const arr = baseString.split('');
    let counter = arr.length;

    while (counter > 0) {

        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr.join('')
};

let encryptBtn = document.getElementById("encrypt");
let decipherBtn = document.getElementById("decipher");
let encryptInput = document.getElementById("floatingInput");
let decipherInput = document.getElementById("floatingInput1");
let genKeyBtn = document.getElementById("genKeyBtn")
let generatedKeySpan = document.getElementById("generatedKeySpan")
let copyKey = document.getElementById("copyKey")
let encryptSection = document.getElementById('encryptSection')
let keyInput = document.getElementById('keyInput')

let encryptInputCurrentValue
let decipherInputCurrentValue
let keyInputValue

let key

genKeyBtn.addEventListener('click', ()=>{
    key = genKey()
    generatedKeySpan.style.color = 'white'
    generatedKeySpan.style.backgroundColor = '#198754'
    generatedKeySpan.innerText= `${key}`
    encryptSection.style.display = 'block'
    copyKey.style.display = 'inline-block'
    copyKey.style.backgroundColor = '#198754'
})
copyKey.addEventListener('click', ()=>{
    let area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = generatedKeySpan.innerText;
    area.select()
    document.execCommand("copy")
    document.body.removeChild(area);
    copyKey.style.backgroundColor = '#005626'
})
keyInput.addEventListener('change', ()=>{
    keyInputValue = keyInput.value
})

encryptInput.addEventListener('change', ()=>{
    encryptInputCurrentValue = encryptInput.value
})
encryptBtn.addEventListener('click', ()=>{
    encryptInput.value = encrypt(encryptInputCurrentValue, 13, key)
})

decipherInput.addEventListener('change', ()=>{
    decipherInputCurrentValue = decipherInput.value 
})
decipherBtn.addEventListener('click', ()=>{
    decipherInput.value = encrypt(decipherInputCurrentValue, 20, keyInputValue)
})
