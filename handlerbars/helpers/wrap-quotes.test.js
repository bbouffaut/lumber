const wrap_quotes = require("./wrap-quotes")
// @ponicode
describe("wrap_quotes", () => {
    test("0", () => {
        let callFunction = () => {
            wrap_quotes("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            wrap_quotes("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            wrap_quotes("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            wrap_quotes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            wrap_quotes("}Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            wrap_quotes("\u000b")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("6", () => {
        let callFunction = () => {
            wrap_quotes("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
