const rewire = require("rewire")
const init = rewire("./init")
const initConstants = init.__get__("initConstants")
const initDependencies = init.__get__("initDependencies")
const initUtils = init.__get__("initUtils")
const initSerializers = init.__get__("initSerializers")
const initServices = init.__get__("initServices")
const initEnv = init.__get__("initEnv")
// @ponicode
describe("initConstants", () => {
    test("0", () => {
        let callFunction = () => {
            initConstants({ addInstance: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initConstants({ addInstance: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initConstants(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            initConstants(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            initConstants({})
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initDependencies", () => {
    test("0", () => {
        let callFunction = () => {
            initDependencies({ addInstance: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initDependencies({ addInstance: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initDependencies(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            initDependencies(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            initDependencies(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            initDependencies({})
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initUtils", () => {
    test("0", () => {
        let callFunction = () => {
            initUtils({ addInstance: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initUtils({ addInstance: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initUtils(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            initUtils("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            initUtils("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            initUtils({})
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initSerializers", () => {
    test("0", () => {
        let callFunction = () => {
            initSerializers({ addInstance: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initSerializers({ addInstance: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initSerializers(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            initSerializers("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            initSerializers("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initServices", () => {
    test("0", () => {
        let callFunction = () => {
            initServices({ addInstance: () => false, addClass: () => "Maurice Purdy" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initServices({ addInstance: () => false, addClass: () => "Becky Bednar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initServices({ addInstance: () => false, addClass: () => "Ronald Keeling" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            initServices({ addInstance: () => true, addClass: () => "Janet Homenick" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            initServices({ addInstance: () => false, addClass: () => "Janet Homenick" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            initServices(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("init", () => {
    test("0", () => {
        let callFunction = () => {
            init("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            init("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            init("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            init("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            init("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            init(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initEnv", () => {
    test("0", () => {
        let callFunction = () => {
            initEnv({ addInstance: () => "da7588892" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initEnv({ addInstance: () => "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initEnv({ addInstance: () => 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            initEnv({ addInstance: () => "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            initEnv({ addInstance: () => 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            initEnv(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
