export const formatteDate = value => {
  const date = new Date(value.toDate());
  const newDate = date.toLocaleDateString('pt-BR');

  return newDate;
};

export const formattedTime = value => {
  const date = new Date(value.toDate());
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h${minutes}`;
};

export const formattedServices = services => {
  const formattedServices = services.reduce((text, next, index) => {
    if (index > 0) {
      return text + ` + ${next}`;
    }

    return text + next;
  }, '');

  return formattedServices;
};

export const formattedValue = value => {
  const formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
};

export const formattedStatus = value => {
  switch (value) {
    case 'pending':
      return 'Em Análise';
    case 'booked':
      return 'Agendado';
    case 'done':
      return 'Concluído';
    case 'canceled':
      return 'Cancelado';
    default:
      return null;
  }
};
