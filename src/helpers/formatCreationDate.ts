function formatCreationDate(dateString: string): string {
  const parts = dateString.split('/');

  if (parts.length !== 3) {
    return dateString;
  }

  const [day, month, year] = parts;

  return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
}

export { formatCreationDate };
export default formatCreationDate;
