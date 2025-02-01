const Tela = {
  limparTela: ()=>{
    const isWindows = process.platform === 'win32';
    // Usa o comando apropriado para limpar a tela
    process.stdout.write(isWindows ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
  },

  esperarSegundos: (segundos)=>{
    return new Promise((resolve) => {
      setTimeout(resolve, segundos * 1000); // Converte segundos em milissegundos
    });
  },
  mensagemPor: (mensagem, segundos)=>{
    Tela.limparTela();
    console.log(mensagem)
    Tela.esperarSegundos(segundos)
  }
}

module.exports = Tela;