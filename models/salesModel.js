const connection = require('./Connection');

async function getAll() {
  const query = `SELECT
                  sp.sale_id AS saleId,
                    s.date,
                    sp.product_id AS productId,
                    sp.quantity
                  FROM
                    StoreManager.sales_products sp
                  INNER JOIN
                    StoreManager.sales AS s ON s.id = sp.sale_id
                  ORDER BY productId`;
  const [response] = await connection.execute(query);
  return response;
}

async function getById(id) {
  const query = `SELECT 
                  sp.product_id AS productId,
                  sp.quantity,
                  s.date
                FROM
                  StoreManager.sales_products AS sp
                      LEFT JOIN
                  StoreManager.sales AS s ON sp.sale_id = s.id
                WHERE
                  sp.sale_id = ?
                ORDER BY sp.sale_id , sp.product_id;`;
  const [response] = await connection.execute(query, [id]);
  return response;
}

async function registerSale() {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [result] = await connection.execute(query);
  return result; 
}

async function registerSaleProducts(productId, quantity, id) {
  const query = `INSERT INTO StoreManager.sales_products 
                  (sale_id, product_id, quantity)
                VALUES (?, ?, ?);`;

  const [result] = await connection.execute(query, [id, productId, quantity]);
  return result;
}

async function updateSale(saleId, productId, quantity) {
  const query = `UPDATE StoreManager.sales_products
                SET sale_id = ?, product_id = ?, quantity= ?
                WHERE sale_id = ?;`;
  const [result] = await connection.execute(query, [saleId, productId, quantity, saleId]);
  return result;
}

module.exports = {
  getAll,
  getById,
  registerSale,
  registerSaleProducts,
  updateSale,
};
