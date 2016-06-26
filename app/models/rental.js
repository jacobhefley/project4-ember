import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  contact: DS.attr(),
  address: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr(),
  bedrooms: DS.attr(),
  bathrooms: DS.attr(),
  cost: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
