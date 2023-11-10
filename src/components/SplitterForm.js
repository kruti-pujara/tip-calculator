import PersonIcon from "../assets/images/icon-person.svg";
import DollarIcon from "../assets/images/icon-dollar.svg";
import { useEffect } from "react";
function SplitterForm({
	amount,
	setAmount,
	persons,
	selected,
	setPersons,
	setSelected,
	tip,
	setTip,
}) {
	const handleRadioCheck = (e) => {
		setSelected(e.target.value);
	};

	useEffect(() => {
		setSelected("");
	}, [setSelected, tip]);

	return (
		<div className='splitter-left'>
			<div className='form-group'>
				<label className='form-label'>Bill</label>
				<input
					type='number'
					value={amount}
					placeholder='0'
					className='form-control'
					onChange={(e) => setAmount(Number(e.target.value))}
				/>
				<img src={DollarIcon} alt='person icon' />
			</div>

			<div className='radio-wrapper form-group'>
				<label className='form-label'>select tip %</label>
				<div className='radio-btn'>
					<input
						type='radio'
						name='radio'
						id='eight'
						value='8'
						checked={selected === "8"}
						onChange={handleRadioCheck}
					/>
					<label for='five'>8%</label>
				</div>
				<div className='radio-btn'>
					<input
						type='radio'
						name='radio'
						id='ten'
						value='10'
						checked={selected === "10"}
						onChange={handleRadioCheck}
					/>
					<label for='ten'>10%</label>
				</div>
				<div className='radio-btn'>
					<input
						type='radio'
						name='radio'
						id='fifteen'
						value='15'
						checked={selected === "15"}
						onChange={handleRadioCheck}
					/>
					<label for='fifteen'>15%</label>
				</div>
				<div className='radio-btn'>
					<input
						type='radio'
						name='radio'
						id='twenty-five'
						value='25'
						checked={selected === "25"}
						onChange={handleRadioCheck}
					/>
					<label for='twenty-five'>25%</label>
				</div>
				<div className='radio-btn'>
					<input
						type='radio'
						name='radio'
						id='fifty'
						value='50'
						checked={selected === "50"}
						onChange={handleRadioCheck}
					/>
					<label for='fifty'>50%</label>
				</div>
				<div className='radio-btn'>
					<input
						type='number'
						value={tip}
						placeholder='custom'
						className='text-input'
						onChange={(e) => setTip(Number(e.target.value))}
					/>
				</div>
			</div>

			<div className='form-group'>
				<label className='form-label'>number of people</label>
				<input
					type='number'
					value={persons}
					placeholder='0'
					className='form-control'
					onChange={(e) => setPersons(Number(e.target.value))}
				/>
				<img src={PersonIcon} alt='person icon' />
			</div>
		</div>
	);
}

export default SplitterForm;
