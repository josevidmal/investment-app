import { calculateInvestmentResults, formatter } from '../../util/investment.js';

export default function Results({ userInput }) {
    const dataArr = calculateInvestmentResults(userInput);
    let totalInterest = 0;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {dataArr.map(item => (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest += item.interest)}</td>
                        <td>{formatter.format(item.valueEndOfYear - totalInterest)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};