import Coffee from '../models/Coffee';

class CoffeeController {
  async index(req, res) {
    const coffee = await Coffee.find({});

    return res.json(coffee);
  }

  async store(req, res) {
    const coffee = await Coffee.find({});

    if (coffee.length > 0) {
      return res.send();
    }

    const newCoffee = await Coffee.create({
      quantity: 0,
    });

    return res.json(newCoffee);
  }

  async update(req, res) {
    const { id } = req.params;

    const coffee = await Coffee.findById(id);

    const newCoffee = await Coffee.findByIdAndUpdate(
      id,
      { quantity: coffee.quantity + 1 },
      {
        new: true,
      },
    );

    return res.json(newCoffee.quantity);
  }
}

export default new CoffeeController();
