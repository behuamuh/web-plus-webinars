const BASE_URL = 'http://localhost:8001';

export async function getAllItems() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
}
