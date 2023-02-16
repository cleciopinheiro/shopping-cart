export const getAddress = async (cep) => {
  const promise1 = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const promise2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const promises = [promise1, promise2];
  try {
    const responses = await Promise.any(promises).then((response) => response.json());
    const fetchResponse = await responses;
    return fetchResponse;
  } catch (error) {
    return error.message;
  }
};

export const searchCep = async () => {
  const cepInput = document.querySelector('.cep-input');
  const cepElement = document.querySelector('.cart__address');
  const input = cepInput.value;
  const { address, district, city, state } = await getAddress(input);
  if (address) {
    cepElement.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  } else {
    cepElement.innerHTML = 'CEP não encontrado';
  }
};
