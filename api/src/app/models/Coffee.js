import mongoose from 'mongoose';

const CoffeeSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Coffee', CoffeeSchema);
