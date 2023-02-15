import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createLoadingOk } from './helpers/shopFunctions';

const products = document.querySelector('.products');

const getProductApi = async () => {
  const elementLoading = createLoadingOk('loading', 'carregando...');
  try {
    const arrayObj = await fetchProductsList('computador');
    arrayObj.forEach((product) => {
      const element = createProductElement(product);
      products.appendChild(element);
    });
  } catch {
    const messageError = 'Algum erro ocorreu, recarregue a página e tente novamente';
    return createLoadingOk('error', messageError);
  } finally {
    elementLoading.remove();
  }
};
getProductApi();

document.querySelector('.cep-button').addEventListener('click', searchCep);
