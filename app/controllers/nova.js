import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        salvar(pessoa) {
            this.transitionToRoute('lista');
        },

        salvarAoPressionarEnter() {
            this.send('salvar', this.get('model'));
        }
    }
});
