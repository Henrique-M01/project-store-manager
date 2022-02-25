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
  try {
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
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getAll,
  getById,
};
