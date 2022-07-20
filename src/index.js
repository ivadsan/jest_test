const cities = ["Bogotá", "CDMX", "Sao Paulo", "Monterrey"]

const randomString = () => {
  return string = cities[Math.floor(Math.random() * cities.length )]
}

// Verificando una promesa
const reverseString2 = (str) => {
  return new Promise((resolve, reject)=>{
    if(!str){
      reject(Error('error'))
    }
    resolve(str.split('').reverse().join(""))
  })
}


module.exports = {randomString, reverseString2}