const rewire = require("rewire")
const mongo_hasmany_analyzer = rewire("./mongo-hasmany-analyzer")
const pickSampleValues = mongo_hasmany_analyzer.__get__("pickSampleValues")
const detectReference = mongo_hasmany_analyzer.__get__("detectReference")
const buildReference = mongo_hasmany_analyzer.__get__("buildReference")
// @ponicode
describe("pickSampleValues", () => {
    test("0", () => {
        let callFunction = () => {
            pickSampleValues({ collection: () => ["foo bar", -0.353, "**text**", 4653] }, 123, { name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            pickSampleValues({ collection: () => ["foo bar", -0.353, "**text**", 4653] }, 123, { name: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            pickSampleValues({ collection: () => ["foo bar", -0.353, "**text**", 4653] }, "user-name", { name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            pickSampleValues({ collection: () => [-1, 0.5, 1, 2, 3, 4, 5] }, "username", { name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            pickSampleValues({ collection: () => ["foo bar", -0.353, "**text**", 4653] }, 123, { name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            pickSampleValues(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("detectReference", () => {
    test("0", () => {
        let callFunction = () => {
            detectReference({ key: "Dillenberg" }, "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            detectReference({ key: "elio@example.com" }, "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            detectReference({ key: "Dillenberg" }, "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            detectReference({ key: "Elio" }, "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            detectReference({ key: "elio@example.com" }, "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", 123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            detectReference(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_hasmany_analyzer.detectHasMany", () => {
    test("0", () => {
        let param2 = [["Home Loan Account", "Home Loan Account", "Credit Card Account"], ["Checking Account", "Credit Card Account", "Investment Account"], ["Home Loan Account", "Credit Card Account", "Investment Account"]]
        let callFunction = () => {
            mongo_hasmany_analyzer.detectHasMany("mysql", param2, "user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["Credit Card Account", "Investment Account", "Investment Account"], ["Investment Account", "Checking Account", "Credit Card Account"], ["Credit Card Account", "Checking Account", "Credit Card Account"]]
        let callFunction = () => {
            mongo_hasmany_analyzer.detectHasMany("mysql", param2, "user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["Credit Card Account", "Investment Account", "Credit Card Account"], ["Credit Card Account", "Investment Account", "Credit Card Account"], ["Home Loan Account", "Checking Account", "Checking Account"]]
        let callFunction = () => {
            mongo_hasmany_analyzer.detectHasMany("mongo", param2, 123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["Credit Card Account", "Checking Account", "Investment Account"], ["Credit Card Account", "Investment Account", "Investment Account"], ["Investment Account", "Investment Account", "Credit Card Account"]]
        let callFunction = () => {
            mongo_hasmany_analyzer.detectHasMany("mongo", param2, "user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["Credit Card Account", "Investment Account", "Checking Account"], ["Credit Card Account", "Investment Account", "Investment Account"], ["Credit Card Account", "Credit Card Account", "Home Loan Account"]]
        let callFunction = () => {
            mongo_hasmany_analyzer.detectHasMany("mysql", param2, "user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_hasmany_analyzer.detectHasMany("", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_hasmany_analyzer.applyHasMany", () => {
    test("0", () => {
        let param2 = [[true, true, false], [false, false, false], [true, false, true]]
        let callFunction = () => {
            mongo_hasmany_analyzer.applyHasMany(["Credit Card Account", "Credit Card Account", "Home Loan Account"], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[true, true, false], [true, false, false], [true, false, false]]
        let callFunction = () => {
            mongo_hasmany_analyzer.applyHasMany(["Credit Card Account", "Checking Account", "Home Loan Account"], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[true, true, true], [true, true, false], [false, false, true]]
        let callFunction = () => {
            mongo_hasmany_analyzer.applyHasMany(["Credit Card Account", "Credit Card Account", "Credit Card Account"], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[true, true, true], [false, true, true], [false, false, true]]
        let callFunction = () => {
            mongo_hasmany_analyzer.applyHasMany(["Investment Account", "Checking Account", "Investment Account"], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[false, true, false], [false, true, false], [false, true, false]]
        let callFunction = () => {
            mongo_hasmany_analyzer.applyHasMany(["Home Loan Account", "Credit Card Account", "Credit Card Account"], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_hasmany_analyzer.applyHasMany(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("buildReference", () => {
    test("0", () => {
        let callFunction = () => {
            buildReference("user_name", false, { name: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            buildReference("user-name", false, { name: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            buildReference("user-name", true, { name: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            buildReference("user123", true, { name: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            buildReference("username", true, { name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            buildReference(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
