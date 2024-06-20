type Ingredient = 'bread' | 'cheese' | 'salami' | 'tomato';

type Action =
| { type: 'sandwich/addIngredient', payload: Ingredient }
// payload полезная нагрузка для действия. описываем функцию именно что за элемент мы добавляем.
| {type: 'sandwich/clear' }// при выполнении не нужна нагрузка, мы заранее знаем все данные. нам нужно просто это выполнить

export default Action;