const sampleProducts = [
  {
    title: "Matte Liquid Lipstick",
    brand: "Maybelline",
    description:
      "Long-lasting, smudge-proof liquid lipstick with intense color payoff.",
    category: "Make Up",
    discountedprice: 449,
    originalprice: 499,
    offer: "Buy 1 Get 1",
    image:
      "https://plus.unsplash.com/premium_photo-1676380030496-1b1fd3a33a1b?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vitamin C Face Serum",
    brand: "The Body Shop",
    description:
      "Brightens skin and reduces dark spots with the power of Vitamin C.",
    category: "Skin Care",
    discountedprice: 559,
    originalprice: 699,
    offer: "Flat ₹50 Off",
    image:
      "https://plus.unsplash.com/premium_photo-1679134540232-c6e66ceee11c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Keratin Hair Mask",
    brand: "L'Oreal",
    description: "Deep conditioning mask to repair damaged hair and add shine.",
    category: "Hair Care",
    discountedprice: 764,
    originalprice: 899,
    offer: "Flat ₹50 Off",
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Charcoal Face Wash",
    brand: "Nivea",
    description:
      "Deep cleanses skin and removes impurities with activated charcoal.",
    category: "Men",
    discountedprice: 314,
    originalprice: 349,
    offer: "Summer Sale",
    image:
      "https://media.istockphoto.com/id/1044043280/vector/blank-plastic-tube-mockup.jpg?s=2048x2048&w=is&k=20&c=YzuwhNR5Omm7EeKv6UI5girFhdt7m6GDx4MlQxmQEhU=",
  },
  {
    title: "Natural Aloe Vera Gel",
    brand: "Patanjali",
    description: "Pure aloe vera gel for soothing and hydrating skin.",
    category: "Natural",
    discountedprice: 269,
    originalprice: 299,
    offer: "Buy 1 Get 1",
    image:
      "https://media.istockphoto.com/id/2203049456/photo/flat-lay-composition-of-aloe-vera-slices-essential-oil-bottles-gua-sha-stone-and-a-wooden.jpg?s=2048x2048&w=is&k=20&c=dXLRdUtOgyseJ-z3lOwAp4cZlGdtHgX-JPLap12NLq8=",
  },
  {
    title: "Rose Water Toner",
    brand: "Kama Ayurveda",
    description: "Refreshing toner that hydrates and tightens pores.",
    category: "Skin Care",
    discountedprice: 212,
    originalprice: 250,
    offer: "Summer Sale",
    image:
      "https://media.istockphoto.com/id/598073578/photo/rose-water-with-a-rose-petal-inside.jpg?s=2048x2048&w=is&k=20&c=LTIHzP01-g55sRw5ajK5oXmKoIu9HcSagqCDT7WvlTU=",
  },
  {
    title: "Herbal Shampoo",
    brand: "Himalaya",
    description: "Gentle herbal shampoo that strengthens and nourishes hair.",
    category: "Hair Care",
    discountedprice: 539,
    originalprice: 599,
    offer: "Summer Sale",
    image:
      "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deodorant Spray for Men",
    brand: "Axe",
    description: "Long-lasting fragrance with antibacterial protection.",
    category: "Fragrance",
    discountedprice: 339,
    originalprice: 399,
    offer: "Flat ₹50 Off",
    image:
      "https://images.unsplash.com/photo-1699528136776-51ddd829363e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sunscreen SPF 50",
    brand: "Neutrogena",
    description: "Broad-spectrum sunscreen for UVA/UVB protection.",
    category: "Skin Care",
    discountedprice: 639,
    originalprice: 799,
    offer: "Flat ₹50 Off",
    image:
      "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "BB Cream with SPF",
    brand: "Garnier",
    description: "Lightweight BB cream for instant glow and sun protection.",
    category: "Make Up",
    discountedprice: 499,
    originalprice: 549,
    offer: "Quick Sale",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Anti-Hair Fall Oil",
    brand: "Mamaearth",
    description: "Herbal oil that reduces hair fall and promotes growth.",
    category: "Hair Care",
    discountedprice: 404,
    originalprice: 449,
    offer: "Quick Sale",
    image:
      "https://images.unsplash.com/photo-1699373383871-4ca5636948c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    title: "Makeup Remover Pads",
    brand: "The Good Glamm",
    description:
      "Eco-friendly, reusable cotton pads for removing makeup gently.",
    category: "Accessories",
    discountedprice: 314,
    originalprice: 349,
    offer: "Quick Sale",
    image:
      "https://media.istockphoto.com/id/1410505316/photo/cotton-reusable-makeup-remover-pads-in-a-cloth-bag-on-a-beige-background-the-concept-of.jpg?s=2048x2048&w=is&k=20&c=vaFnr1AIDXpC_pqf0TRB0pVx1UJgC58Nzx2LzK8Yrak=",
  },
  {
    title: "Organic Baby Lotion",
    brand: "Chicco",
    description: "Gentle moisturizing lotion for delicate baby skin.",
    category: "Mom & Baby",
    discountedprice: 314,
    originalprice: 349,
    offer: "Buy 2 Get 1",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Charcoal Peel-Off Mask",
    brand: "Biotique",
    description: "Removes blackheads and excess oil with activated charcoal.",
    category: "Skin Care",
    discountedprice: 399,
    originalprice: 499,
    offer: "Super Saver",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Perfume for Women",
    brand: "Calvin Klein",
    description: "Elegant floral fragrance for long-lasting freshness.",
    category: "Fragrance",
    discountedprice: 1039,
    originalprice: 1299,
    offer: "Elite",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Electric Facial Cleanser",
    brand: "Philips",
    description:
      "Silicone-based cleanser for deep pore cleansing and exfoliation.",
    category: "Appliances",
    discountedprice: 1699,
    originalprice: 1999,
    offer: "Elite",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lip Balm with SPF",
    brand: "Nivea",
    description: "Hydrating lip balm that protects against sun damage.",
    category: "Make Up",
    discountedprice: 179,
    originalprice: 199,
    offer: "Summer Sale",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Caffeine Face Scrub",
    brand: "MCaffeine",
    description: "Exfoliating scrub with caffeine to energize the skin.",
    category: "Skin Care",
    discountedprice: 509,
    originalprice: 599,
    offer: "Buy 1 Get 1",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shaving Foam",
    brand: "Gillette",
    description: "Smooth and gentle shaving foam with aloe vera.",
    category: "Men",
    discountedprice: 248,
    originalprice: 275,
    offer: "Flat ₹50 Off",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Detox Body Wash",
    brand: "Bath & Body",
    description:
      "Refreshing body wash infused with green tea and citrus extracts.",
    category: "Bath & Body",
    discountedprice: 424,
    originalprice: 499,
    offer: "Flat ₹50 Off",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hair Straightener",
    brand: "Remington",
    description: "Professional hair straightener with ceramic plates.",
    category: "Appliances",
    discountedprice: 1999,
    originalprice: 2499,
    offer: "Elite",
    image:
      "https://media.istockphoto.com/id/909126118/photo/young-woman-standing-in-bathroom-in-the-morning.jpg?s=2048x2048&w=is&k=20&c=X4VrpEt3EQ-wF2CcScwMIUzAa3hk_DKNKl245OeTR58=",
  },

  {
    title: "Hair Styling Wax",
    brand: "Set Wet",
    description: "Strong hold hair wax for a matte finish look.",
    category: "Men",
    discountedprice: 359,
    originalprice: 399,
    offer: "Summer Sale",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Natural Lip Tint",
    brand: "Kylie Cosmetics",
    description: "Sheer and moisturizing lip tint with natural pigments.",
    category: "Natural",
    discountedprice: 269,
    originalprice: 299,
    offer: "Summer Sale",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lavender Essential Oil",
    brand: "Soulflower",
    description: "Soothing essential oil for relaxation and stress relief.",
    category: "Natural",
    discountedprice: 639,
    originalprice: 799,
    offer: "Super Saver",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Beard Growth Serum",
    brand: "Beardo",
    description: "Nourishes beard and promotes thicker hair growth.",
    category: "Men",
    discountedprice: 679,
    originalprice: 799,
    offer: "Super Saver",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Coconut Body Lotion",
    brand: "Forest Essentials",
    description: "Deeply hydrating body lotion with coconut extracts.",
    category: "Bath & Body",
    discountedprice: 509,
    originalprice: 599,
    offer: "Buy 1 Get 1",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Luxury Perfume",
    brand: "Chanel",
    description:
      "Exclusive long-lasting perfume with a blend of floral and citrus notes.",
    category: "Fragrance",
    discountedprice: 4999,
    originalprice: 5999,
    offer: "Elite",
    image:
      "https://media.istockphoto.com/id/909126118/photo/young-woman-standing-in-bathroom-in-the-morning.jpg?s=2048x2048&w=is&k=20&c=X4VrpEt3EQ-wF2CcScwMIUzAa3hk_DKNKl245OeTR58=",
  },
  {
    title: "Ayurvedic Toothpaste",
    brand: "Dabur",
    description: "Herbal toothpaste with natural ingredients for strong teeth.",
    category: "Health & Hygiene",
    discountedprice: 122,
    originalprice: 129,
    offer: "Combo Offer",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Under Eye Cream",
    brand: "Olay",
    description:
      "Reduces dark circles and puffiness with caffeine and peptides.",
    category: "Skin Care",
    discountedprice: 594,
    originalprice: 699,
    offer: "Combo Offer",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hand Cream with Shea Butter",
    brand: "L'Occitane",
    description: "Moisturizing hand cream for soft and nourished hands.",
    category: "Bath & Body",
    discountedprice: 349,
    originalprice: 399,
    offer: "Flat ₹50 Off",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

module.exports = { data: sampleProducts };
