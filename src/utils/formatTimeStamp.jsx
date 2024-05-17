export function formatTimestampIntoTime(timestampString) {
  const date = new Date(timestampString);
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${ampm}`;
}

export function formatTimestampIntoDate(timestampString) {
  const date = new Date(timestampString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month (0-indexed)
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}/${day}/${year}`;
}

export function getDayName(timestampString) {
  const date = new Date(timestampString);
  const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get full day name 
  return day;
}

export function getDayNumberInMonth(timestampString) {
  const date = new Date(timestampString);
  const dayNumber = date.getDate(); // 1 (for the first day of the month) to 31 (for the last day)
  return dayNumber;
}

export function getMonthName(timestampString) {
  const date = new Date(timestampString);
  const monthNames = date.toLocaleDateString('en-US', { month: 'long' }); // Full month name 
  return monthNames;
}

export function getYearNumber(timestampString) {
  const date = new Date(timestampString);
  const year = date.getFullYear(); // Year with 4 digits
  return year;
}

