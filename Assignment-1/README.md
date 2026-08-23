# Promise-based Recruitment Evaluation System

A JavaScript assignment simulating a three-stage recruitment process using Promises. Each stage takes 2 seconds and either resolves with an average score or rejects with a failure message.

## Files

| File | Description |
| --- | --- |
| `question1.js` | Coding Assessment |
| `question2.js` | Technical Interview |
| `question3.js` | Final Selection Review |

## Question 1: Coding Assessment

`codingScoreCheck(marks, cutoff)` takes an array of marks and a cutoff. After 2 seconds it resolves with the average if it is greater than or equal to the cutoff, otherwise rejects with:

```
Sorry, you have not cleared the Coding Assessment.
```

## Question 2: Technical Interview

`technicalInterviewCheck(marks, cutoff)` takes an array of marks and a cutoff. After 2 seconds it resolves with the average if it is greater than or equal to the cutoff, otherwise rejects with:

```
Sorry, you have not cleared the Technical Interview.
```

## Question 3: Final Selection Review

`finalSelectionCheck(codingAverage, technicalAverage, cutoff)` takes both averages and a final cutoff. After 2 seconds it calculates the final average of the two scores and resolves with it if it is greater than or equal to the cutoff, otherwise rejects with:

```
Sorry, you have not cleared the final selection cutoff.
```

## How It Works

Each function returns a `new Promise` wrapping a `setTimeout` of 2000 ms. The average is the sum of the marks divided by the number of marks. Results are handled with `.then()` for success and `.catch()` for failure.

## Running

```bash
node question1.js
node question2.js
node question3.js
```

## Output

```
Coding Assessment cleared. Average score: 82.5
Technical Interview cleared. Average score: 76.5
Congratulations! You are selected. Final average: 79.5
```
