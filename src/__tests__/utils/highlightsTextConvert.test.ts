import { highlightsConverter } from "@/utils";

describe('highlightsConverter', () => {
    it('should return the correct text for "alert"', () => {
        expect(highlightsConverter('alert')).toBe('* Meta longe de ser batida')
    })
    it('should return the correct text for "success"', () => {
        expect(highlightsConverter('success')).toBe('* A meta do mês foi batida! Parabéns!')
    })
    it('should return the correct text for "warning"', () => {
        expect(highlightsConverter('warning')).toBe('* Falta pouco vamos lá!')
    })
    it('should return the deafult for unknown input', () => {
        expect(highlightsConverter('un')).toBe('* Sem dados no momento')
    })
})