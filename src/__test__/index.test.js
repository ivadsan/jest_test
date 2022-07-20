const {randomString} = require("../index")

describe('testing randomString functionalities', ()=>{
  
  test('Random string', () => expect(typeof randomString()).toBe('string'));

  test('Not contain Cordoba', () => expect(randomString()).not.toMatch(/Cordoba/))
})


