import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());


// 🔗 MongoDB connection string (same)
const MONGO_URI =
  "mongodb+srv://aliyanasghar77_db_user:13%40sjdw%2445@juice.talguyr.mongodb.net/abasynApp?retryWrites=true&w=majority&appName=juice";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected to CoffeeShop DB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// 🧾 Menu Schema
const menuSchema = new mongoose.Schema({
  name: String,
  category: String, // "Hot Drink" or "Cold Drink"
  price: Number,
  image: String,
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

// 🧺 Order Schema
const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

//
// 📍 API Routes
//

// ✅ Add new menu item
app.post("/menu", async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.json({ success: true, message: "Menu item added!", menuItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Get all menu items
app.get("/menu", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Place an order
app.post("/order", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ success: true, message: "Order placed successfully!", order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Get all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Default route
app.get("/", (req, res) => {
  res.send("☕ Coffee Shop API is running...");
});

// 🌍 Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Coffee Shop Server running at http://localhost:${PORT}`)
);
