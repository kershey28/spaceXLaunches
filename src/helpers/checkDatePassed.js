const checkDatePassed = date => {
  // Calc the difference
  const calcMonthsPassed = (date1, date2) => {
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24 * 7 * 4));
  };

  // Months
  const monthsPassed = calcMonthsPassed(new Date(), new Date(date));
  if (monthsPassed === 1) return `last month`;
  if (monthsPassed <= 12) return `${monthsPassed} months ago`;
  // Years
  else {
    const calcYearsPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24 * 7 * 4 * 12));
    const yearsPassed = calcYearsPassed(new Date(), new Date(date));

    // Handling the Leap Year
    const fixedLeap = () => {
      const leap = yearsPassed % 4;
      return yearsPassed - leap;
    };

    const checkedYearsPassed = fixedLeap(yearsPassed);

    if (checkedYearsPassed === 1) return `${checkedYearsPassed} year ago`;
    return `${checkedYearsPassed} years ago`;
  }
};

export default checkDatePassed;
