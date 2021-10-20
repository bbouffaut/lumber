const rewire = require("rewire")
const database_analyzer = rewire("./database-analyzer")
const reportEmptyDatabase = database_analyzer.__get__("reportEmptyDatabase")
// @ponicode
describe("reportEmptyDatabase", () => {
    test("0", async () => {
        await reportEmptyDatabase("sequelize", "LLC")
    })

    test("1", async () => {
        await reportEmptyDatabase("mongoose", "LLC")
    })

    test("2", async () => {
        await reportEmptyDatabase("sequelize", "Inc")
    })

    test("3", async () => {
        await reportEmptyDatabase("mongoose", "and Sons")
    })

    test("4", async () => {
        await reportEmptyDatabase("v4.0.0-rc.4", "and Sons")
    })

    test("5", async () => {
        await reportEmptyDatabase(undefined, undefined)
    })
})

// @ponicode
describe("database_analyzer", () => {
    test("0", () => {
        let callFunction = () => {
            database_analyzer("postgres", { dbDialect: "mongodb" }, 0.1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            database_analyzer("postgres", { dbDialect: "Edmond" }, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            database_analyzer("mongo", { dbDialect: "mongodb" }, 12.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            database_analyzer("mongo", { dbDialect: "Edmond" }, 3.14)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            database_analyzer("mysql", { dbDialect: "Jean-Philippe" }, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            database_analyzer(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
