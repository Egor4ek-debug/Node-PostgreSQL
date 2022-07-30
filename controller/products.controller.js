const db = require('../db');

class UserControler {
  async createProducts(req, res) {
    const { title, price, amount } = req.body;
    const newProduct = await db.query(
      `INSERT INTO products (title, price, amount ) values($1,$2,$3) RETURNING *`,
      [title, price, amount]
    );
    res.json('ok');
  }
  async getOneProducts(req, res) {
    const id = req.params.id;
    const product = await db.query(`SELECT * FROM products WHERE id = $1`, [
      id,
    ]);
    res.json(product.rows);
  }
  async getAllProducts(req, res) {
    const product = await db.query(`SELECT * FROM products`);
    res.json(product.rows);
  }
  async deleteProducts(req, res) {
    const id = req.params.id;
    const product = await db.query(`DELETE FROM products WHERE id = $1`, [
      id,
    ]);
    res.json(product.rows[0]);
  }
  async editPtoducts(req, res) {
    const { title, price, amount, id } = req.body;
    const product = await db.query(
      `UPDATE products set title = $1, price = $2, amount = $3 where id = $4 RETURNING *`,
      [title, price, amount, id]
    );
    res.json(product.rows[0]);
  }
}

module.exports = new UserControler();
