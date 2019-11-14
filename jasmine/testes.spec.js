let testes = require('./testes.js')
/* Importa o arquivo com as funções e atribui 
à variável testes. */

describe('testes', function(){
  
  // Testando a function reverse_string(str) 
  it('returns reverse string', function(){
    let str = 'Jasmine'
    expect(testes.reverse_string(str)).toEqual('enimsaJ')
  })

  it('verify if a string contain a substring', function(){
    let str = 'Jasmine'
    expect(testes.reverse_string(str)).toContain('enim')
  })
  
  // Testando a function regexp_date(str) 
  it('verify string date', function(){
    let str = '20/08/2011'
    expect(testes.regexp_date(str)).toBe(true)
  })

  it('verify string date with toMatch', function(){
    let str = '26/09/1996'
    expect(str).toMatch(/^(\d{2}\/\d{2}\/\d{1,4})$/)
    expect(str).not.toMatch(/^(\d{1,4}\/\d{2}\/\d{2})$/)
  })
  
  // Testando a function multiply(x,y)
  it('multiplies two numbers', function(){
    let x = 2
    let y = 3
    expect(testes.multiply(x, y)).toBeLessThan(7)
    expect(testes.multiply(x, y)).toBeGreaterThan(5)
  })
  
  // Testando a function filter_post_json(json,post)
  it('filter employees json by post', function(){
    let json = {"employees":[
        {"name": "Alice Diffie", "post": "Cryptographer"},
        {"name": "Bob Hellman", "post": "Cryptographer"},
        {"name": "Clarence The Middle", "post": "Cryptanalyst"},
        {"name": "Linus Torvalds", "post": "Programmer"}
      ]
     }
    let post = "Cryptographer"
    expect(testes.filter_post_json(json, post)).toEqual('Alice Diffie, Bob Hellman*')
  })
})


/* describe("Verificando os inputs", function(){

    it("Input Matéria é string?", function(){
        expect(true).toBe(true)
    })

    it("Input Ac é número?", function(){
        expect(true).toBe(true)
    })

    it("Input AI é número?", function(){
        expect(true).toBe(true)
    })

    it("Input AS é número?", function(){
        expect(true).toBe(true)
    })
    
})

describe("Verificando os cálculos", function(){

    it("Calcula AC", function(){
        expect(true).toBe(true)
    })

    it("Calcula AI", function(){
        expect(true).toBe(true)
    })

    it("Calcula AS", function(){
        expect(true).toBe(true)
    })

    it("Calcula Média", function(){
        expect(true).toBe(true)
    })
    
}) */

