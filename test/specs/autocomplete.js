const assert = require('assert');

describe('API-Demos App Test', () => {
    it('should find and enter a country name', async () => {
        // Перейти до Views -> Auto Complete -> Screen Top
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        // Знайти текстове поле за допомогою різних стратегій
        const inputField = await $('android.widget.EditText');
        await inputField.setValue('Ukraine');

        // Перевірити введене значення
        const value = await inputField.getText();
        assert.strictEqual(value, 'Ukraine', 'Назва країни не відповідає очікуваній');
    });

    it('should test another main menu item 1', async () => {
        // Додай тест для іншого пункту меню
        await driver.back();  // Повернутись назад
        await $('~Views').click();
        await $('~Expandable Lists').click();
        await $('~1. Custom Adapter').click();
        // Додай перевірки для тесту
    });

    it('should test another main menu item 2', async () => {
        // Додай тест для ще одного пункту меню
        await driver.back();  // Повернутись назад
        await $('~Views').click();
        await $('~Drag and Drop').click();
        const dragElement = await $('~drag_dot_1');
        const dropElement = await $('~drag_dot_2');
        await driver.performActions([
            { type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' }, actions: [
                { type: 'pointerMove', duration: 0, x: dragElement.location.x, y: dragElement.location.y },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 },
                { type: 'pointerMove', duration: 1000, x: dropElement.location.x, y: dropElement.location.y },
                { type: 'pointerUp', button: 0 }
            ]}
        ]);
        // Додай перевірки
    });
});
