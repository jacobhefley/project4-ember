import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalFormShow() {
      this.set('updateRentalForm', true);
    },
    cancelEdit() {
      this.set('updateRentalForm', false);
    },
    update(rental) {
      var params = {
        title: this.get('rental.title'),
        contact: this.get('rental.contact'),
        address: this.get('rental.address'),
        city: this.get('rental.city'),
        state: this.get('rental.state'),
        zip: this.get('rental.zip'),
        bedrooms: parseInt(this.get('rental.bedrooms')),
        bathrooms: parseInt(this.get('rental.bathrooms')),
        cost: parseInt(this.get('rental.cost')),
        description: this.get('rental.description'),
        image: this.get('rental.image')
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
