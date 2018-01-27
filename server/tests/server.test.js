const expect = require ('expect');
const request = require ('supertest');


const {app} = require ('./../server');
const {Guide} = require ('./../models/guide');


const guides = [{
  name: 'First guide '
}, {
  name: 'Second guide '
}];

beforeEach((done) => {
  Guide.remove({}).then(() => {
    return Guide.insertMany(guides);
  }).then(() => done());
});

describe('POST /guides', () => {
  it('should create a new guide', (done) => {
    var name = 'Giude text';

    request(app)
      .post('/guides')
      .send({name})
      .expect(200)
      .expect((res) => {
        expect(res.body.name).toBe(name);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Guide.find({name}).then((guides) => {
          expect(guides.length).toBe(1);
          expect(guides[0].name).toBe(name);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create guide with invalid body data', (done) => {
    request(app)
      .post('/guides')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Guide.find().then((guides) => {
          expect(guides.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /guides', () => {
  it('should get all guides', (done) => {
    request(app)
      .get('/guides')
      .expect(200)
      .expect((res) => {
        expect(res.body.guides.length).toBe(2);
      })
      .end(done);
  });
});