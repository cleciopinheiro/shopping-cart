import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('O retorno da função fetchProductsList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const data = await fetchProductsList('computador');
    expect(data).toEqual(computadorSearch);
  });

  it('O retorno da função fetchProductsList, retorna um erro com a mensagem: Termo de busca não informado', async () => {
    const data = fetchProductsList();
    await expect(() => data).rejects.toThrow('Termo de busca não informado');
  });
});
