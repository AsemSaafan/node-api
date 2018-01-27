const expect = require ('expect');
const request = require ('supertest');


const {app} = require ('./../server');
const {Guide} = require ('./../models/guide');


beforeEach((done) => {
  Guide.remove({}).then(() => done());
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

        Guide.find().then((guides) => {
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
          expect(guides.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
