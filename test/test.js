const test = require("tape");
const router = require("../src/router.js");
const supertest = require("supertest");

test("test if tape is working", t => {
  t.equal(1, 1, "1 should equal 1");
  t.end();
});

test("check if status code is 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, "hello", "response should contain 'hello'");
      t.end();
    });
});

test("check if status code is 404", t => {
  supertest(router)
    .get("/elephants")
    .expect(404)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, "unknown uri", "response should contain 'unknown uri'");
      t.end();
    });
});

test("check that filter function doesn't change the input", t => {
  const input = {};
  //placeholder for function
  const actual = input;
  const expected = [];
  console.log(input === expected);
  t.equals(
    actual,
    expected,
    "The output of the filter function should be different than the input"
  );
  t.end();
});
