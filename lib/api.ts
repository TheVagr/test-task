const API_BASE = "http://o-complex.com:1337";

export async function getRewiews() {
  const res = await fetch(`${API_BASE}/reviews`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ошибка загрузки отзывов");
  return res.json();
}

export async function getProducts(page = 1, pageSize = 20) {
  const res = await fetch(`${API_BASE}/products?page=${page}&page_size=${pageSize}`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ошибка загрузки товаров");
  return res.json();
}

//   export async function createOrder(phone: string, cart: { id: number; quantity: number }[]) {
//     const res = await fetch(`${API_BASE}/order`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phone, cart }),
//     });
//     if (!res.ok) throw new Error("Ошибка при отправке заказа");
//     return res.json();
//   }
