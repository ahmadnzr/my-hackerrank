function timeConversion(s) {
  // Write your code here
  const time = s.substr(0, s.length - 2).split(":");
  const format = s.substr(s.length - 2);

  if (format === "PM" && time[0] !== "12") {
    time[0] = (Number(time[0]) + 12).toString();
  } else if (format === "AM" && time[0] === "12") {
    time[0] = "00";
  }

  const result = `${time[0]}:${time[1]}:${time[2]}`;
  return result;
}

/***
 * Given a time in -hour AM/PM format,
 * convert it to military (24-hour) time.
 *
 * sample input:
 * 12:01:00PM
 * 12:01:00AM
 * 07:05:45PM
 *
 * sample output:
 * 12:01:00
 * 00:01:00
 * 19:05:45
 ***/
