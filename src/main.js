import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement,
  createLoadingElement, getCartProducts } from './helpers/shopFunctions';

const products = document.querySelector('.products');

const getProductApi = async () => {
  const elementLoading = createLoadingElement('loading', 'carregando...');
  try {
    const arrayObj = await fetchProductsList('computador');
    arrayObj.forEach((product) => {
      const element = createProductElement(product);
      products.appendChild(element);
    });
  } catch {
    const messageError = 'Algum erro ocorreu, recarregue a página e tente novamente';
    createLoadingElement('error', messageError);
  } finally {
    elementLoading.remove();
  }
};

window.onload = async () => {
  await getProductApi();
  await getCartProducts();
};

document.querySelector('.cep-button').addEventListener('click', searchCep);
