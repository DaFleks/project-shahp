export const formatDate = (dateString?: Date): string => {
  if (dateString) {
    const newDate = new Date(dateString);
    return `${newDate.getFullYear()}-${newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth()}-${
      newDate.getDay() < 10 ? "0" + newDate.getDay() : newDate.getDay()
    }`;
  } else {
    return "No Valid Date Provided";
  }
};

export default formatDate;
