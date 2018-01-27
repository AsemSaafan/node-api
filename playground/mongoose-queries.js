const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Guide} = require('./../server/models/guide');
const {Service} = require('./../server/models/service');

// var id = '57bf38394b39c93d2a557e9811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Guide.find({
//   _id: id
// }).then((guides) => {
//   console.log('Guide', guides);
// });
//
// Guide.findOne({
//   _id: id
// }).then((guide) => {
//   console.log('Guide', guide);
// });

// Guide.findById(id).then((guide) => {
//   if (!guide) {
//     return console.log('Id not found');
//   }
//   console.log('Guide By Id', guide);
// }).catch((e) => console.log(e));

Service.findById('57bdb0fcdedf88540bfa2d66').then((service) => {
  if (!service) {
    return console.log('Unable to find service');
  }

  console.log(JSON.stringify(service, undefined, 2));
}, (e) => {
  console.log(e);
});
