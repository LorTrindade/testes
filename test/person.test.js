import { describe, it, expect, jest } from '@jest/globals'
import Person from '../src/person.js'
describe('#Person Suite', () => {
    describe('validate', () => {
        it('should throw if name is empty', () => {
            // mock é a entrada necessária para que o teste funciona
            const mockInvalidPerson = {
                name: '',
                cpf: '123.456.789-00'
            }

            const result = () => Person.validate(mockInvalidPerson)

            expect(result).toThrow(new Error('name is required'))
        })

        it('should throw if cpf is empty', () => {
            // mock é a entrada necessária para que o teste funciona
            const mockInvalidPerson = {
                name: 'John Doe',
                cpf: ''
            }

            const result = () => Person.validate(mockInvalidPerson)

            expect(result).toThrow(new Error('cpf is required'))
        })

        it('should not throw if person is valid', () => {
            // mock é a entrada necessária para que o teste funciona
            const mockInvalidPerson = {
                name: 'John Doe',
                cpf: '123.456.789-00'
            }

            const result = () => Person.validate(mockInvalidPerson)

            expect(result).not.toThrow()
        })
    })

    describe('#format', () => {
        // parte do principio que os dados foram validados
        it('should format the person name and CPF', () => {
            // AAA

            // Arrange = Prepara
            const mockPerson = {
                name: 'Jane Doe',
                cpf: '123.456.789-00'
            }

            //Act = Executar
            const formattedPerson = Person.format(mockPerson)

            //Assert = Validar
            const expected = {
                name: 'Jane',
                cpf: '12345678900',
                lastName: 'Doe'
            }

            expect(formattedPerson).toStrictEqual(expected)
        })
    })

    describe('#preocess', () => {
        it('should process a valid person', () => {
            const mockPerson = {
                name: 'Hello Beautiful',
                cpf: '123.456.789-00'
            }
            jest.spyOn(
                Person,
                Person.validate.name
            ).mockReturnValue()

            jest.spyOn(
                Person,
                Person.format.name
            ).mockReturnValue({
                cpf: '12345678900',
                name: 'Hello',
                lastName: 'Beautiful'
            })

            const expected = 'ok'

            const result = Person.process(mockPerson)

            expect(result).toStrictEqual(expected)
        })
    })
})