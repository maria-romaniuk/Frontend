export type ActionCounter = 
| { type: 'counter/minus' }
| { type: 'counter/plus' }
| { type: 'counter/minus10' }
| { type: 'counter/plus10' }
| { type: 'counter/customMinus', payload: number }
| { type: 'counter/customPlus', payload: number }

// { type: string, payload?: any }