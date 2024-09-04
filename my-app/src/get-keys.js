import { handleOperand, handleOperator } from './handlers';

export const getKeys = (state, setState) => [
	{
		id: '1',
		value: '1',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '2',
		value: '2',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '3',
		value: '3',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '4',
		value: '4',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '5',
		value: '5',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '6',
		value: '6',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '7',
		value: '7',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '8',
		value: '8',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '9',
		value: '9',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: '0',
		value: '0',
		group: 'operand',
		handler: (value) => handleOperand(state, setState, value),
	},
	{
		id: 'С',
		value: 'С',
		group: 'operator',
		handler: (value) => handleOperator(state, setState, value),
	},
	{
		id: '-',
		value: '-',
		group: 'operator',
		handler: (value) => handleOperator(state, setState, value),
	},
	{
		id: '+',
		value: '+',
		group: 'operator',
		handler: (value) => handleOperator(state, setState, value),
	},
	{
		id: '=',
		value: '=',
		group: 'operator',
		handler: (value) => handleOperator(state, setState, value),
	},
];
