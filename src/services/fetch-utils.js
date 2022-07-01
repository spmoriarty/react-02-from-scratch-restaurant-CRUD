import { client } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  
  return response.user;

}
export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';

}

export async function createMenu(menu) {
  const response = await client.from('food_menu').insert([menu]);
}

export async function getMenu() {
  const response = await client.from('food_menu').select('*');
}

export async function getOrder(id) {
  const response = await client.from('food_menu').select().match({ id }).single();
}