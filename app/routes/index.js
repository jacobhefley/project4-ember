import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },
   actions: {
     update(rental, params) {
           Object.keys(params).forEach(function(key) {
             if(params[key]!==undefined) {
               rental.set(key,params[key]);
             }
           });
           rental.save();
           this.transitionTo('index');
         },
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
