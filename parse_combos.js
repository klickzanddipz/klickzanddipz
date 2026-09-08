const fs = require('fs');

const data = `
1 | Food Combos | VEG | Peri Peri Fries + Coke or Fanta | ₹278 | ₹49 | ₹229
1 | Food Combos | NON VEG | Chicken Loaded Fries + Coke or Fanta | ₹408 | ₹79 | ₹329
2 | Food Combos | VEG | Classic Veg Burger + Coke or Fanta | ₹338 | ₹59 | ₹279
2 | Food Combos | NON VEG | Classic Chicken Burger + Coke or Fanta | ₹358 | ₹69 | ₹289
3 | Food Combos | VEG | Veg Wrap + Coke or Fanta | ₹398 | ₹79 | ₹319
3 | Food Combos | NON VEG | Chicken Wrap + Coke or Fanta | ₹538 | ₹99 | ₹439
4 | Food Combos | VEG | Veg Sandwich + Coke or Fanta | ₹308 | ₹59 | ₹249
4 | Food Combos | NON VEG | Chicken Sandwich + Coke or Fanta | ₹358 | ₹69 | ₹289
5 | Food Combos | VEG | Veg Sandwich + Veg Momo Fried (6 pcs) + Coke or Fanta (Any 2) | ₹666 | ₹157 | ₹509
5 | Food Combos | NON VEG | Chicken Sandwich + Chicken Momo Fried (6 pcs) + Coke or Fanta (Any 2) | ₹816 | ₹197 | ₹619
6 | Food Combos | VEG | Veg Pasta + Korean Ramen - Spicy Veg + Coke or Fanta (Any 2) | ₹996 | ₹247 | ₹749
6 | Food Combos | NON VEG | Chicken Pasta + Korean Ramen - Spicy Chicken + Coke or Fanta (Any 2) | ₹1136 | ₹277 | ₹859
7 | Food Combos | VEG | Veg Wrap + Peri Peri Fries + Coke or Fanta (Any 2) | ₹676 | ₹167 | ₹509
7 | Food Combos | NON VEG | Chicken Wrap + Chicken Loaded Fries + Coke or Fanta (Any 2) | ₹946 | ₹227 | ₹719
8 | Food Combos | VEG | Classic Veg Burger + Korean Ramen - Spicy Veg + Coke or Fanta (Any 2) | ₹836 | ₹207 | ₹629
8 | Food Combos | NON VEG | Classic Chicken Burger + Korean Ramen - Spicy Chicken + Coke or Fanta (Any 2) | ₹956 | ₹237 | ₹719
9 | Food Combos | VEG | Corn Cheese Nugget (5 pcs) + Veg Garlic Bread + Coke or Fanta (Any 2) | ₹686 | ₹167 | ₹519
9 | Food Combos | NON VEG | Masala Omelette + Chicken Garlic Bread + Coke or Fanta (Any 2) | ₹736 | ₹177 | ₹559
10 | Food Combos | VEG | Veg Pasta + Veg Wrap + Coke or Fanta (Any 2) | ₹896 | ₹217 | ₹679
10 | Food Combos | NON VEG | Chicken Pasta + Chicken Wrap + Coke or Fanta (Any 2) | ₹1076 | ₹267 | ₹809
11 | Food Combos | VEG | Korean Ramen - Spicy Veg + Veg Cheese Balls + Coke or Fanta (Any 2) | ₹826 | ₹197 | ₹629
11 | Food Combos | NON VEG | Korean Ramen - Spicy Chicken + Chicken Cheese Balls + Coke or Fanta (Any 2) | ₹976 | ₹237 | ₹739
12 | Food Combos | VEG | Classic Veg Burger + Veg Sandwich + Coke or Fanta (Any 2) | ₹646 | ₹157 | ₹489
12 | Food Combos | NON VEG | Classic Chicken Burger + Chicken Sandwich + Coke or Fanta (Any 2) | ₹716 | ₹177 | ₹539
13 | Food Combos | VEG | Veg Momo Fried (6 pcs) + Veg Bread Pizza + Coke or Fanta (Any 2) | ₹736 | ₹177 | ₹559
13 | Food Combos | NON VEG | Chicken Momo Fried (6 pcs) + Chicken Bread Pizza + Coke or Fanta (Any 2) | ₹866 | ₹207 | ₹659
14 | Food Combos | VEG | Veg Pasta + Veg Momo Fried (6 pcs) + Coke or Fanta (Any 2) | ₹856 | ₹207 | ₹649
14 | Food Combos | NON VEG | Chicken Pasta + Masala Omelette + Coke or Fanta (Any 2) | ₹816 | ₹197 | ₹619
15 | Food Combos | VEG | Veg Sandwich + Korean Ramen - Spicy Veg + Coke or Fanta (Any 2) | ₹806 | ₹197 | ₹609
15 | Food Combos | NON VEG | Chicken Sandwich + Korean Ramen - Spicy Chicken + Coke or Fanta (Any 2) | ₹956 | ₹237 | ₹719
16 | Food Combos | VEG | Veg Cheese Balls + Veg Loaded Bag + Coke or Fanta (Any 2) | ₹636 | ₹157 | ₹479
16 | Food Combos | NON VEG | Chicken Cheese Balls + Chicken Loaded Bag + Coke or Fanta (Any 2) | ₹786 | ₹187 | ₹599
17 | Food Combos | VEG | Classic Veg Burger + Veg Wrap + Coke or Fanta (Any 2) | ₹736 | ₹177 | ₹559
17 | Food Combos | NON VEG | Classic Chicken Burger + Chicken Wrap + Coke or Fanta (Any 2) | ₹896 | ₹217 | ₹679
18 | Food Combos | VEG | Peri Peri Fries + Veg Garlic Bread + Coke or Fanta (Any 2) | ₹636 | ₹157 | ₹479
18 | Food Combos | NON VEG | Chicken Loaded Fries + Chicken Garlic Bread + Coke or Fanta (Any 2) | ₹866 | ₹207 | ₹659
19 | Food Combos | VEG | Veg Pasta + Veg Sandwich + Coke or Fanta (Any 2) | ₹806 | ₹197 | ₹609
19 | Food Combos | NON VEG | Chicken Pasta + Chicken Sandwich + Coke or Fanta (Any 2) | ₹896 | ₹217 | ₹679
20 | Food Combos | VEG | Korean Ramen - Spicy Veg + Veg Wrap + Coke or Fanta (Any 2) | ₹896 | ₹217 | ₹679
20 | Food Combos | NON VEG | Korean Ramen - Spicy Chicken + Chicken Wrap + Coke or Fanta (Any 2) | ₹1136 | ₹277 | ₹859
21 | Food Combos | VEG | Veg Bread Pizza + Veg Loaded Bag + Coke or Fanta (Any 2) | ₹686 | ₹167 | ₹519
21 | Food Combos | NON VEG | Chicken Bread Pizza + Chicken Loaded Bag + Coke or Fanta (Any 2) | ₹816 | ₹197 | ₹619
22 | Food Combos | VEG | Classic Veg Burger + Veg Pasta + Coke or Fanta (Any 2) | ₹836 | ₹207 | ₹629
22 | Food Combos | NON VEG | Classic Chicken Burger + Chicken Pasta + Coke or Fanta (Any 2) | ₹896 | ₹217 | ₹679
23 | Food Combos | VEG | Veg Sandwich + Veg Wrap + Coke or Fanta (Any 2) | ₹706 | ₹167 | ₹539
23 | Food Combos | NON VEG | Chicken Sandwich + Chicken Wrap + Coke or Fanta (Any 2) | ₹896 | ₹217 | ₹679
24 | Food Combos | VEG | Veg Garlic Bread + Veg Loaded Bag + Coke or Fanta (Any 2) | ₹666 | ₹157 | ₹509
24 | Food Combos | NON VEG | Masala Omelette + Chicken Loaded Bag + Coke or Fanta (Any 2) | ₹686 | ₹167 | ₹519
`;

const lines = data.trim().split('\n');
const combos = [];
let internalId = 1;

lines.forEach(line => {
  const parts = line.split('|').map(p => p.trim());
  if (parts.length === 7) {
    const displayId = parts[0];
    const type = parts[2] === 'VEG' ? 'veg' : 'non-veg';
    const desc = parts[3];
    const originalPrice = parts[4].replace('₹', '');
    const savings = parts[5].replace('₹', '');
    const price = parts[6].replace('₹', '');
    
    let title = `Combo ${displayId}`;
    let img = type === 'veg' 
      ? 'https://images.unsplash.com/photo-1594212684813-7d722d3d9229?auto=format&fit=crop&w=800&q=80' 
      : 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=800&q=80';

    combos.push({
      id: internalId++,
      displayId,
      type,
      title,
      desc,
      price,
      originalPrice,
      savings,
      img
    });
  }
});

fs.writeFileSync('src/comboData.ts', `export const COMBOS = ${JSON.stringify(combos, null, 2)};\n`);
console.log('Successfully generated src/comboData.ts');
