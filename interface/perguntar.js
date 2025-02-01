const readline = require('readline');



const perguntar = (pergunta) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
      rl.close();
    });
  });
};

module.exports = perguntar;