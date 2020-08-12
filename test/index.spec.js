const supertest = require("supertest");
const app = require("../app");

describe("GET /ping", function () {
    it("Success response status 200", function (done) {
        supertest(app)
            .get("/ping")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});

describe("POST /", function () {

    it("Success response status 200", function (done) {
        supertest(app)
            .post("/")
            .send({ text: "Random text" })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });

    it("Fail response status 400", function (done) {
        supertest(app)
            .post("/")
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});