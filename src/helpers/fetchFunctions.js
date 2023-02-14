export const fetchProduct = async () => {

};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(URL);
    const data = response.json();
    return data.then((result) => result.results);
  } catch {
    alert(Error.message);
  }
};
