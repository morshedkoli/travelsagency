export default async function getAllCustomers() {
  const result = await fetch(`http://localhost:3000/api/customer/getWithUser`);
  return result.json();
}
