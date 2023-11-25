const createDiscount = async (body, model) => {
  const newPercentage = (type) => {
    switch (type) {
      case "2x1":
        return 50; // 50% de descuento
      case "3x2":
        return 33.33; // 33.33% de descuento
      case "5%":
        return 5; // 5% de descuento
      case "10%":
        return 10; // 10% de descuento
      case "15%":
        return 15; // 15% de descuento
      case "20%":
        return 20; // 20% de descuento
      case "25%":
        return 25; // 25% de descuento
      case "30%":
        return 30; // 30% de descuento
      case "40%":
        return 40; // 40% de descuento
      case "50%":
        return 50; // 50% de descuento
      default:
        return 0; // Si no se encuentra el tipo, no hay descuento
    }
  };

  body.percentage = newPercentage(body.type);

  const newDiscount = await model.create(body);

  return newDiscount;
};

module.exports = { createDiscount };
