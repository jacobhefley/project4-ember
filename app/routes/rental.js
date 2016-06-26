import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    updateRental(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
    },
    saveReviewToRental(params) {
      var newReview = this.store.createRecord('review', params);
      var rental = params.rental;
      rental.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return rental.save();
      });
    this.transitionTo('rental', params.rental);
    }
    // save3(params) {
    //   var newRental = this.store.createRecord('rental', params);
    //   var city = params.city;
    //   city.get('rentals').addObject(newRental);
    //   newRental.save().then(function() {
    //     return city.save();
    //   });
    //   this.transitionTo('city', params.city);
    // },
    // destroyCity(city) {
    //   var rental_deletions = city.get('rentals').map(function(rental) {
    //     return rental.destroyRecord();
    //   });
    //   Ember.RSVP.all(rental_deletions)
    //      .then(function() {
    //      return city.destroyRecord();
    //   })
    //   this.transitionTo('index');
    // }
  }
});
