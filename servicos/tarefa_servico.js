const database = require('../database/memoria');
const perguntar = require('../interface/perguntar');
const Tela = require('../interface/tela');

const TarefaServico = {
  cadastrarTarefa: async() => {
  
    const titulo = await perguntar('Digite o título da tarefa:');
    const descricao = await perguntar('Digite a descrição da tarefa:');
    const id = new Date().getTime();
    const tarefa = {id: id, titulo: titulo, descricao: descricao};

    database.tarefas.push(tarefa);
    Tela.mensagemPor('Tarefa cadastrada com sucesso!', 1);
  },

  listarTarefas: async () => {
    Tela.limparTela();
    for(tarefa of database.tarefas){
      console.log(`
        id: ${tarefa.id},
        titulo: ${tarefa.titulo},
        descricao: ${tarefa.descricao}
        ------------------------------------------
        `)
    }
    await perguntar('Digite enter para sair')
  }
}
module.exports = TarefaServico;
