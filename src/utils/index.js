import IMask from 'imask';

export const phoneParser = v => {
  !(v instanceof String) || isNaN(v);

  const masked = IMask.createMask({
    mask: '(00) 00000-0000',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};

export const birthdayParser = v => {
  !(v instanceof String) || isNaN(v);

  const masked = IMask.createMask({
    mask: '00/00/0000',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};

export const timeParser = v => {
  !(v instanceof String) || isNaN(v);

  const masked = IMask.createMask({
    mask: '00:00',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};

export const dateParser = v => {
  !(v instanceof String) || isNaN(v);

  const masked = IMask.createMask({
    mask: '00/00/0000',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};



export const formattedDate = value => {
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
    case 'cancelled':
      return 'Cancelado';
    default:
      return null;
  }
};

export const functioning = 
    '<br><br><h4>Como trabalhamos:</h4>' +
    '<p>Você solicita um serviço com 24hrs de antecedência e a gente encontra o melhor horário pra você. </p>' +
    '<p>A partir daí enviamos um barbeiro até sua residência onde ele fará um atendimento com máscara e luvas.</p>' +
    '<p>Levamos todos os materiais (máquinas, toalhas, espelhos, etc) e um aspirador de pó pra higienizar o local após o serviço.</p>' +
    '<p>Após o agendamento do serviço você só precisa passar pela etapa de confirmação.</p>' +
    '<p>Você vai receber uma mensagem ou uma ligação confirmando o agendamento, previnindo assim um possível imprevisto por parte do cliente.</p>' +
    '<p>Caso não seja confirmado até 30 minutos antes do horário, o serviço será cancelado automaticamente. Mas normalmente não acontece, tudo bem?</p>'
;

export const deals = 
    '<br><br><h4>Serviços e Promoções: </h4>'+
    '<p>Promoção: (box para escrita e precificação)</p>'+
    '<p>Cabelo: R$35,00</p>'+
    '<p>Barba: R$30,00</p>'+
    '<p>Combo: (cabelo e barba) R$50,00</p>'+
    '<p>Mensal: 20% de desconto (personalizar)</p>'
;

