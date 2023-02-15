import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createLoadingOk } from './helpers/shopFunctions';

const products = document.querySelector('.products');

const getProductApi = async () => {
  const elementLoading = createLoadingOk('loading', 'carregando...');
  const arrayObj = await fetchProductsList('computador');
  arrayObj.forEach((product) => {
    const element = createProductElement(product);
    products.appendChild(element);
  });
  elementLoading.remove();
};
getProductApi();

document.querySelector('.cep-button').addEventListener('click', searchCep);
