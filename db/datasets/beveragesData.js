let beveragesData = [
    {
        id: 1,
        name: "Blackberry Midnight Martini",
        ingredients: [
          "2 oz Blackberry Vodka",
          "1/2 oz Cointreau",
          "1 oz Lemon Juice",
          "Blackberries for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, muddle a handful of blackberries.",
          step2: "Add blackberry vodka, Cointreau, lemon juice, and ice. Shake well.",
          step3: "Strain into a chilled martini glass and garnish with fresh blackberries."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/305x416q70/r/923/o3X1dK.png"
      },
      {
        id: 2,
        name: "Cherry Citrus Manhattan",
        ingredients: [
          "2 oz Rye Whiskey",
          "1 oz Sweet Vermouth",
          "1/4 oz Maraschino Liqueur",
          "2 dashes Angostura Bitters",
          "Orange twist",
          "Ice",
          "Maraschino Cherry"
        ],
        directions: {
          step1: "In a mixing glass with ice, combine rye whiskey, sweet vermouth, maraschino liqueur, and bitters.",
          step2: "Stir well until chilled.",
          step3: "Strain into a chilled martini glass and garnish with a maraschino cherry and orange twist."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/zgdu15.png"
      },
      {
        id: 3,
        name: "Cucumber Basil Smash",
        ingredients: [
          "2 oz Gin",
          "3/4 oz Lemon Juice",
          "3/4 oz Simple Syrup",
          "Cucumber Slices",
          "Fresh Basil Leaves",
          "Ice"
        ],
        directions: {
          step1: "Muddle cucumber slices and basil leaves with simple syrup in a shaker.",
          step2: "Add gin, lemon juice, and ice, then shake vigorously.",
          step3: "Strain into a rocks glass filled with ice and garnish with a cucumber ribbon and basil sprig."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/Lmpi2W.png"
      },
      {
        id: 4,
        name: "Screwdriver",
        ingredients: [
          "2 oz Vodka",
          "5 oz Fresh Orange Juice",
          "Ice",
          "Orange Slice for garnish"
        ],
        directions: {
          step1: "Fill a highball glass with ice cubes.",
          step2: "Pour vodka and orange juice into the glass.",
          step3: "Stir well and garnish with an orange slice."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/292x416q70/r/922/qYkZb7.png"
      },
      {
        id: 5,
        name: "Campari Orange",
        ingredients: [
          "2 oz Campari",
          "4 oz Orange Juice",
          "Orange Slice for garnish",
          "Ice"
        ],
        directions: {
          step1: "Fill a highball glass with ice cubes.",
          step2: "Pour Campari over the ice, and then add orange juice.",
          step3: "Stir well and garnish with an orange slice."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/313x416q70/r/923/02kndX.png"
      },
      {
        id: 6,
        name: "Rosemary Citrus Spritz",
        ingredients: [
          "1 oz Vodka",
          "1 oz Aperol",
          "2 oz Grapefruit Juice",
          "Splash of Club Soda",
          "Rosemary Sprig for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a wine glass filled with ice, combine vodka, Aperol, and grapefruit juice.",
          step2: "Top with a splash of club soda.",
          step3: "Gently stir and garnish with a rosemary sprig."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/kpNj5I.png"
      },
      {
        id: 7,
        name: "Spicy Raspberry Martini",
        ingredients: [
          "2 oz Raspberry Vodka",
          "1/2 oz Chambord",
          "1/2 oz Simple Syrup",
          "Jalapeño Slices",
          "Raspberries for garnish",
          "Ice"
        ],
        directions: {
          step1: "Muddle a slice of jalapeño and a few raspberries in a shaker.",
          step2: "Add raspberry vodka, Chambord, simple syrup, and ice, then shake until well-chilled.",
          step3: "Strain into a chilled martini glass and garnish with raspberries."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/eW3tS5.png"
      },
      {
        id: 8,
        name: "Strawberry Lavender Breeze Mimosa",
        ingredients: [
          "2 oz Strawberry Puree",
          "1/2 oz Lavender Syrup",
          "4 oz Prosecco",
          "Lavender Sprig for garnish",
          "Strawberry for garnish"
        ],
        directions: {
          step1: "Pour strawberry puree and lavender syrup into a champagne flute.",
          step2: "Top with Prosecco.",
          step3: "Gently stir and garnish with a lavender sprig and a strawberry."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/267x416q70/r/922/xFSLeS.png"
      },
      {
        id: 9,
        name: "Tropical Sunset Punch",
        ingredients: [
          "1 oz Rum",
          "1/2 oz Coconut Rum",
          "2 oz Pineapple Juice",
          "1 oz Orange Juice",
          "Splash of Grenadine",
          "Pineapple Slice for garnish",
          "Cherry for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a glass filled with ice, combine rum, coconut rum, pineapple juice, and orange juice.",
          step2: "Top with a splash of grenadine (do not stir, allow it to settle at the bottom).",
          step3: "Garnish with a pineapple slice and a cherry."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/306x416q70/r/922/Wt5MFv.png"
      },
      {
        id: 10,
        name: "Blackberry Bourbon Lemonade",
        ingredients: [
          "2 oz Bourbon",
          "1 oz Blackberry Puree",
          "1 oz Lemon Juice",
          "1/2 oz Simple Syrup",
          "Splash of Club Soda",
          "Blackberries for garnish",
          "Lemon Wheel for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, combine bourbon, blackberry puree, lemon juice, and simple syrup with ice.",
          step2: "Shake well and strain into an ice-filled glass.",
          step3: "Top with a splash of club soda and garnish with blackberries and a lemon wheel."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/Y96Erd.png"
      },
      {
        id: 11,
        name: "Desert Rose",
        ingredients: [
          "2 oz Tequila",
          "1 oz Prickly Pear Syrup",
          "1/2 oz Lime Juice",
          "Dash of Orange Bitters",
          "Salt for rimming",
          "Lime Wheel for garnish",
          "Ice"
        ],
        directions: {
          step1: "Rim a glass with salt.",
          step2: "In a shaker, mix tequila, prickly pear syrup, lime juice, and bitters with ice.",
          step3: "Shake and strain into the rimmed glass filled with ice, and garnish with a lime wheel."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/w80mxU.png"
      },
      {
        id: 12,
        name: "Elderflower and Pear Martini",
        ingredients: [
          "2 oz Pear Vodka",
          "1 oz Elderflower Liqueur",
          "1/2 oz Lemon Juice",
          "Pear Slice for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker filled with ice, combine pear vodka, elderflower liqueur, and lemon juice.",
          step2: "Shake well until chilled.",
          step3: "Strain into a chilled martini glass and garnish with a slice of pear."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/MIIJV6.png"
      },
      {
        id: 13,
        name: "Ginger Mint Mojito",
        ingredients: [
          "2 oz White Rum",
          "1 oz Lime Juice",
          "1/2 oz Ginger Syrup",
          "Soda Water",
          "Fresh Mint Leaves",
          "Sliced Ginger",
          "Crushed Ice",
          "Mint Sprig for garnish"
        ],
        directions: {
          step1: "Muddle mint leaves and sliced ginger with ginger syrup in a tall glass.",
          step2: "Fill the glass with crushed ice, add rum and lime juice, and top with soda water.",
          step3: "Stir well and garnish with a sprig of mint."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/oRWdKg.png"
      },
      {
        id: 14,
        name: "Honey Lavender Gin Fizz",
        ingredients: [
          "2 oz Gin",
          "1 oz Lemon Juice",
          "3/4 oz Honey Lavender Syrup",
          "Egg White (optional)",
          "Club Soda",
          "Lavender Sprig for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, combine gin, lemon juice, honey lavender syrup, and egg white if using. Dry shake (no ice) to emulsify the egg white.",
          step2: "Add ice and shake again until well-chilled.",
          step3: "Strain into a glass and top with club soda. Garnish with a sprig of lavender."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/9C7596.png"
      },
      {
        id: 15,
        name: "Pineapple Jalapeño Margarita",
        ingredients: [
          "2 oz Tequila",
          "1 oz Pineapple Juice",
          "1/2 oz Triple Sec",
          "1/2 oz Lime Juice",
          "Sliced Jalapeño",
          "Tajin or Salt for rimming",
          "Pineapple Wedge for garnish",
          "Ice"
        ],
        directions: {
          step1: "Rim a glass with tajin or salt.",
          step2: "In a shaker, muddle a slice of jalapeño with pineapple juice, triple sec, and lime juice.",
          step3: "Add tequila and ice, shake well, and strain into the rimmed glass. Garnish with a pineapple wedge."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/I0peq8.png"
      },
      {
        id: 16,
        name: "Saffron Infused Gin Sour",
        ingredients: [
          "2 oz Saffron-infused Gin",
          "3/4 oz Lemon Juice",
          "1/2 oz Simple Syrup",
          "Egg White (optional)",
          "Saffron threads for garnish",
          "Ice"
        ],
        directions: {
          step1: "If using egg white, add it to the shaker first and dry shake (no ice) to emulsify.",
          step2: "Add saffron-infused gin, lemon juice, simple syrup, and ice to the shaker. Shake well.",
          step3: "Strain into a coupe glass and garnish with a few saffron threads."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/aE6Mv7.png"
      },
      {
        id: 17,
        name: "Blueberry Thyme Collins",
        ingredients: [
          "2 oz Gin",
          "1 oz Lemon Juice",
          "1 oz Thyme Simple Syrup",
          "Soda Water",
          "Fresh Blueberries",
          "Thyme Sprig for garnish",
          "Ice"
        ],
        directions: {
          step1: "Muddle fresh blueberries with thyme simple syrup in a shaker.",
          step2: "Add gin, lemon juice, and ice, then shake until well-chilled.",
          step3: "Strain into a collins glass filled with ice, top with soda water, and garnish with fresh blueberries and a sprig of thyme."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/9vubh9.png"
      },
      {
        id: 18,
        name: "Fig and Honey Old Fashioned",
        ingredients: [
          "2 oz Bourbon",
          "1/2 oz Honey Syrup",
          "2 dashes Angostura Bitters",
          "Fresh Figs",
          "Orange Peel for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a mixing glass, muddle a slice of fig with honey syrup and bitters.",
          step2: "Add bourbon and ice, then stir until well-chilled.",
          step3: "Strain into a rocks glass over a large ice cube and garnish with an orange peel and a fresh fig."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/eIb9I6.png"
      },
      {
        id: 19,
        name: "Peppermint Patty Chocolate Martini",
        ingredients: [
          "2 oz Chocolate Liqueur",
          "1 oz Vodka",
          "1/2 oz Peppermint Schnapps",
          "Splash of Cream",
          "Shaved Chocolate for garnish",
          "Peppermint Candy for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, combine chocolate liqueur, vodka, peppermint schnapps, and ice.",
          step2: "Shake until well-chilled.",
          step3: "Strain into a chilled martini glass, garnish with shaved chocolate and a small peppermint candy."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/Efa5uO.png"
      },
      {
        id: 20,
        name: "Smoked Maple Bourbon Chai",
        ingredients: [
          "2 oz Smoked Bourbon",
          "1 oz Chai Tea Concentrate",
          "1/2 oz Maple Syrup",
          "Cinnamon Stick for garnish",
          "Star Anise for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a mixing glass, combine smoked bourbon, chai tea concentrate, and maple syrup with ice.",
          step2: "Stir until the mixture is well-chilled.",
          step3: "Strain into a rocks glass over ice and garnish with a cinnamon stick and star anise."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/3naNEq.png"
      },
      {
        id: 21,
        name: "Lemon Rosemary Prosecco Fizz",
        ingredients: [
          "1 oz Limoncello",
          "1 oz Rosemary Simple Syrup",
          "Prosecco",
          "Rosemary Sprig for garnish",
          "Lemon Twist for garnish"
        ],
        directions: {
          step1: "Pour limoncello and rosemary simple syrup into a champagne flute.",
          step2: "Top with chilled Prosecco.",
          step3: "Garnish with a rosemary sprig and a twist of lemon peel."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/OXuEtg.png"
      },
      {
        id: 22,
        name: "Vanilla Bean White Russian",
        ingredients: [
          "2 oz Vodka",
          "1 oz Coffee Liqueur",
          "1 oz Vanilla Bean Cream",
          "Ice",
          "Vanilla Bean for garnish"
        ],
        directions: {
          step1: "Fill a rocks glass with ice.",
          step2: "Pour in vodka and coffee liqueur.",
          step3: "Gently float vanilla bean cream on top and stir lightly. Garnish with a vanilla bean."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/0gqa8C.png"
      },
      {
        id: 23,
        name: "Sage and Grapefruit Negroni",
        ingredients: [
          "1 oz Gin",
          "1 oz Campari",
          "1 oz Grapefruit Juice",
          "1 oz Sweet Vermouth",
          "Sage Leaf for garnish",
          "Grapefruit Slice for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a mixing glass filled with ice, combine gin, Campari, grapefruit juice, and sweet vermouth.",
          step2: "Stir until well-chilled.",
          step3: "Strain into a rocks glass over a large ice cube and garnish with a sage leaf and a slice of grapefruit."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/PGPK4u.png"
      },
      {
        id: 24,
        name: "Pear and Cinnamon Cider Sangria",
        ingredients: [
          "1 bottle of White Wine",
          "2 cups Apple Cider",
          "1/2 cup Pear Brandy",
          "2 Cinnamon Sticks",
          "2 Pears sliced",
          "1 Apple sliced",
          "Club Soda",
          "Ice"
        ],
        directions: {
          step1: "In a large pitcher, combine white wine, apple cider, pear brandy, and cinnamon sticks.",
          step2: "Add sliced pears and apples, and refrigerate for at least 2 hours.",
          step3: "Serve over ice in glasses, topped with club soda for fizz."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/slU07c.png"
      },
      {
        id: 25,
        name: "Mango Habanero Margarita",
        ingredients: [
          "2 oz Tequila",
          "1 oz Mango Puree",
          "1/2 oz Lime Juice",
          "1/4 oz Habanero Syrup",
          "Tajin or Salt for rimming",
          "Lime Wheel for garnish",
          "Mango Slice for garnish",
          "Ice"
        ],
        directions: {
          step1: "Rim a margarita glass with tajin or salt.",
          step2: "In a shaker, combine tequila, mango puree, lime juice, habanero syrup, and ice.",
          step3: "Shake well and strain into the rimmed glass. Garnish with a lime wheel and mango slice."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/9ovqGD.png"
      },
      {
        id: 26,
        name: "Watermelon Basil Vodka Cooler",
        ingredients: [
          "2 oz Vodka",
          "1 oz Watermelon Juice",
          "1/2 oz Basil Simple Syrup",
          "1/2 oz Lime Juice",
          "Soda Water",
          "Watermelon Slice for garnish",
          "Basil Leaf for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, muddle a few basil leaves with basil simple syrup.",
          step2: "Add vodka, watermelon juice, lime juice, and ice. Shake until chilled.",
          step3: "Strain into a highball glass filled with ice, top with soda water, and garnish with a watermelon slice and basil leaf."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/PkKuLd.png"
      },
      {
        id: 27,
        name: "Raspberry Lime Rickey Margarita",
        ingredients: [
          "2 oz Tequila",
          "1 oz Raspberry Puree",
          "1/2 oz Lime Juice",
          "1/2 oz Simple Syrup",
          "Club Soda",
          "Raspberries for garnish",
          "Lime Wheel for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, combine tequila, raspberry puree, lime juice, and simple syrup with ice.",
          step2: "Shake well and strain into a highball glass filled with ice.",
          step3: "Top with club soda and garnish with fresh raspberries and a lime wheel."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/DJveSX.png"
      },
      {
        id: 28,
        name: "Matcha Green Tea Highball",
        ingredients: [
          "2 oz Whisky",
          "1/2 oz Lemon Juice",
          "1/2 oz Honey Syrup",
          "1 tsp Matcha Green Tea Powder",
          "Soda Water",
          "Lemon Twist for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, combine whisky, lemon juice, honey syrup, and matcha powder with ice.",
          step2: "Shake well until the matcha is fully dissolved.",
          step3: "Strain into a highball glass filled with ice and top with soda water. Garnish with a lemon twist."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/VXczrQ.png"
      },
      {
        id: 29,
        name: "Coconut Water and Pineapple Mojito",
        ingredients: [
          "2 oz White Rum",
          "2 oz Coconut Water",
          "2 oz Pineapple Juice",
          "1/2 oz Lime Juice",
          "Mint Leaves",
          "Pineapple Chunk for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a glass, muddle the mint leaves and lime juice.",
          step2: "Fill the glass with ice and add rum, coconut water, and pineapple juice.",
          step3: "Stir well and garnish with a chunk of pineapple."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img923/7466/9ITmEP.png"
      },
      {
        id: 30,
        name: "Pomegranate Anise Martini",
        ingredients: [
          "2 oz Vodka",
          "1 oz Pomegranate Juice",
          "1/2 oz Anise Liqueur",
          "1/2 oz Simple Syrup",
          "Pomegranate Seeds for garnish",
          "Star Anise for garnish",
          "Ice"
        ],
        directions: {
          step1: "In a shaker, combine vodka, pomegranate juice, anise liqueur, and simple syrup with ice.",
          step2: "Shake well until chilled.",
          step3: "Strain into a chilled martini glass and garnish with pomegranate seeds and star anise."
        },
        alcoholic: true,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img922/9966/BXJAUA.png"
      },
    
      {
        id: 31,
        name: "Lavender Lemonade Fizz",
        ingredients: [
          "4 oz Lemonade",
          "1/2 oz Lavender Syrup",
          "Soda Water",
          "Lemon Slice for garnish",
          "Lavender Sprig for garnish"
        ],
        directions: {
          step1: "Fill a glass with ice cubes.",
          step2: "Pour lemonade and lavender syrup over the ice.",
          step3: "Top with soda water and garnish with a lemon slice and a sprig of lavender."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/wJ85pB.png"
      },
      {
        id: 32,
        name: "Tropical Mango Muddle",
        ingredients: [
          "3 oz Mango Nectar",
          "1 oz Coconut Water",
          "1/2 oz Lime Juice",
          "Mint Leaves",
          "Soda Water",
          "Mango Slice for garnish"
        ],
        directions: {
          step1: "In a shaker, muddle mint leaves with lime juice.",
          step2: "Add mango nectar and coconut water, then shake with ice.",
          step3: "Strain into a glass filled with ice, top with soda water, and garnish with a mango slice."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/X8VO2c.png"
      },
      {
        id: 33,
        name: "Cinnamon Apple Spritzer",
        ingredients: [
          "4 oz Apple Juice",
          "Cinnamon Stick",
          "Soda Water",
          "Apple Slice for garnish"
        ],
        directions: {
          step1: "Fill a glass with ice and add a cinnamon stick.",
          step2: "Pour apple juice over the ice.",
          step3: "Top with soda water and garnish with an apple slice."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/vUJ9ad.png"
      },
      {
        id: 34,
        name: "Ginger Peach Soother",
        ingredients: [
          "3 oz Peach Nectar",
          "1/2 oz Fresh Ginger Juice",
          "1/2 oz Honey Syrup",
          "Soda Water",
          "Peach Slice for garnish",
          "Mint Leaf for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine peach nectar, ginger juice, and honey syrup.",
          step2: "Top with soda water and gently stir to combine.",
          step3: "Garnish with a peach slice and a mint leaf."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/sFc663.png"
      },
      {
        id: 35,
        name: "Honeydew Mint Cooler",
        ingredients: [
          "3 oz Honeydew Melon Puree",
          "1/2 oz Lime Juice",
          "1/2 oz Simple Syrup",
          "Mint Leaves",
          "Soda Water",
          "Honeydew Balls for garnish"
        ],
        directions: {
          step1: "Muddle mint leaves with lime juice and simple syrup in a shaker.",
          step2: "Add honeydew melon puree and shake with ice.",
          step3: "Strain into a glass filled with ice, top with soda water, and garnish with honeydew balls."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkWMuRV.png"
      },
      {
        id: 36,
        name: "Berry Basil Blast",
        ingredients: [
          "3 oz Mixed Berry Puree (strawberries, raspberries, blueberries)",
          "1/2 oz Lemon Juice",
          "1/2 oz Agave Syrup",
          "Basil Leaves",
          "Soda Water",
          "Mixed Berries for garnish"
        ],
        directions: {
          step1: "In a shaker, muddle basil leaves with lemon juice and agave syrup.",
          step2: "Add mixed berry puree and shake with ice.",
          step3: "Strain into a glass filled with ice, top with soda water, and garnish with mixed berries."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkXZLf1.png"
      },
      {
        id: 37,
        name: "Coconut Lime Quencher",
        ingredients: [
          "4 oz Coconut Water",
          "1 oz Lime Juice",
          "1/2 oz Simple Syrup",
          "Lime Wheel for garnish",
          "Shredded Coconut for garnish"
        ],
        directions: {
          step1: "Fill a glass with ice.",
          step2: "Combine coconut water, lime juice, and simple syrup, then pour over the ice.",
          step3: "Garnish with a lime wheel and a sprinkle of shredded coconut."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkXZWN4.png"
      },
      {
        id: 38,
        name: "Pineapple Ginger Spark",
        ingredients: [
          "3 oz Pineapple Juice",
          "1/2 oz Ginger Syrup",
          "Soda Water",
          "Pineapple Chunk for garnish",
          "Mint Leaf for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine pineapple juice and ginger syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a chunk of pineapple and a mint leaf."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkXZSHb.png"
      },
      {
        id: 39,
        name: "Cranberry Rosemary Refresher",
        ingredients: [
          "4 oz Cranberry Juice",
          "1/2 oz Rosemary Simple Syrup",
          "Soda Water",
          "Rosemary Sprig for garnish",
          "Cranberries for garnish"
        ],
        directions: {
          step1: "Fill a glass with ice.",
          step2: "Pour cranberry juice and rosemary simple syrup over the ice.",
          step3: "Top with soda water and garnish with a sprig of rosemary and a few cranberries."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkXZQ0F.png"
      },
      {
        id: 40,
        name: "Pomegranate Citrus Punch",
        ingredients: [
          "3 oz Pomegranate Juice",
          "1 oz Orange Juice",
          "1/2 oz Lime Juice",
          "Soda Water",
          "Pomegranate Seeds for garnish",
          "Orange Slice for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine pomegranate juice, orange juice, and lime juice.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with pomegranate seeds and an orange slice."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/sEQSXT.png"
      },
      {
        id: 41,
        name: "Watermelon Cucumber Chill",
        ingredients: [
          "3 oz Watermelon Juice",
          "1 oz Cucumber Juice",
          "1/2 oz Mint Syrup",
          "Soda Water",
          "Watermelon Slice for garnish",
          "Cucumber Ribbon for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine watermelon juice, cucumber juice, and mint syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a watermelon slice and a cucumber ribbon."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/CDfhlA.png"
      },
      {
        id: 42,
        name: "Elderflower Grapefruit Sipper",
        ingredients: [
          "3 oz Grapefruit Juice",
          "1 oz Elderflower Cordial",
          "Soda Water",
          "Grapefruit Slice for garnish",
          "Edible Flower for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine grapefruit juice and elderflower cordial.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a grapefruit slice and an edible flower."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/MIIJV6.png"
      },
      {
        id: 43,
        name: "Kiwi Melon Fizz",
        ingredients: [
          "2 oz Kiwi Puree",
          "2 oz Honeydew Melon Puree",
          "1/2 oz Lime Juice",
          "Soda Water",
          "Kiwi Slice for garnish",
          "Melon Ball for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine kiwi puree, honeydew melon puree, and lime juice.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a kiwi slice and a melon ball."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/CryUFe.png"
      },
      {
        id: 44,
        name: "Blueberry Thyme Breeze",
        ingredients: [
          "3 oz Blueberry Juice",
          "1/2 oz Thyme Simple Syrup",
          "Soda Water",
          "Fresh Blueberries for garnish",
          "Thyme Sprig for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine blueberry juice and thyme simple syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with fresh blueberries and a sprig of thyme."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img922/2830/2wfYKz.png"
      },
      {
        id: 45,
        name: "Pear Vanilla Sparkle",
        ingredients: [
          "3 oz Pear Nectar",
          "1/2 oz Vanilla Syrup",
          "Sparkling Water",
          "Pear Slice for garnish",
          "Vanilla Bean for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine pear nectar and vanilla syrup.",
          step2: "Top with sparkling water and stir gently.",
          step3: "Garnish with a pear slice and a vanilla bean."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img923/5382/6MmSd8.png"
      },
      {
        id: 46,
        name: "Raspberry Hibiscus Twist",
        ingredients: [
          "3 oz Hibiscus Tea (chilled)",
          "1 oz Raspberry Puree",
          "1/2 oz Lemon Juice",
          "Soda Water",
          "Raspberries for garnish",
          "Lemon Twist for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine chilled hibiscus tea, raspberry puree, and lemon juice.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with fresh raspberries and a lemon twist."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img924/5176/Lb6v9t.png"
      },
      {
        id: 47,
        name: "Golden Turmeric Tonic",
        ingredients: [
          "3 oz Turmeric and Ginger Tea (chilled)",
          "1/2 oz Honey Syrup",
          "1/2 oz Lemon Juice",
          "Sparkling Water",
          "Lemon Slice for garnish",
          "Pinch of Ground Turmeric for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine chilled turmeric and ginger tea, honey syrup, and lemon juice.",
          step2: "Top with sparkling water and stir gently.",
          step3: "Garnish with a lemon slice and a pinch of ground turmeric."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/wvxduP.png"
      },
      {
        id: 48,
        name: "Cherry Limeade Chill",
        ingredients: [
          "3 oz Cherry Juice",
          "1 oz Lime Juice",
          "1/2 oz Simple Syrup",
          "Soda Water",
          "Lime Wheel for garnish",
          "Cherry for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine cherry juice, lime juice, and simple syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a lime wheel and a cherry."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/922/b6Mjwy.png"
      },
      {
        id: 49,
        name: "Strawberry Lavender Serenity",
        ingredients: [
          "3 oz Strawberry Puree",
          "1/2 oz Lavender Syrup",
          "Soda Water",
          "Strawberries for garnish",
          "Lavender Sprig for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine strawberry puree and lavender syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with fresh strawberries and a sprig of lavender."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/CnKIXN.png"
      },
      {
        id: 50,
        name: "Sage Citrus Cooler",
        ingredients: [
          "3 oz Orange Juice",
          "1 oz Grapefruit Juice",
          "1/2 oz Sage Syrup",
          "Soda Water",
          "Sage Leaf for garnish",
          "Orange Slice for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine orange juice, grapefruit juice, and sage syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a sage leaf and an orange slice."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img922/995/ldl3ux.png"
      },
      {
        id: 51,
        name: "Blackberry Sage Fizz",
        ingredients: [
          "3 oz Blackberry Puree",
          "1/2 oz Lemon Juice",
          "1/2 oz Sage Syrup",
          "Soda Water",
          "Blackberries for garnish",
          "Sage Leaf for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine blackberry puree, lemon juice, and sage syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with fresh blackberries and a sage leaf."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/924/3uQbVE.png"
      },
      {
        id: 52,
        name: "Caramelized Pineapple Swirl",
        ingredients: [
          "3 oz Caramelized Pineapple Puree",
          "1/2 oz Lime Juice",
          "Soda Water",
          "Pineapple Wedge for garnish",
          "Mint Leaf for garnish"
        ],
        directions: {
          step1: "In a blender, blend pineapple until smooth and caramelize it lightly in a pan.",
          step2: "Cool the puree, then mix with lime juice and pour over ice in a glass.",
          step3: "Top with soda water, and garnish with a pineapple wedge and a mint leaf."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img924/1724/HBx1u6.png"
      },
      {
        id: 53,
        name: "Apricot Ginger Zinger",
        ingredients: [
          "3 oz Apricot Nectar",
          "1/2 oz Ginger Syrup",
          "Soda Water",
          "Apricot Slice for garnish",
          "Candied Ginger for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine apricot nectar and ginger syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with an apricot slice and a piece of candied ginger."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/NyrC9W.png"
      },
      {
        id: 54,
        name: "Matcha Mint Julep",
        ingredients: [
          "1 tsp Matcha Green Tea Powder",
          "1/2 oz Simple Syrup",
          "Mint Leaves",
          "Soda Water",
          "Mint Sprig for garnish",
          "Powdered Matcha for garnish"
        ],
        directions: {
          step1: "Muddle mint leaves with simple syrup in a glass.",
          step2: "Dissolve matcha powder in a small amount of water and add to the glass.",
          step3: "Fill with crushed ice, top with soda water, and garnish with a sprig of mint and a dusting of matcha powder."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/a/img924/7217/OZ4ozh.png"
      },
      {
        id: 55,
        name: "Tangerine Rose Infusion",
        ingredients: [
          "3 oz Tangerine Juice",
          "1/2 oz Rose Water",
          "Soda Water",
          "Tangerine Slice for garnish",
          "Edible Rose Petals for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine tangerine juice and rose water.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a tangerine slice and edible rose petals."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/yNXHNn.png"
      },
      {
        id: 56,
        name: "Cucumber Melon Mixer",
        ingredients: [
          "3 oz Honeydew Melon Puree",
          "1 oz Cucumber Juice",
          "1/2 oz Lime Juice",
          "Soda Water",
          "Cucumber Slice for garnish",
          "Melon Ball for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine honeydew melon puree, cucumber juice, and lime juice.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a cucumber slice and a melon ball."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/rjL87B.png"
      },
      {
        id: 57,
        name: "Passion Fruit Nojito",
        ingredients: [
          "3 oz Passion Fruit Puree",
          "1/2 oz Lime Juice",
          "Mint Leaves",
          "Soda Water",
          "Lime Wheel for garnish",
          "Mint Sprig for garnish"
        ],
        directions: {
          step1: "Muddle mint leaves with lime juice in a glass.",
          step2: "Add passion fruit puree and fill the glass with ice.",
          step3: "Top with soda water and garnish with a lime wheel and a sprig of mint."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://imagizer.imageshack.com/v2/238x416q70/r/923/5oSRR0.png"
      },
      {
        id: 58,
        name: "Spiced Pear Fauxjito",
        ingredients: [
          "3 oz Pear Juice",
          "1/2 oz Lemon Juice",
          "1/4 tsp Ground Cinnamon",
          "Mint Leaves",
          "Soda Water",
          "Pear Slice for garnish",
          "Cinnamon Stick for garnish"
        ],
        directions: {
          step1: "Muddle mint leaves with lemon juice and ground cinnamon in a glass.",
          step2: "Add pear juice and fill the glass with ice.",
          step3: "Top with soda water and garnish with a pear slice and a cinnamon stick."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkhGVPn.png"
      },
      {
        id: 59,
        name: "Lemongrass Ginger Rhapsody",
        ingredients: [
          "3 oz Lemongrass Tea (chilled)",
          "1/2 oz Ginger Syrup",
          "Soda Water",
          "Lemongrass Stalk for garnish",
          "Candied Ginger for garnish"
        ],
        directions: {
          step1: "In a glass filled with ice, combine chilled lemongrass tea and ginger syrup.",
          step2: "Top with soda water and stir gently.",
          step3: "Garnish with a lemongrass stalk and a piece of candied ginger."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkhGQDB.png"
      },
      {
        id: 60,
        name: "Apple Cinnamon Seltzer",
        ingredients: [
          "3 oz Apple Cider",
          "Cinnamon Stick",
          "Soda Water",
          "Apple Slice for garnish",
          "Ground Cinnamon for garnish"
        ],
        directions: {
          step1: "Fill a glass with ice and add a cinnamon stick.",
          step2: "Pour apple cider over the ice.",
          step3: "Top with soda water and garnish with an apple slice and a sprinkle of ground cinnamon."
        },
        alcoholic: false,
        isFavorite: false,
        image: "https://iili.io/JkhGrKu.png"
      }
]

module.exports = beveragesData;