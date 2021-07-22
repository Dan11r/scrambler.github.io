//что бы зашифровать
function encrypt(message){
    let toArr = message.split('')
    let alf = 'зирудежбыъсёпютьщэйфочшцклвгяхмназирудежбыъсёпютьщэйфочшцклвгяхмна'.split('')
    let indexes = []
    let toTrans = ''
    toArr.forEach((e, i)=>{
      alf.some((elem, index)=>{
         if(e === elem || e.toLowerCase() === elem){
           indexes.push(index+13)
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

// что бы расшифровать
function decipher(message){
    let toArr = message.split('')
    let alf = 'зирудежбыъсёпютьщэйфочшцклвгяхмназирудежбыъсёпютьщэйфочшцклвгяхмна'.split('')
    let indexes = []
    let toTrans = ''
    toArr.forEach((e, i)=>{
      alf.some((elem, index)=>{
         if(e === elem || e.toLowerCase() === elem){
           indexes.push(index+20)
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

let encryptBtn = document.getElementById("encrypt");
let decipherBtn = document.getElementById("decipher");
let encryptInput = document.getElementById("floatingInput");
let decipherInput = document.getElementById("floatingInput1");

let encryptInputCurrentValue
let decipherInputCurrentValue

encryptInput.addEventListener('change', ()=>{
    encryptInputCurrentValue = encryptInput.value 
})
encryptBtn.addEventListener('click', ()=>{
    encryptInput.value = encrypt(encryptInputCurrentValue)
})

decipherInput.addEventListener('change', ()=>{
    decipherInputCurrentValue = decipherInput.value 
})
decipherBtn.addEventListener('click', ()=>{
    decipherInput.value = decipher(decipherInputCurrentValue)
})
