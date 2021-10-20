const rewire = require("rewire")
const mongo_embedded_analyzer = rewire("./mongo-embedded-analyzer")
const iterateOnTypeKeysToAddNestedSchemas = mongo_embedded_analyzer.__get__("iterateOnTypeKeysToAddNestedSchemas")
const setIdToSchema = mongo_embedded_analyzer.__get__("setIdToSchema")
// @ponicode
describe("mongo_embedded_analyzer.getMongooseArraySchema", () => {
    test("0", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.getMongooseArraySchema(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.getMongooseArraySchema(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.getMongooseArraySchema(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.getMongooseArraySchema(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.getMongooseArraySchema(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.getMongooseArraySchema(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.haveSameEmbeddedType", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.haveSameEmbeddedType("number", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.haveSameEmbeddedType("string", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.haveSameEmbeddedType("number", "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.haveSameEmbeddedType("object", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.haveSameEmbeddedType("string", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.haveSameEmbeddedType(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.areSchemaTypesMixed", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areSchemaTypesMixed("Object", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areSchemaTypesMixed("Object", "Object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areSchemaTypesMixed("object", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areSchemaTypesMixed("Object", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areSchemaTypesMixed("Object", { This: "is", an: "object", Do: 0, you: 1, Like: 2, it: 10000 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areSchemaTypesMixed(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.areAnalysesSameEmbeddedType", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.areAnalysesSameEmbeddedType(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.areAnalysesSameEmbeddedType(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.areAnalysesSameEmbeddedType(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.areAnalysesSameEmbeddedType(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            mongo_embedded_analyzer.areAnalysesSameEmbeddedType(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.areAnalysesSameEmbeddedType(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.addMongooseType", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addMongooseType("object", "UNLOCK TABLES;", "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addMongooseType("string", "DROP TABLE tmp;", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addMongooseType("array", "UPDATE Projects SET pname = %s WHERE pid = %s", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addMongooseType("object", "UPDATE Projects SET pname = %s WHERE pid = %s", "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addMongooseType("string", "UNLOCK TABLES;", "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addMongooseType(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.detectSubDocumentsIdUsage", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.detectSubDocumentsIdUsage("foo bar", "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.detectSubDocumentsIdUsage("Foo bar", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.detectSubDocumentsIdUsage("Hello, world!", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.detectSubDocumentsIdUsage("Foo bar", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.detectSubDocumentsIdUsage("Hello, world!", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.detectSubDocumentsIdUsage(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("iterateOnTypeKeysToAddNestedSchemas", () => {
    test("0", () => {
        let callFunction = () => {
            iterateOnTypeKeysToAddNestedSchemas({ key: "elio@example.com" }, "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            iterateOnTypeKeysToAddNestedSchemas({ key: "Dillenberg" }, "invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            iterateOnTypeKeysToAddNestedSchemas({ key: "Elio" }, "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            iterateOnTypeKeysToAddNestedSchemas({ key: "elio@example.com" }, "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            iterateOnTypeKeysToAddNestedSchemas({ key: "Dillenberg" }, "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            iterateOnTypeKeysToAddNestedSchemas({ key: "" }, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setIdToSchema", () => {
    test("0", () => {
        let callFunction = () => {
            setIdToSchema("object", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            setIdToSchema("string", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            setIdToSchema("number", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            setIdToSchema("array", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            setIdToSchema(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.addObjectSchema", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addObjectSchema({ key: "Elio" }, { key: "Dillenberg" }, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addObjectSchema({ key: "Dillenberg" }, { key: "elio@example.com" }, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addObjectSchema({ key: "Elio" }, { key: "Elio" }, "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addObjectSchema({ key: "elio@example.com" }, { key: "Elio" }, "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addObjectSchema({ key: "Dillenberg" }, { key: "elio@example.com" }, "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addObjectSchema(undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.addNestedSchemaToParentSchema", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addNestedSchemaToParentSchema("number", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addNestedSchemaToParentSchema("object", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addNestedSchemaToParentSchema({ This: "is", an: "object", Do: 0, you: 1, Like: 2, it: 10000 }, "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addNestedSchemaToParentSchema("string", "withdrawal transaction at Kovacek Inc using card ending with ***6291 for IRR 718.83 in account ***77705372", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addNestedSchemaToParentSchema("number", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.addNestedSchemaToParentSchema(undefined, "", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.mergeAnalyzedSchemas", () => {
    test("0", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.mergeAnalyzedSchemas([true, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.mergeAnalyzedSchemas([true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.mergeAnalyzedSchemas([false, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.mergeAnalyzedSchemas([true, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.mergeAnalyzedSchemas([false, false, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.mergeAnalyzedSchemas(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mongo_embedded_analyzer.hasEmbeddedTypes", () => {
    test("0", () => {
        let param1 = [[false, true, false], [false, true, false], [true, false, false]]
        let callFunction = () => {
            mongo_embedded_analyzer.hasEmbeddedTypes(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[false, true, false], [true, true, false], [true, false, true]]
        let callFunction = () => {
            mongo_embedded_analyzer.hasEmbeddedTypes(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[false, true, false], [true, true, false], [true, true, true]]
        let callFunction = () => {
            mongo_embedded_analyzer.hasEmbeddedTypes(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[false, true, true], [false, true, false], [false, true, false]]
        let callFunction = () => {
            mongo_embedded_analyzer.hasEmbeddedTypes(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[false, false, true], [true, false, true], [true, false, true]]
        let callFunction = () => {
            mongo_embedded_analyzer.hasEmbeddedTypes(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mongo_embedded_analyzer.hasEmbeddedTypes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
