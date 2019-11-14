// Mostra uma string de trás para frente
exports.reverse_string = function(str){
    return str.split('').reverse().join('')
  }
  
  // Verifica se uma string é uma data
  exports.regexp_date = function(str){
    let pattern = /^((\d{2}\/\d{2}\/\d{1,4})|(\d{1,4}\/\d{2}\/\d{2})|(\d{2}-\d{2}-\d{1,4})|(\d{1,4}-\d{2}-\d{2}))$/
    return pattern.test(str)
  }
  
  // Multiplica dois números
  exports.multiply = function(x, y){
      return x*y;
  }
  
  // Filtra um json de empregados com seu cargo
  exports.filter_post_json = function(json, post){
    let result = '';
    for(let emp of json.employees){
      if(emp.post === post)
        result += emp.name + '\n'
    }
    return result;
  }

  
/* 
// Verifica se o valor do input da matéria é uma string
exports.regexp_date = function(str) {
    let pattern = /^((\d{2}\/\d{2}\/\d{1,4})|(\d{1,4}\/\d{2}\/\d{2})|(\d{2}-\d{2}-\d{1,4})|(\d{1,4}-\d{2}-\d{2}))$/
    return pattern.test(str)
}

// Verifica se o valor do input da AC é um número
exports.regexp_date = function(str) {
    let pattern = /^((\d{2}\/\d{2}\/\d{1,4})|(\d{1,4}\/\d{2}\/\d{2})|(\d{2}-\d{2}-\d{1,4})|(\d{1,4}-\d{2}-\d{2}))$/
    return pattern.test(str)
}

// Verifica se o valor do input da AI é um número
exports.regexp_date = function(str) {
    let pattern = /^((\d{2}\/\d{2}\/\d{1,4})|(\d{1,4}\/\d{2}\/\d{2})|(\d{2}-\d{2}-\d{1,4})|(\d{1,4}-\d{2}-\d{2}))$/
    return pattern.test(str)
}

// Verifica se o valor do input da AS é um número
exports.regexp_date = function(str) {
    let pattern = /^((\d{2}\/\d{2}\/\d{1,4})|(\d{1,4}\/\d{2}\/\d{2})|(\d{2}-\d{2}-\d{1,4})|(\d{1,4}-\d{2}-\d{2}))$/
    return pattern.test(str)
}

// Calcula a AC
exports.multiply = function(x, y) {
    return x*y;
}

// Calcula a AI
exports.multiply = function(x, y) {
    return x*y;
}

// Calcula a AS
exports.multiply = function(x, y) {
    return x*y;
}

// Calcula a Média
exports.multiply = function(x, y) {
    return x*y;
} */

