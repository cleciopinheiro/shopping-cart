import { createLoadingOk } from './shopFunctions';

export const fetchProduct = async () => {

};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  } catch {
    const messageError = 'Algum erro ocorreu, recarregue a página e tente novamente';
    return createLoadingOk('error', messageError);
  }
};
