const database = require('../database/memoria');
const perguntar = require('../interface/perguntar');
const Tela = require('../interface/tela');

const TarefaServico = {
  cadastrarTarefa: async() => {

    const titulo = await perguntar('Digite o título da tarefa:');
    const descricao = await perguntar('Digite a descrição da tarefa:');
    const id = new Date().getTime();
    const tarefa = {
                      id: id,
                      titulo: titulo,
                      descricao: descricao,
                      status: 'aberto'
                    };

    database.tarefas.push(tarefa);
    await Tela.mensagemPor('Tarefa cadastrada com sucesso!', 1);
  },

  listarTarefas: async () => {
    Tela.limparTela();
    for(tarefa of database.tarefas){
      console.log(`
        id: ${tarefa.id},
        titulo: ${tarefa.titulo},
        descricao: ${tarefa.descricao},
        status: ${tarefa.status}
        ------------------------------------------
        `)
    }
    await perguntar('Digite enter para sair')
  },
  excluirTarefa: async () => {
    Tela.limparTela();
    const id = await perguntar('Digite o id da tarefa que deseja excluir:');
    const index = TarefaServico.buscarIndiceTarefaPorId(id);
    if(index > -1){
      database.tarefas.splice(index, 1);

      await Tela.mensagemPor('Tarefa excluída com sucesso!', 1);
    }else{
      await Tela.mensagemPor('Tarefa não encontrada!', 1);
    }
  },

  alterarTarefa: async () => {
    Tela.limparTela();
    const id = await perguntar('Digite o id da tarefa que deseja alterar:');
    const index = TarefaServico.buscarIndiceTarefaPorId(id);
    if(index > -1){
      const status = await perguntar('Digite o novo status da tarefa:');
      database.tarefas[index].status = status;
      await Tela.mensagemPor('Tarefa alterada com sucesso!', 1);
    }else{
      await Tela.mensagemPor('Tarefa não encontrada!', 1);
    }
  },

  buscarIndiceTarefaPorId:  (id) => {
    return database.tarefas.findIndex(tarefa => tarefa.id == id);
  }
}
module.exports = TarefaServico;
