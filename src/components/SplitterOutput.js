function SplitterOutput({ tipPerPerson, totalPerPerson, handleReset }) {
	return (
		<div className='splitter-right'>
			<div className='splitter-green-box'>
				<div className='output-text-outer'>
					<div className='output-text'>
						<p className='output-label'>
							Tip amount <span>/perosn</span>
						</p>
						<p className='rupees'>₹{tipPerPerson ? tipPerPerson : 0}</p>
					</div>
					<div className='output-text'>
						<p className='output-label'>
							total <span>/perosn</span>
						</p>
						<p className='rupees'>₹{totalPerPerson ? totalPerPerson : 0}</p>
					</div>
				</div>
				<button
					type='reset'
					title='reset'
					disabled={!totalPerPerson}
					className={totalPerPerson ? "" : "disabled"}
					onClick={handleReset}>
					reset
				</button>
			</div>
		</div>
	);
}
export default SplitterOutput;
