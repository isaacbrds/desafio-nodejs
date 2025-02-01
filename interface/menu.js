const  perguntar  = require('./perguntar');
const TarefaServico = require('../servicos/tarefa_servico');
const Tela = require('./tela');

const menu = async () =>{
  let sair = 0;
  while (sair == 0) {
    const opcao = await perguntar(`
      [1] - Cadastrar
      [2] - Listar
      [3] - Atualizar
      [4] - Deletar
      [5] - Sair
      Escolha uma opção:
      `);
    Tela.limparTela();
  switch (opcao) {
    case '1':
      console.log('Cadastrando');
      await TarefaServico.cadastrarTarefa();
      break;
    case '2':
      console.log('Listando');
      await TarefaServico.listarTarefas();
      break;
    case '3':
      console.log('Atualizar');

      break;
    case '4':
      console.log('Deletar');
      break;
    case '5':
      console.log('Saindo...');
      sair = 1;
      break;
    default:
        console.log('Opção inválida');
        break;
    }
  }
  //rl.close();
  //process.exit(0); // Encerra o programa após sair do loop
}

module.exports = menu;