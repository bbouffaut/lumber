const application_context = require("./application-context")
// @ponicode
describe("application_context._getInstanceName", () => {
    test("0", () => {
        let callFunction = () => {
            application_context._getInstanceName({ name: { charAt: () => "+", slice: () => "This is a Text" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            application_context._getInstanceName({ name: { charAt: () => "Z", slice: () => "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            application_context._getInstanceName({ name: { charAt: () => " ", slice: () => "Hello, world!" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            application_context._getInstanceName({ name: { charAt: () => "+", slice: () => "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            application_context._getInstanceName({ name: { charAt: () => ">", slice: () => "Hello, world!" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            application_context._getInstanceName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("inject", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.inject()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addClass", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addClass("Becky Bednar", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addClass("Janet Homenick", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addClass("Gail Hoppe", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addClass("Maurice Purdy", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addClass("Maurice Purdy", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addClass(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addInstance", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addInstance("Pierre Edouard", 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addInstance("George", "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addInstance("George", "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addInstance("Jean-Philippe", 9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addInstance("George", 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addInstance(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("with", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.with("Michael", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.with("George", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.with("Michael", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.with("Anas", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.with("Pierre Edouard", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.with(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addValue", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addValue("Anas", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addValue("Anas", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addValue("Pierre Edouard", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addValue("Pierre Edouard", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addValue("George", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addValue(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addFunction", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addFunction("Anas", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addFunction("Edmond", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addFunction("Michael", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addFunction("Edmond", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addFunction("Pierre Edouard", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addFunction(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("init", () => {
    let inst

    beforeEach(() => {
        inst = new application_context()
    })

    test("0", () => {
        let callFunction = () => {
            inst.init(() => "Safari")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.init(() => "bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.init(() => "png.mpg4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.init(() => "services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.init(() => "arizona_extend.wav")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.init(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
