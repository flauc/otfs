#!/usr/bin/env node

const fs = require("fs"),
    otfs = require("otfs"),
    test = {
        something: "bla",
        fu: "bar",
        one: [1, 2, 3, 5, 7, 10],
        m: {
            a: "b",
            c: "d",
            e: "e",
            f: {
                i: "j",
                k: "l",
                m: ["abc", "de"]
            }
        }
    };

fs.writeFile('test/somethings.json', otfs.create(test), (err) => {
    if (err) console.log(err);
    else console.log("file created")
});