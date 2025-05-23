//Sirve para agrupar los tests
describe('Nuestro primer test',() => {
    //El Test se puede utilizar tanto test() como it()
    it('Debe revisar que 1 + 1 sean 2', () => {
        expect(1+1).toBe(2)
    })

    it('Debe revisar que 1 + 1 no sean 3', () => {
        expect(1+1).not.toBe(3)
    })
})