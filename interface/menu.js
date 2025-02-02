const  perguntar  = require('./perguntar');
const TarefaServico = require('../servicos/tarefa_servico');
const Tela = require('./tela');

const menu = async () =>{
  let sair = 0;
  while (sair == 0) {
    const opcao = await perguntar(`
      [1] - Cadastrar Tarefas
      [2] - Listar Tarefas
      [3] - Atualizar Tarefa
      [4] - Deletar Tarefa
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
      await TarefaServico.alterarTarefa();
      break;
    case '4':
      console.log('Deletar');
      await TarefaServico.excluirTarefa();
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
}

module.exports = menu;