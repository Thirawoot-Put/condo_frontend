export const formatISODateTime = (ISO) => {
  const date = new Date(ISO);
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
  });
  const formattedTime = formatter.format(date);
  return formattedTime;
};
