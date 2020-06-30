import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from './Rules';

class ScoreTable extends Component {
	render() {
		const { scores, doScore } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								description={ones.desc}
								score={scores.ones}
								doScore={(evt) => doScore('ones', ones.evalRoll)}
							/>
							<RuleRow
								name="Twos"
								description={twos.desc}
								score={scores.twos}
								doScore={(evt) => doScore('twos', twos.evalRoll)}
							/>
							<RuleRow
								name="Threes"
								description={threes.desc}
								score={scores.threes}
								doScore={(evt) => doScore('threes', threes.evalRoll)}
							/>
							<RuleRow
								name="Fours"
								description={fours.desc}
								score={scores.fours}
								doScore={(evt) => doScore('fours', fours.evalRoll)}
							/>
							<RuleRow
								name="Fives"
								description={fives.desc}
								score={scores.fives}
								doScore={(evt) => doScore('fives', fives.evalRoll)}
							/>
							<RuleRow
								name="Sixes"
								description={sixes.desc}
								score={scores.sixes}
								doScore={(evt) => doScore('sixes', sixes.evalRoll)}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								description={threeOfKind.desc}
								score={scores.threeOfKind}
								doScore={(evt) => doScore('threeOfKind', threeOfKind.evalRoll)}
							/>
							<RuleRow
								name="Four of Kind"
								description={fourOfKind.desc}
								score={scores.fourOfKind}
								doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll)}
							/>
							<RuleRow
								name="Full House"
								description={fullHouse.desc}
								score={scores.fullHouse}
								doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll)}
							/>
							<RuleRow
								name="Small Straight"
								description={smallStraight.desc}
								score={scores.smallStraight}
								doScore={(evt) => doScore('smallStraight', smallStraight.evalRoll)}
							/>
							<RuleRow
								name="Large Straight"
								description={largeStraight.desc}
								score={scores.largeStraight}
								doScore={(evt) => doScore('largeStraight', largeStraight.evalRoll)}
							/>
							<RuleRow
								name="Yahtzee"
								description={yahtzee.desc}
								score={scores.yahtzee}
								doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll)}
							/>
							<RuleRow
								name="Chance"
								description={chance.desc}
								score={scores.chance}
								doScore={(evt) => doScore('chance', chance.evalRoll)}
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
