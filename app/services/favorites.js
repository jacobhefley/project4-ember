import Ember from 'ember';

export default Ember.Service.extend({
  rentals: [],

  save(rental) {
    this.get('rentals').pushObject(rental);
  }
});
