console.log("Coersion");
const dayStart = "07:30";
const dayEnd = "17:45";
// scheduleMeeting is a function that takes a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes).
// It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.

const scheduleMeeting = (startTime, durationMinutes) => { // "10:15", 50

  const [dayStartHour, dayStartMinute] = dayStart.split(":"); // ["07", "30"]
  const [endHour, endMinute] = dayEnd.split(":"); // ["17", "45"]

  const [startHour, startMinute] = startTime.split(":"); // ["10", "15"] for "10:15"

  const meetingDuration = parseInt(startMinute) + durationMinutes; // 15 + 50 = 65

  const meetingEndHour = parseInt(startHour) + Math.floor(meetingDuration / 60); // 10 + 1 = 11
  const meetingEndMinute = meetingDuration % 60; // 65 % 60 = 5

  const meetingEnd = `${meetingEndHour}:${meetingEndMinute}`; // "11:5"
  const meetingStart = `${startHour}:${startMinute}`; // "10:15"

  const isMeetingStartHourValid = parseInt(startHour) >= parseInt(dayStartHour); // 10 >= 7 = true
  const isMeetinEndHourValid = parseInt(meetingEndHour) <= parseInt(endHour); // 11 <= 17 = true

  const isMeetingStartValid =
    parseInt(startHour) >= parseInt(dayStartHour) &&
    parseInt(startMinute) >= parseInt(dayStartMinute); // 10 >= 7 && 15 >= 30 = false

  const isMeetingEndValid =
    parseInt(meetingEndHour) <= parseInt(endHour) &&
    parseInt(meetingEndMinute) <= parseInt(endMinute); // 11 <= 17 && 5 <= 45 = true

  const isMeetingValid = isMeetingStartValid && isMeetingEndValid; // false && true = false
  console.log(meetingStart, meetingEnd, isMeetingValid); // "10:15", "11:5", false

  return isMeetingValid; // false
};

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30));  // false
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false


