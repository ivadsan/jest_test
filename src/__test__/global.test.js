const {reverseString2} = require("../index")

const text = "Hola Mundo"

test('Debe contener un texto con la palabra mundo', () => {
  expect(text).toMatch(/Hola/)
})

const fruits = ['apple', 'banana', 'orange']

test('Do we have a apple?', () => {
  expect(fruits).toContain('apple')
})


test('Greater than 10', () => {
  expect(15).toBeGreaterThan(10)
})


test('Verdadero',() => {
  expect(true).toBeTruthy()
})

test('Verdadero',() => {
  expect(true).toBe(true)
})


//Verificando un callback
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
}

test('probando un callback', () => {
  reverseString('hola', (str)=>{
    expect(str).toBe('aloh')
  })
})

test('Promise Test', () => {
  return reverseString2('hola')
  .then(string =>  expect(string).toBe('aloh'))
})

// Verificando async/await
test('async await test', async () => {
  const string = await reverseString2('hola')
  expect(string).toBe("aloh")
})


afterEach(() => console.log('After each test'))
afterAll(() => console.log('After all the tests'))
beforeEach(() => console.log('Before each test'))
beforeAll(() => console.log('Before all the tests'))