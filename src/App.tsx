import { FC, useMemo, useState, useEffect } from 'react';

import './style.css';

export const App: FC<{ arr: number[] }> = ({ arr }) => {
  const values = useMemo(() => arr.map((num) => num.toString()), [arr]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSum, setCurrentSum] = useState(0);
  const [maxSum, setMaxSum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex < arr.length - 1) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(0);
    }, 1000);
  }, [currentIndex]);

  useEffect(() => {
    const currentValue = arr[currentIndex];

    if (currentIndex === 0) {
      // Reset the widget
      setCurrentSum(Math.max(0, currentValue));
      setMaxSum(Math.max(0, currentValue));
    } else {
      // Actual logic
      setCurrentSum(Math.max(0, currentSum + currentValue));
      setMaxSum(Math.max(maxSum, currentSum + currentValue));
    }
  }, [currentIndex]);

  return (
    <div className="container">
      <div className="array">
        {values.map((value, i) => (
          <div
            className={`array__value ${
              currentIndex === i ? 'array__value--active' : ''
            }`}
          >
            <span className="array__value-text">{value}</span>
          </div>
        ))}
      </div>
      <div className="status">
        <div className="status__item status__item--current">
          <div className="status__value">{currentSum}</div>
          <div className="status__label">Current sum</div>
        </div>
        <div className="status__item status__item--max">
          <div className="status__value">{maxSum}</div>
          <div className="status__label">Max sum</div>
        </div>
      </div>
    </div>
  );
};
