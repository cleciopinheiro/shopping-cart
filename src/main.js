import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const products = document.querySelector('.products');

const getProductApi = async () => {
  const arrayObj = await fetchProductsList('computador');
  const productsArray = arrayObj.forEach((product) => {
    const element = createProductElement(product);
    products.appendChild(element);
  });
  return productsArray;
};
getProductApi();
document.querySelector('.cep-button').addEventListener('click', searchCep);
