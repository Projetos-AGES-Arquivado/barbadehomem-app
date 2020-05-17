const formattedDate = value => {
  const date = new Date(value.toDate());
  const newDate = date.toLocaleDateString('pt-BR');
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return { newDate, time };
};

export default formattedDate;
