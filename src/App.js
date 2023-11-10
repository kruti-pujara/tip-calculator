import "./App.css";
import { useState } from "react";

import SplitterForm from "./components/SplitterForm";
import SplitterOutput from "./components/SplitterOutput";
function App() {
	const [amount, setAmount] = useState();
	const [persons, setPersons] = useState();
	const [selected, setSelected] = useState("");
	const [tip, setTip] = useState();
	const tipMain = tip > 0 ? tip : selected;

	const totalTip = amount && (amount * tipMain) / 100;
	const tipPerPerson = persons && totalTip / persons;
	const totalPerPerson = amount && persons && (amount + totalTip) / persons;

	function handleReset(e) {
		e.preventDefault();
		setAmount(0);
		setPersons(0);
		setSelected("");
		setTip("custom");
	}

	return (
		<section className='tip-calc-section'>
			<div className='container'>
				<div className='tip-calc-main'>
					<div className='tip-calc-inner'>
						<h1>Splitter</h1>
						<div className='splitter-wrapper'>
							<div className='splitter-grid-outer'>
								<SplitterForm
									amount={amount}
									setAmount={setAmount}
									persons={persons}
									setPersons={setPersons}
									selected={selected}
									setSelected={setSelected}
									tip={tip}
									setTip={setTip}
								/>
								<SplitterOutput
									tipPerPerson={tipPerPerson}
									totalPerPerson={totalPerPerson}
									handleReset={handleReset}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default App;
