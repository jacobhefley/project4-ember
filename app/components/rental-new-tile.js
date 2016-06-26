import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    cancelSave() {
      this.set('addNewRental', false);
    },
    saveRental() {
     var params = {
       title: this.get('title'),
       contact: this.get('contact'),
       address: this.get('address'),
       city: this.get('city'),
       state: this.get('state'),
       zip: this.get('zip'),
       bedrooms: parseInt(this.get('bedrooms')),
       bathrooms: parseInt(this.get('bathrooms')),
       cost: parseInt(this.get('cost')),
       description: this.get('description'),
       image: this.get('image')
     };
     this.set('addNewRental', false);
     this.sendAction('saveRental', params);
   }
  }
});
