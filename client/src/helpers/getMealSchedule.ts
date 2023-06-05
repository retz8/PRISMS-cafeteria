type SpecialMinute = string | number;

export function getMealSchedule(mealType: string): string[] {
  switch (mealType) {
    case "breakfast":
      return generateTimeArray("7:00AM", "7:55AM");
    case "lunch":
      return generateTimeArray("11:20AM", "12:25PM");
    case "dinner":
      return generateTimeArray("5:30PM", "6:30PM");
    case "brunch":
      return generateTimeArray("10:30AM", "1:00PM");
    default:
      throw new Error("Invalid Meal Type");
  }
}

function generateTimeArray(startTime: string, endTime: string): string[] {
  const timeArray = [];

  // Convert start time to minutes
  const [startHour, startMinutes, startAmPm] =
    startTime.match(/\d+|AM|PM/g) || [];
  let startMinutesTotal =
    parseInt(startHour || "") * 60 + parseInt(startMinutes);
  if (startAmPm === "PM" && startHour !== "12") startMinutesTotal += 12 * 60;

  // Convert end time to minutes
  const [endHour, endMinutes, endAmPm] = endTime.match(/\d+|AM|PM/g) || [];
  let endMinutesTotal = parseInt(endHour || "") * 60 + parseInt(endMinutes);
  if (endAmPm === "PM" && endHour !== "12") endMinutesTotal += 12 * 60;

  let minutes = startMinutesTotal;
  while (minutes <= endMinutesTotal) {
    const hour = Math.floor(minutes / 60);
    const minute: SpecialMinute = minutes % 60;
    const amPm = hour < 12 ? "AM" : "PM";
    const roundedHour = hour <= 12 ? hour : hour - 12;
    const timeString =
      roundedHour + ":" + (minute < 10 ? "0" + minute : minute) + amPm;
    timeArray.push(timeString);

    minutes += 5;
  }

  return timeArray;
}
