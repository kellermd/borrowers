import FriendsBaseController from './base';

export default FriendsBaseController.extend({
    actions: {
        cancel() {
            console.log('+- cancel action in friends new controller');
            this.transitionToRoute('friends.index');
            return false;
        }
    }
});
