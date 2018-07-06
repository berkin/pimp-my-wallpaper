import React from 'react'

const Option = props => <option>{`0${props.value}`.slice(-2)}</option>

const range = max => {
	const numbers = []
	for (let i = 0; i < max; i += 1) {
		numbers.push(i)
	}
	return numbers
}

const TimePicker = props => {
	const { name, value, onInputChange } = props
	const { hour, min } = value
	let input1, input2
	const onChange = e => {
		const { value } = e.target
		onInputChange({
			[name]: value,
		})
	}

	return (
		<div style={{ display: 'inline-block' }}>
			<select
				aria-labelledby={props.id}
				onChange={onChange}
				ref={node => {
					input1 = node
				}}>
				{range(12).map(i => (
					<Option selected={hour === i} key={i.toString()} value={i} />
				))}
			</select>
			:
			<select
				aria-labelledby={props.id}
				onChange={onInputChange}
				ref={node => {
					input2 = node
				}}>
				{range(60).map(i => (
					<Option selected={min === i} key={i.toString()} value={i} />
				))}
			</select>
		</div>
	)
}
export default TimePicker
