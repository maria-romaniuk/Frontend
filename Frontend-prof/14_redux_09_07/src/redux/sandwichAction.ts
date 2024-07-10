export type ActionSandwich = 
| { type: 'addIngredient', payload: string }
| {type: 'clearOrder'}