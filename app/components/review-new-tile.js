import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showReviewForm: false,
  actions:{
    reviewFormShow(){
      this.set('showReviewForm', true);
    },
    cancelSave() {
      this.set('showReviewForm', false);
    },
    saveReview() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        rating: parseFloat(this.get('rating')),
        rental: this.get('rental')
      };
      this.set('showReviewForm', false);
      this.sendAction('saveReviewToRental', params);
    }
  }
});
