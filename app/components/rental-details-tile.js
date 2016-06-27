import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    saveToFavorites(rental) {
      this.get('favorites').save(rental);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    }
  }
});
