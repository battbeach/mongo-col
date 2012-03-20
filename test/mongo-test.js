var collection = require("../"),
    assert = require("assert"),
    Users = collection("Users")

describe("mongo-collection", function () {
    beforeEach(function (done) {
        Users.drop(function () {
            done()
        })
    })

    it("should allow inserting", function (done) {
        Users.insert({ name: "foo" })
        Users.findOne({ name: "foo" }, function (err, data) {
            assert(data.name === "foo",
                "data name incorrect")
            done()
        })
    })
})