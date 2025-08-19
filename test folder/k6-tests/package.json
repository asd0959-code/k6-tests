pm.test("Test Json", function () {
    pm.response.to.have.jsonBody();
});

pm.test("Test body", function (){
    const getData = pm.response.json();

    pm.expect(getData).to.have.property("people");
    pm.expect(getData).to.have.property("planets");
    pm.expect(getData).to.have.property("films");
    pm.expect(getData).to.have.property("species");
    pm.expect(getData).to.have.property("vehicles");
    pm.expect(getData).to.have.property("starships");
});

pm.test("Test Json is not NULL", function (){
    const getData = pm.response.json();
    pm.expect(getData.planets).not.equal(null);
});

pm.test("Status200", function (){
    pm.response.to.have.status(200);
});

pm.test("Status OK", function (){
    pm.response.to.have.status("OK");
});

pm.test("Tedst time 500", function (){
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("response must be valid and have a body", function() {
    pm.response.to.be.ok;
    pm.response.to.be.withBody;
    pm.response.to.be.json;
});

pm.test("Test Headers", function (){
    pm.response.to.have.header("Connection", "keep-alive");
    pm.response.to.have.header("Vary", "Accept, Cookie");
    pm.response.to.have.header("Allow", "GET, HEAD, OPTIONS")
});
