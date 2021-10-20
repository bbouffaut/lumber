const rewire = require("rewire")
const mongo_collections_analyzer = rewire("./mongo-collections-analyzer")
const mapCollection = mongo_collections_analyzer.__get__("mapCollection")
const mapReduceErrors = mongo_collections_analyzer.__get__("mapReduceErrors")
const analyzeMongoCollection = mongo_collections_analyzer.__get__("analyzeMongoCollection")
const reduceCollection = mongo_collections_analyzer.__get__("reduceCollection")
// @ponicode
describe("mapCollection", () => {
    test("0", () => {
        let callFunction = () => {
            mapCollection()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapReduceErrors", () => {
    test("0", () => {
        let callFunction = () => {
            mapReduceErrors("George", "the specified credentials were rejected by the server", "user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapReduceErrors("George", "Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.", 123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapReduceErrors("Edmond", "Internal Server Error\n", "user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapReduceErrors("Anas", "Could not find a submission object for message from xqueue", "user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapReduceErrors("Edmond", "Connection is closed", 123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapReduceErrors(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("analyzeMongoCollection", () => {
    test("0", () => {
        let callFunction = () => {
            analyzeMongoCollection({ collection: () => ["a", "b", "043", "holasenior"] }, 123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            analyzeMongoCollection({ collection: () => ["a", "b", "043", "holasenior"] }, "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            analyzeMongoCollection({ collection: () => [10, -45.9, 103.5, 0.955674] }, 123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            analyzeMongoCollection({ collection: () => ["foo bar", -0.353, "**text**", 4653] }, "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            analyzeMongoCollection({ collection: () => ["a", "b", "043", "holasenior"] }, "user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            analyzeMongoCollection(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_collections_analyzer", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_collections_analyzer({ collections: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_collections_analyzer({ collections: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_collections_analyzer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_collections_analyzer("mysql")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_collections_analyzer("sqlite")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_collections_analyzer({})
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("reduceCollection", () => {
    test("0", () => {
        let param2 = [["da7588892", "da7588892", 12345], [9876, "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"], [9876, 12345, "c466a48309794261b64a4f02cfcc3d64"]]
        let callFunction = () => {
            reduceCollection("Elio", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["bc23a9d531064583ace8f67dad60f6bb", 9876, "bc23a9d531064583ace8f67dad60f6bb"], ["bc23a9d531064583ace8f67dad60f6bb", 12345, "bc23a9d531064583ace8f67dad60f6bb"], ["c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64", 9876]]
        let callFunction = () => {
            reduceCollection("Elio", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"], [12345, "da7588892", "da7588892"], ["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"]]
        let callFunction = () => {
            reduceCollection("elio@example.com", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[9876, "c466a48309794261b64a4f02cfcc3d64", 12345], [9876, 9876, 9876], [12345, 9876, "c466a48309794261b64a4f02cfcc3d64"]]
        let callFunction = () => {
            reduceCollection("Dillenberg", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["c466a48309794261b64a4f02cfcc3d64", "da7588892", "da7588892"], [9876, "c466a48309794261b64a4f02cfcc3d64", "da7588892"], [12345, "c466a48309794261b64a4f02cfcc3d64", "da7588892"]]
        let callFunction = () => {
            reduceCollection("Dillenberg", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reduceCollection(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
