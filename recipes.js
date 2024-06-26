const recipes = [
  {
    id: "4323142600",
    time: "10 min",
    type: "vegan",
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678269290/food/avocado_toast2_wezbuo.jpg",
    name: "Avocado toast",
    ingredients: [
      "2-3 slices of bread",
      "1 ripe avocado",
      "butter (optional)",
      "Pinch of salt",
      "Optional seasoning: black pepper, paprika powder, garlic powder",
      "Optional toppings: Mozzarella or other toppings",
    ],
    instructions: [
      "Cut avocado in half and remove the pit.",
      "Using a spoon scoop out the avocado from the outer peel.",
      "Put scooped out avocado on a plate and smash it with a fork to a paste until smooth and consistent.",
      "Season to taste.",
      "Toast (and butter) bread slices.",
      "Spread avocado on the top of the toasted bread. Add on the top any extras.",
    ],
  },
  {
    id: "3323104030",
    time: "5+15 min",
    type: "vegan",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1677839876/food/chickpea_curry_gxosij.jpg",
    name: "Chickpea curry",
    ingredients: [
      "2 tbsp vegetable oil",
      "50g red curry paste",
      "2 cans (2 x 400g) of chickpeas, drained",
      "1 can (400g) of tomatoes, chopped",
      "½ cup of creamed coconut milk",
      "½ cup of fresh coriander, chopped (optional)",
      "50-100g of baby spinach",
      "1 tsp soy sauce (optional)",
      "salt to taste",
      "serve with pita bread or cooked rice",
    ],
    instructions: [
      "Heat a saucepan to medium-high and add vegetable oil.",
      "Add red curry paste, few tbsp water and cook for 2 minutes, stirring occasionally.",
      "Pour coconut milk and mix well.",
      "Add chopped tomatoes from the can and chickpeas.",
      "Cook for 5-7 minutes.",
      "Add baby spinach (and chopped coriander) and continue stirring until spinach wilts.",
    ],
  },
  {
    id: "3323104000",
    time: "10+15 min",
    type: "vegetarian",
    category: "Side",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1677835946/food/grilled_asparagus_kqnekc.jpg",
    name: "Grilled asparagus",
    ingredients: [
      "500g (1 bunch) fresh green asparagus",
      "1-2 tbsp olive oil",
      "Salt, ground pepper, to taste",
      "Lemon juice (½ of small lemon)",
      "2-3 tbsp of grated hard cheese (optional)",
      "Pinch of red pepper flakes (optional)",
    ],
    instructions: [
      "Preheat the oven to 220C. Rinse and drain the asparagus, snap off and discard the ends.",
      "Place the asparagus in a single layer on the large baking sheet with parchment paper.",
      "Drizzle the asparagus with 1-2 tbsp of olive oil.",
      "Season with salt and pepper.",
      "Bake for 10-15 minutes, until asparagus can be easily be pierced by fork (few minutes more in case of the thick asparagus).",
      "Remove from the oven and sprinkle with little bit of lemon juice and grated cheese",
    ],
  },
  {
    id: "3323104010",
    time: "10+20 min",
    type: "vegan",
    category: "Soup",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1677835946/food/cream_of_broccoli_jc8jam.jpg",
    name: "Broccoli soup",
    ingredients: [
      "1 broccoli floret (around 500g whole)",
      "1 small potato, peeled and cut into small equal pieces",
      "2 tbsp of olive oil",
      "1 yellow onion, chopped roughly",
      "1 leek (only white part), chopped",
      "4 cups vegetable broth (1l water and 1 bouillon cube",
      "2-3 tbsp sour cream (optional)",
      "salt, ground black pepper, to taste",
    ],
    instructions: [
      "Rinse the broccoli and cut it into small florets. Discard the root.",
      "Heat a soup pot to medium heat and add olive oil.",
      "Add onion and leek and cook for 5-7 minutes until tender.",
      "Pour the water, add broccoli and potatoes. Bring to a boil, add smashed bouillon cube and stir.",
      "Reduce the temperature and simmer for 10-15 minutes.",
      "After the soup cool down a bit, blend with a stick blender until smooth",
      "Season to taste.",
    ],
  },
  {
    id: "6323102500",
    time: "10 min",
    type: "vegetarian",
    category: "Salad",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678094610/food/greek_salad_wxuvfx.jpg",
    name: "Greek salad",
    ingredients: [
      "2-3 tomatoes, cut into wedges",
      "1 medium red onion, sliced into rings",
      "1 cucumber, (peeled) and sliced",
      "1 green pepper, sliced into ring stripes",
      "few black or green olives, preferably Kalamata",
      "200g (or 2 x 100g), one (or two) single feta cheese piece",
      "1 tsp red wine vinegar",
      "2-3 tbsp extra virgin olive oil",
      "½ tsp dried oregano",
      "salt and ground black pepper to taste",
    ],
    instructions: [
      "Rinse and cut the vegetables",
      "For the cucumber, peel it and cut it first lengthwise into two halves, then remove the seeds and slice into 0.5 cm slices",
      "Place the vegetables in the plate and drain, i.e. remove extra liquid from the plate.",
      "Season with pinch of salt and ground pepper. Add olive oil and vinegar and very loosely mix the vegetables.",
      "Put feta cheese on the top, drizzle with olive oil and dried oregano",
    ],
  },
  {
    id: "6323122200",
    time: "5+30 min",
    type: "vegetarian",
    category: "Desert",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678101841/food/rice_pudding_gbnus0.jpg",
    name: "Rice pudding",
    ingredients: [
      "2 bags (200g) of white rice, arborio will do",
      "8-10 tbsp white sugar",
      "4 cups milk",
      "½ cup heavy cream (optional)",
      "2 tbsp cornstarch",
      "1 tbsp vanilla extract or 30g vanilla sugar",
      "ground cinnamon or red fruit sauce",
    ],
    instructions: [
      "Cook the rice as per instruction (15-20 min), discard the water and remove the rice from the bag.",
      "Pour the milk (3 ½ cups) to the saucepan, add back the cooked rice and mix it with milk.",
      "Add white sugar, vanilla and bring it to the boil.",
      "Stir occasionally and turn down the heat to low.",
      "In a separate cup, pour ½  cup of milk and mix the cornstarch.",
      "Pour the mixture into the saucepan, cook for another 10 minutes stirring constantly.",
      "Share the rice milk into several small bowls or cups and let it cool completely.",
      "Before serving sprinkle with just a pinch of ground cinnamon or add red fruit sauce on the top.",
    ],
  },
  {
    id: "6323132010",
    time: "10 min",
    type: "vegan",
    category: "Smoothie",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678105279/food/blueberry_beetroot_smoothie_k4aj83.jpg",
    name: "Blueberry beetroot",
    ingredients: [
      "½ cup milk (almond or coconut)",
      "2-3 tbsp greek yogurt (optional)",
      "1 tbsp maple syrup or other sweetener",
      "½ cup beetroot, shredded or cut into small cubes (cooked beetroot from the supermarket will do)",
      "½ cup blueberries (fresh or frozen)",
      "1 ripe banana",
    ],
    instructions: [
      "Add ingredients into the blender.",
      "Depending on the consistency you like, add more milk.",
    ],
  },
  {
    id: "6323141400",
    time: "5+20 min",
    type: "vegan",
    category: "Other",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678108449/food/strawberry_sauce_eekk89.jpg",
    name: "Strawberry sauce",
    ingredients: [
      "350-450g strawberries (fresh or frozen), hulled and cut in half if fresh",
      "1-2 tbsp lemon juice",
      "2-3 tbsp sugar",
    ],
    instructions: [
      "Place strawberries into a medium saucepan.",
      "Bring it to boil on the medium heat.",
      "Halve and mash the strawberries a little bit.",
      "Add a sugar and lemon juice.",
      "After 15 minutes, the sauce will begin to thicken.",
      "Remove the saucepan from the heat and let the strawberry sauce cool.",
      "Put the sauce into a jar and refrigerate it.",
    ],
  },
  {
    id: "3323104055",
    time: "5+10 min",
    type: "vegetarian",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1677839876/food/grilled_halloumi_cheese_lmmksw.jpg",
    name: "Grilled halloumi",
    ingredients: ["1 (ca. 225g) package halloumi cheese", "1 tbsp olive oil"],
    instructions: [
      "Slice the halloumi block into eight slices.",
      "Brush both sides of slices with olive oil.",
      "Heat a nonstick (grill) pan to medium-high.",
      "Place the halloumi slices in the pan (in one layer).",
      "Cook for 2-3 minutes on each side, moving occasionally the slices with fork and spoon, until sliced are lightly crisped and browned.",
      "Serve immediately.",
      "SERVING PROPOSITION: With greek salad and mashed potatoes drizzled with truffle oil.",
    ],
  },
  {
    id: "832392310",
    time: "5+20 min",
    type: "vegetarian",
    category: "Side",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678264779/food/potatoes_gmve68.jpg",
    name: "Mashed potatoes",
    ingredients: [
      "1kg potatoes",
      "30g butter",
      "1/2 cup milk",
      "1 clove garlic, mashed (optional)",
      "1-2 tbsp lemon juice",
      "4-5 tbsp of liquid from a pickled jalapeno peppers can (for extra kick)",
      "Truffle olive oil",
      "Salt, ground pepper",
    ],
    instructions: [
      "Peel the potatoes and cut into equal pieces.",
      "Put the potatoes into a pot with cold water. Water should cover the potatoes. Add 1tsp of salt.",
      "After boiling, cook for 15-20 minutes until potatoes are very soft.",
      "Drain the potatoes, return into pot and add butter, lemon juice and milk.",
      "Mash the potatoes until creamy and add salt to taste and pinch of ground pepper.",
      "After you serve mashed potatoes on the plate, drizzle with 1-2 tbsp of truffle olive oil (do not put truffle oil directly into the pot or bowl with mashed potatoes).",
    ],
  },
  {
    id: "080323095510",
    time: "1+15 min",
    type: "vegetarian",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678265642/food/pierogi_ldopd1.jpg",
    name: "Pierogi",
    ingredients: ["1 package of store-bought pierogi"],
    instructions: [
      "This is actually not a recipe, just a reminder that we can get great store-bought pierogi.",
      "Our favorites are pierogi with cabbage and mushrooms or with lentils, baked in the oven at 220 degrees for 10-15 minutes or eventually fried in the pan.",
    ],
  },
  {
    id: "080323122900",
    time: "10+15 min",
    type: "vegetarian",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678269289/food/tomato_pasta_tsus6d.jpg",
    name: "Cherry tomato pasta",
    ingredients: [
      "500g spaghetti or other pasta",
      "3-4 tbsp olive oil",
      "2 garlic cloves, sliced",
      "250g cherry tomatoes",
      "½ cup (or more, could be even up to 1½ -2 cups) of tomato passata, preferably rustic type with visible small tomato pieces",
      "few fresh basil leaves",
      "grated hard cheese",
      "salt, pinch of ground pepper",
    ],
    instructions: [
      "Add 1 tbsp of salt into the pot with water and bring the salted water to the boil.",
      "Cook the pasta as per instruction on the package. Drain the pasta.",
      "In the meantime, working in parallel, heat the saucepan to low-medium, add olive oil and garlic. Add cherry tomatoes, pepper and generous amount of salt (1/2 tsp).",
      "Stir occasionally and wait until the cherry tomatoes burst, around 7-10 minutes.",
      "Add ½ cup of tomato passata.",
      "Add cooked pasta to the saucepan or if the saucepan is not big enough, mix together tomato sauce and the pasta in the pot where you cooked the pasta.",
      "If you prefer, add additional tomato passata and season to taste.",
      "Serve the pasta into the plates and top it with grated cheese and basil leaves.",
    ],
  },
  {
    id: "080323131000",
    time: "10 min",
    type: "vegetarian",
    category: "Salad",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678277551/food/tzatziki_iehhur.jpg",
    name: "Tzatziki",
    ingredients: [
      "300g greek yogurt (thick)",
      "1 cucumber, large",
      "2 garlic cloves, chopped into small pieces",
      "2 tbsp olive oil",
      "1 tbsp red wine vinegar",
      "1 tsp fresh dill",
      "salt",
    ],
    instructions: [
      "Finely chop the peeled garlic cloves.",
      "Cut fresh dill.",
      "Peel the cucumber, remove the seeds and grate (medium). Squeeze the grated cucumber in order to remove the water and transfer to the separate bowl.",
      "Add Greek yogurt to the bowl.",
      "Add garlic, dill, salt, olive oil and red wine vinegar by spreading equally.",
      "Stir gently and season to taste.",
      "Refrigerate the salad before serving.",
    ],
  },
  {
    id: "0903230954",
    time: "15+40 min",
    type: "vegetarian",
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678269288/food/cheese_pie_u0olyl.jpg",
    name: "Cheese pie",
    ingredients: [
      "2 packages of phyllo sheets (total of 12-14 sheets, 500-600g)",
      "1-2 feta cheese (200-400g, depending on how strong taste you like)",
      "250g ricotta cheese",
      "¼ cup olive oil",
      "¼ tsp-½ tsp of chopped dill (optional)",
      "¼ tsp-½ tsp of chopped mint (optional)",
      "Sesame seeds (optional)",
      "Pinch of ground black pepper",
    ],
    instructions: [
      "Defrost the phyllo layers and preheat the oven to 180C. In a bowl crush the feta, i.e. make feta crumbles, add ricotta, crush it with fork,  add pepper, mint and dill and mix all together. Brush a baking tray or oven-proof dish (similar size as phyllo sheets) with olive oil.",
      "Place a first phyllo sheet and brush it with olive oil (not more than 1 tsp). Place a second phyllo sheet on the first one and brush it with olive oil. Continue with the third layer, brush it with olive oil. Repeat until you use 6-7 layers (brush with olive oil layers). Pour the cheese mixture and spread it evenly.",
      "Place a phyllo layer over the cheese mixture and brush it with olive oil. Repeat with the remaining 5-6 phyllo sheets (as for the bottom layers, brush the phyllo sheets with olive oil).",
      "Roll in the edges of the phyllo layers (you can cut and remove little bit of phyllo sheets). Cut the pie into pieces (3x4), but only the top layers. Sprinkle with little water and add sesame seeds.",
      "Bake a cheese pie for 40 minutes (phyllo should be golden and crispy). Before the serving, let the pie first cool for 10-15 minutes and cut it into pieces. You can refrigerate the pie in the airtight container.",
    ],
  },
  {
    id: "090323110800",
    time: "10+50 min",
    type: "vegetarian",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678351711/food/mac_and_cheese_jocux1.jpg",
    name: "Mac and Cheese",
    ingredients: [
      "250g elbow macaroni",
      "400g cottage cheese",
      "200g (plus 50g for the topping) shredded cheddar cheese",
      "150-200g sour cream",
      "1 tbsp olive oil (or coconut oil)",
      "½ - 1 tsp salt",
      "½ tsp paprika powder",
      "1-2 tbsp chopped chives or other herbs (optional)",
    ],
    instructions: [
      "Cook the macaroni as per instruction. Drain the pasta.",
      "Preheat the oven to 180C.",
      "In a large bowl add cottage cheese, shredded cheddar cheese and sour cream.",
      "Add macaroni to the mixture. Mix and salt to taste.",
      "Brush the casserole dish with olive oil (or coconut oil) and pour the cheese mixture in it.",
      "Add little bit of shredded cheddar cheese on the top and sprinkle with ground paprika.",
      "Bake for 40-45 minutes.",
    ],
  },
  {
    id: "090323115200",
    time: "15+ min",
    type: "vegetarian",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678269290/food/quesadilla_jd3eqs.jpg",
    name: "Quesadilla",
    ingredients: [
      "4-8 Tortillas",
      "200g of shredded cheddar cheese",
      "Toppings: black beans, sweet corn, red onion rings, jalapeno",
      "Serving suggestion: Any topping of your choice, just drain it before adding over the cheese on tortilla.",
      "Cheese mixture: We use sometimes mixture of mozzarella, feta and yellow cheese.",
    ],
    instructions: [
      "Heat a large pan to a medium high temperature. Place tortilla into the pan.",
      "Brush ½ tsp olive oil on the top of tortilla and turn over the tortilla.",
      "Add and spread the cheese on one half of the tortilla. Add toppings over the cheese.",
      "From the time of placing the tortilla into the pan, until you place cheese and topping, not more than 1 min should pass.",
      "Fold over (using fork and spatula) the half of the tortilla (with no cheese) over the half where the cheese is, i.e. make a ‘half  moon’.",
      "Press down the upper side with spatula, specially the edges.",
      "Cook 1-2 minutes on each side. After removing from the pan, let it cool for few minutes before slicing (in 2 or 3 pices).",
    ],
  },
  {
    id: "090323124800",
    time: "20 min",
    type: "vegan",
    category: "Side",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678269289/food/grilled_zucchini_lsru9s.jpg",
    name: "Grilled zucchini",
    ingredients: [
      "2-3 small or medium sized zucchini",
      "1-2 garlic cloves, minced or pinch of garlic powder (optional)",
      "1-2 tbsp lemon juice or 1 tbsp balsamic vinegar (optional)",
      "¼ cup olive oil",
      "optionally pinch of any of the dry spices (thyme, basil, rosemary)",
      "Salt, ground pepper",
      "Serving proposition: With grilled camembert cheese and eventually cranberry sauce you will have a quick lunch or dinner.",
    ],
    instructions: [
      "In a small bowl make a marinade, by adding olive oil, lemon juice or balsamic vinegar, spices, minced garlic, salt and pepper.",
      "Rinse and cut zucchini lengthwise into thin slices. There is no need to peel the zucchini.",
      "Heat a large pan to a medium-high to high temperature. Brush the zucchini slices with olive oil (not with a marinade) and grill the slices for 2-3 minutes on each side.",
      "Slices should not overlap. Remove the zucchini from the pan into one big plate and brush it with the marinade.",
      "Add salt to taste.",
    ],
  },
  {
    id: "090323133500",
    time: "20 min",
    type: "vegetarian",
    category: "Side",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678278107/food/aubergine_rolls_yjm9uu.jpg",
    name: "Aubergine rolls",
    ingredients: [
      "2-3 small or medium sized aubergines",
      "1-2 garlic cloves, minced or pinch of garlic powder (optional)",
      "1-2 tbsp lemon juice or 1 tbsp balsamic vinegar (optional)",
      "¼ cup olive oil",
      "optionally pinch of any of the dry spices (thyme, basil, rosemary)",
      "Salt, ground pepper",
      "1-2 Mozzarella (100-200g)",
      "15+ basil leaves",
      "Sun-dried tomato",
    ],
    instructions: [
      "In a small bowl make a marinade, by adding olive oil, lemon juice or balsamic vinegar, spices, minced garlic, salt and pepper.",
      "Wash the aubergine, cut and discard the top and bottom part. Cut aubergine lengthwise into thin 1/2 cm slices, from thicker toward the inner part. There is no need to peel the aubergine.",
      "Heat a large pan to a medium-high to high temperature. Brush the aubergine slices with olive oil (not with a marinade) and grill the slices for 2-3 minutes on each side. Slices should not overlap. Remove the aubergine from the pan into one big plate and brush it with the marinade. Add salt to taste.",
      "Drain and chop few sun-dried tomatoes. Drain mozzarella and cut it into thick slices or sticks. On each eggplant slice place mozzarella, some sun-dried tomato and basil leaf.",
      "Roll up filled aubergine slice and use a wooden toothpick to hold it together.",
    ],
  },
  {
    id: "090323141400",
    time: "10 min",
    type: "vegetarian",
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678367494/food/caprese_buns_kcthoy.jpg",
    name: "Caprese buns",
    ingredients: [
      "6 sandwich buns",
      "2 mozzarellas (200-250g)",
      "1-2 ripe tomatoes",
      "Basil leaves or pesto genovese (green pesto)",
      "Olive oil (optional)",
      "Balsamic vinegar (optional)",
      "Butter (optional)",
      "Salt, pepper",
    ],
    instructions: [
      "Cut the buns in half.",
      "Drain mozzarella and cut into ½ cm thick slices. Cut tomato into slices.",
      "Butter the buns. Arrange mozzarella slices on one half of the bun.",
      "Add basil leaves (or green pesto) and drizzle with some olive oil and balsamic vinegar.",
      "Add tomato slices. Season to taste and close the buns.",
    ],
  },
  {
    id: "090323145300",
    time: "10 min",
    type: "vegan",
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678368955/food/porridge_af9epe.jpg",
    name: "Porridge",
    ingredients: [
      "1 cup of porridge oats",
      "4 cups of water",
      "Sweetener: Maple syrup",
      "Toppings of your choice: We like with fresh apples, bananas, ground cinnamon and (toasted) almond flakes. Often with dried fruits and toasted nuts as well.",
      "Suggestion: Prepare a porridge base ahead and use it in the following days.",
    ],
    instructions: [
      "Place a water and oats in a large pan and add a pinch of salt.",
      "Bring to a boil, reduce a heat and cook for 8-10 minutes stirring occasionally.",
      "Remove from the heat and leave the pot with cooked oats resting until cooled.",
      "Refrigerate in an airtight container.",
    ],
  },
  {
    id: "100323100100",
    time: "15+40 min",
    type: "vegan",
    category: "Soup",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678439059/food/carrots_sweet_potatoes_rdb3hv.jpg",
    name: "Carrots soup",
    ingredients: [
      "400g sweet potatoes, peeled and cut into small pieces",
      "400 carrots, peeled and cut into 1cm thick slices",
      "3 tbsp olive oil",
      "1 yellow onion, peeled and diced",
      "2 garlic cloves, peeled and thinly sliced",
      "6 cups vegetable stock (water + 1 vegetable bouillon cube)",
      "½ cup coconut milk (optional)",
      "For spicy taste 1 tsp red curry paste (optional)",
      "½ tsp ground cumin",
      "½ to ¾ tsp salt, pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 200C. On the baking sheet, put a baking paper and place pieces of sweet potato and carrots.",
      "Drizzle with olive oil. Roast for 20-30 minutes.",
      "Heat the soup pot to medium-high, add 2 tbsp of olive oil and cook the onion for 5-7 minutes.",
      "Add garlic, cumin and (red curry paste), stir with the wooden spoon for 30-60 sec.",
      "Watch out for the garlic not to burn. Add coconut milk if any.",
      "Pour vegetable stock, add roasted carrots and potato.",
      "Bring mixture to the boil, reduce the heat and continue cooking for another 10 minutes.",
      "Remove from the heat, let it cool and blend it with stick blender until very smooth. Season to taste.",
    ],
  },
  {
    id: "100323102300",
    time: "5 min",
    type: "vegan",
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678439313/food/peanut_butter_and_jam_trjiqe.jpg",
    name: "Peanut butter and jam",
    ingredients: [
      "Slices of toast bread",
      "Peanut butter",
      "Strawberry jam (optional)",
      "Banana (cut into slices)",
    ],
    instructions: [
      "Well, nothing special to write here, spread a peanut butter on the toast bread, (than spread a jam as a second layer) and arrange banana cuts on the top.",
    ],
  },
  {
    id: "100323104900",
    time: "5 min",
    type: "vegan",
    category: "Smoothie",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1678439512/food/spinach_smoothie_jgaaqp.jpg",
    name: "Spinach smoothie",
    ingredients: [
      "1 ripe banana",
      "50-70g baby spinach (ready to eat)",
      "¼ apple, peeled",
      "1 cup milk (almond, oat or any other milk of your choice)",
      "1-2 tbsp maple syrup (or other sweetener, e.g. vanilla sugar)",
      "1-2 tbsp coconut milk (optional)",
    ],
    instructions: [
      "Add all ingredient into a blender and blend until very smooth.",
      "Pour first ½ - ¾ cup milk and adjust the consistency by adding additional milk.",
    ],
  },
  {
    id: "210323103800",
    time: "25 min",
    type: "vegan",
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dfzvhcazw/image/upload/v1679391447/food/udon_veggies_oxv7bn.jpg",
    name: "Udon veggies",
    ingredients: [
      "300g dry udon noodles (or 400-500g fresh udon noodles)",
      "1 tbsp vegetable oil",
      "1 broccoli (400-500g whole, with root), root removed, then cut into small bite-sized florets",
      "200-300g fresh mushrooms (e.g. portobello), cleaned and sliced (not too thin)",
      "1 pepper (or combination of yellow, red and green bell peper), sliced into bite-sized stripes",
      "½ carrot, roughly grated",
      "1 small yellow (or red) onion, diced",
      "½ cup green onions, sliced diagonally",
      "1 tsp sesame seeds for decoration",
      "50-70g fresh baby spinach (ready to eat)",
      "1 cup bouillon (hot water and ¼ vegetable bouillon cube)",
      "SAUCE (mix soy sauce, sirracha, red wine vinegar, sesame oil, brown sugar, ginger, garlic, and slightly adjust below proportions depending on your taste)",
      "¼ cup soy sauce",
      "1-2 tsp sirracha (chili sauce)",
      "1-2 tsp red wine (or rice) vinegar",
      "1-2 tbsp (preferably sesame) oil",
      "1 tsp brown sugar",
      "1-2 tsp minced ginger",
      "2-3 cloves garlic, minced",
    ],
    instructions: [
      "First prepare and cut all vegetables. Prepare the sauce, i.e. combine all ingredients in one small bowl. Cook the dry udon noodles according to the instruction on the package and drain.",
      "In  a large saucepan or wok, add 1 tbsp oil and heat to medium-high.",
      "Add chopped yellow onion and carrots and cook for 2-3 min, stir constantly.",
      "Add sliced mushroom and continue cooking and stirring for few more minutes until the mushroom get a nice brown color.",
      "Add broccoli and peppers, cook for 2-3 minutes, add green onion, cook for additional 30 seconds.",
      "Add drained noodles to the wok, pour the sauce and mix all ingredients. Add bouillon if the mixtures is dry.",
      "Add baby spinach, stir and cook until the spinach wilts. Garnish with sesame seeds on the top.",
    ],
  },
];

export default recipes;
