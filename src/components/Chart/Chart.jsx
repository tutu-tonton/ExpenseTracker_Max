import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	// 棒グラフを最大値に対する割合で表現したい。
	// 最大値を算出するため、valueだけの配列を作り、その中から最大値を探す
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
