import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someNames')).toBe('someNames');
    });
    test('with additional class', () => {
        expect(classNames('someNames', {}, ['class1', 'class2'])).toBe(
            'someNames class1 class2'
        );
    });
    test('with mods', () => {
        expect(classNames('someNames', { hovered: true })).toBe(
            'someNames hovered'
        );
    });
    test('with mods', () => {
        const expectedResult = 'someNames hovered class1 class2';
        expect(
            classNames('someNames', { hovered: true, selected: false }, [
                'class1',
                'class2',
            ])
        ).toBe(expectedResult);
    });
    test('with undefined', () => {
        const expectedResult = 'someNames hovered class1 class2';
        expect(
            classNames('someNames', { hovered: true, selected: undefined }, [
                'class1',
                'class2',
            ])
        ).toBe(expectedResult);
    });
    test('empty', () => {
        expect(classNames('')).toBe('');
    });
});
