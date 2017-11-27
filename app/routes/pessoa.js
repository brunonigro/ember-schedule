import Route from '@ember/routing/route';

export default Route.extend({
    // Obs.: Não entendi porque o id agora é uma string
    pessoas: [{id: '1', nome: 'Bruno'}, {id: '2', nome: 'Marina'}],

    model(params) {
        return this.get('pessoas').findBy('id', params.id);
    }
});
