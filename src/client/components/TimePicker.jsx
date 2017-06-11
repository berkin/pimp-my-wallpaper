import React from 'react'

const Option = props =>
	<option>{`0${props.value}`.slice(-2)}</option>

const range = (max) => {
	const numbers = []
	for (let i = 0; i < max; i += 1) {
		numbers.push(i)
	}
	return numbers
}

const TimePicker = (props) => (
	<div style={{ display: 'inline-block' }}>
		<select aria-labelledby={props.id}>
			{ range(12).map(i => <Option key={i.toString()} value={i} />) }
		</select>
		:
		<select aria-labelledby={props.id}>
			{ range(60).map(i => <Option key={i.toString()} value={i} />) }
		</select>
	</div>
)

export default TimePicker
