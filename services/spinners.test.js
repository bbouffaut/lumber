const spinners = require("./spinners")
// @ponicode
describe("spinners.add", () => {
    test("0", () => {
        let param2 = [[true, false, false, true], [true, false], [true, false], [false, true, true, true, true]]
        let result = spinners.add("Dillenberg", param2, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param2 = [[false, false, true, false, true], [false], [false, true, false, true], [true, false, false, true, true]]
        let result = spinners.add("Elio", param2, true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param2 = [[true, false, true, false, true], [true], [true, true, true, true], [false, true, false, false, true]]
        let result = spinners.add("Dillenberg", param2, true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param2 = [[false, false, true, false], [true, true], [false, true], [false, false, false, false, true]]
        let result = spinners.add("elio@example.com", param2, true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param2 = [[false], [false], [false, false, true]]
        let result = spinners.add("elio@example.com", param2, true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = spinners.add("", [], false)
        expect(result).toMatchSnapshot()
    })
})
