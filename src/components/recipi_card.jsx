import React, { Component } from "react";
import { Card, Image, Icon, Label, Button, Statistic } from "semantic-ui-react";

class RecipeCard extends Component {
  render() {
    let y = {
      "0": {
        recipe: {
          uri:
            "http://www.edamam.com/ontologies/edamam.owl#recipe_8eac2529e44a7258f798ae58219f847c",
          label: "Breakfast Poha - Indian Flattened Rice",
          image:
            "https://www.edamam.com/web-img/50b/50bf308bd9f7af19d54b0457c2b69b6b.jpg",
          source: "Honest Cooking",
          url:
            "http://honestcooking.com/breakfast-poha-indian-flattened-rice-recipe/",
          shareAs:
            "http://www.edamam.com/recipe/breakfast-poha-indian-flattened-rice-8eac2529e44a7258f798ae58219f847c/poha",
          yield: 2,
          dietLabels: [],
          healthLabels: [
            "Vegan",
            "Vegetarian",
            "Pescatarian",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Kosher",
          ],
          cautions: ["Tree-Nuts", "Sulfites", "FODMAP"],
          ingredientLines: [
            "5 ounces dry flattened rice (poha)",
            "Small handful of cilantro",
            "1½ tbs coconut oil",
            "1½ tsp cumin",
            "1½ tsp mustard seeds",
            "1 green chili",
            "2-3 curry leaves, torn in half",
            "1 small onion, finely chopped/minced",
            "1 small boiled potato, chopped into small cubes",
            "½ tsp turmeric",
            "¼ cup water",
            "¾ tsp salt",
            "¾ tsp sugar",
            "2 tbs grated (unsweetened) coconut",
            "Quarter of a lemon (about 2 tsp juice)",
          ],
          ingredients: [
            {
              text: "5 ounces dry flattened rice (poha)",
              quantity: 5,
              measure: "ounce",
              food: "rice",
              weight: 141.747615625,
              foodCategory: "grains",
              image: null,
            },
            {
              text: "Small handful of cilantro",
              quantity: 1,
              measure: "handful",
              food: "cilantro",
              weight: 1.5,
              foodCategory: "vegetables",
              image:
                "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg",
            },
            {
              text: "1½ tbs coconut oil",
              quantity: 1.5,
              measure: "tablespoon",
              food: "coconut oil",
              weight: 20.4,
              foodCategory: "Oils",
              image:
                "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg",
            },
            {
              text: "1½ tsp cumin",
              quantity: 1.5,
              measure: "teaspoon",
              food: "cumin",
              weight: 3.1500000000000004,
              foodCategory: "Condiments and sauces",
              image:
                "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg",
            },
            {
              text: "1½ tsp mustard seeds",
              quantity: 1.5,
              measure: "teaspoon",
              food: "mustard seeds",
              weight: 3,
              foodCategory: "Condiments and sauces",
              image:
                "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg",
            },
            {
              text: "1 green chili",
              quantity: 1,
              measure: "<unit>",
              food: "green chili",
              weight: 45,
              foodCategory: "vegetables",
              image:
                "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg",
            },
            {
              text: "2-3 curry leaves, torn in half",
              quantity: 2.5,
              measure: "<unit>",
              food: "curry leaves",
              weight: 1.5,
              foodCategory: "Condiments and sauces",
              image:
                "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg",
            },
            {
              text: "1 small onion, finely chopped/minced",
              quantity: 1,
              measure: "<unit>",
              food: "onion",
              weight: 70,
              foodCategory: "vegetables",
              image:
                "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg",
            },
            {
              text: "1 small boiled potato, chopped into small cubes",
              quantity: 1,
              measure: "<unit>",
              food: "potato",
              weight: 170,
              foodCategory: "vegetables",
              image:
                "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg",
            },
            {
              text: "½ tsp turmeric",
              quantity: 0.5,
              measure: "teaspoon",
              food: "turmeric",
              weight: 1.5,
              foodCategory: "Condiments and sauces",
              image:
                "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg",
            },
            {
              text: "¼ cup water",
              quantity: 0.25,
              measure: "cup",
              food: "water",
              weight: 59.25,
              foodCategory: "water",
              image:
                "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
            },
            {
              text: "¾ tsp salt",
              quantity: 0.75,
              measure: "teaspoon",
              food: "salt",
              weight: 4.5,
              foodCategory: "Condiments and sauces",
              image:
                "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
            },
            {
              text: "¾ tsp sugar",
              quantity: 0.75,
              measure: "teaspoon",
              food: "sugar",
              weight: 3.1500000000000004,
              foodCategory: "sugars",
              image:
                "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
            },
            {
              text: "2 tbs grated (unsweetened) coconut",
              quantity: 2,
              measure: "tablespoon",
              food: "coconut",
              weight: 9.99999999983094,
              foodCategory: "plant-based protein",
              image:
                "https://www.edamam.com/food-img/a27/a27851affdcc1da2d94da0a4fbe3b062.jpg",
            },
            {
              text: "Quarter of a lemon (about 2 tsp juice)",
              quantity: 0.25,
              measure: "<unit>",
              food: "lemon",
              weight: 14.5,
              foodCategory: "fruit",
              image:
                "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
            },
          ],
          calories: 951.6074162494016,
          totalWeight: 547.8899950949456,
          totalTime: 40,
          cuisineType: ["indian", "south east asian"],
          mealType: ["breakfast"],
          dishType: ["main course"],
          totalNutrients: {
            ENERC_KCAL: {
              label: "Energy",
              quantity: 951.6074162494016,
              unit: "kcal",
            },
            FAT: { label: "Fat", quantity: 26.898291170568378, unit: "g" },
            FASAT: {
              label: "Saturated",
              quantity: 21.09846873263729,
              unit: "g",
            },
            FATRN: { label: "Trans", quantity: 0.00084, unit: "g" },
            FAMS: {
              label: "Monounsaturated",
              quantity: 2.754568184278841,
              unit: "g",
            },
            FAPU: {
              label: "Polyunsaturated",
              quantity: 1.2226823042181312,
              unit: "g",
            },
            CHOCDF: { label: "Carbs", quantity: 163.40328823684925, unit: "g" },
            FIBTG: { label: "Fiber", quantity: 8.384749999984786, unit: "g" },
            SUGAR: { label: "Sugars", quantity: 11.05397499998947, unit: "g" },
            "SUGAR.added": {
              label: "Sugars, added",
              quantity: 3.143700000000001,
              unit: "g",
            },
            PROCNT: {
              label: "Protein",
              quantity: 16.600732392806872,
              unit: "g",
            },
            CHOLE: { label: "Cholesterol", quantity: 0, unit: "mg" },
            NA: { label: "Sodium", quantity: 1266.683411183232, unit: "mg" },
            CA: { label: "Calcium", quantity: 118.44395647905385, unit: "mg" },
            MG: {
              label: "Magnesium",
              quantity: 139.88508926339705,
              unit: "mg",
            },
            K: { label: "Potassium", quantity: 1274.1433397945075, unit: "mg" },
            FE: { label: "Iron", quantity: 7.360440777247271, unit: "mg" },
            ZN: { label: "Zinc", quantity: 2.9835047207182557, unit: "mg" },
            P: {
              label: "Phosphorus",
              quantity: 352.06592487480896,
              unit: "mg",
            },
            VITA_RAE: { label: "Vitamin A", quantity: 38.461, unit: "µg" },
            VITC: {
              label: "Vitamin C",
              quantity: 157.37854999999442,
              unit: "mg",
            },
            THIA: {
              label: "Thiamin (B1)",
              quantity: 0.36626533093738844,
              unit: "mg",
            },
            RIBF: {
              label: "Riboflavin (B2)",
              quantity: 0.2164628554999662,
              unit: "mg",
            },
            NIA: {
              label: "Niacin (B3)",
              quantity: 4.990225349999088,
              unit: "mg",
            },
            VITB6A: {
              label: "Vitamin B6",
              quantity: 0.9886865426561586,
              unit: "mg",
            },
            FOLDFE: {
              label: "Folate equivalent (total)",
              quantity: 76.90728540620603,
              unit: "µg",
            },
            FOLFD: {
              label: "Folate (food)",
              quantity: 76.90728540620603,
              unit: "µg",
            },
            FOLAC: { label: "Folic acid", quantity: 0, unit: "µg" },
            VITB12: { label: "Vitamin B12", quantity: 0, unit: "µg" },
            VITD: { label: "Vitamin D", quantity: 0, unit: "µg" },
            TOCPHA: {
              label: "Vitamin E",
              quantity: 0.7665549999995944,
              unit: "mg",
            },
            VITK1: {
              label: "Vitamin K",
              quantity: 15.250099999999662,
              unit: "µg",
            },
            WATER: { label: "Water", quantity: 333.8776224129233, unit: "g" },
          },
          totalDaily: {
            ENERC_KCAL: {
              label: "Energy",
              quantity: 47.58037081247008,
              unit: "%",
            },
            FAT: { label: "Fat", quantity: 41.38198641625904, unit: "%" },
            FASAT: {
              label: "Saturated",
              quantity: 105.49234366318645,
              unit: "%",
            },
            CHOCDF: { label: "Carbs", quantity: 54.46776274561642, unit: "%" },
            FIBTG: { label: "Fiber", quantity: 33.53899999993914, unit: "%" },
            PROCNT: {
              label: "Protein",
              quantity: 33.201464785613744,
              unit: "%",
            },
            CHOLE: { label: "Cholesterol", quantity: 0, unit: "%" },
            NA: { label: "Sodium", quantity: 52.778475465968, unit: "%" },
            CA: { label: "Calcium", quantity: 11.844395647905385, unit: "%" },
            MG: { label: "Magnesium", quantity: 33.305973634142156, unit: "%" },
            K: { label: "Potassium", quantity: 27.109432761585264, unit: "%" },
            FE: { label: "Iron", quantity: 40.89133765137373, unit: "%" },
            ZN: { label: "Zinc", quantity: 27.122770188347776, unit: "%" },
            P: { label: "Phosphorus", quantity: 50.29513212497271, unit: "%" },
            VITA_RAE: {
              label: "Vitamin A",
              quantity: 4.273444444444444,
              unit: "%",
            },
            VITC: {
              label: "Vitamin C",
              quantity: 174.86505555554933,
              unit: "%",
            },
            THIA: {
              label: "Thiamin (B1)",
              quantity: 30.522110911449037,
              unit: "%",
            },
            RIBF: {
              label: "Riboflavin (B2)",
              quantity: 16.650988884612783,
              unit: "%",
            },
            NIA: {
              label: "Niacin (B3)",
              quantity: 31.1889084374943,
              unit: "%",
            },
            VITB6A: {
              label: "Vitamin B6",
              quantity: 76.05281097355066,
              unit: "%",
            },
            FOLDFE: {
              label: "Folate equivalent (total)",
              quantity: 19.226821351551507,
              unit: "%",
            },
            VITB12: { label: "Vitamin B12", quantity: 0, unit: "%" },
            VITD: { label: "Vitamin D", quantity: 0, unit: "%" },
            TOCPHA: {
              label: "Vitamin E",
              quantity: 5.110366666663963,
              unit: "%",
            },
            VITK1: {
              label: "Vitamin K",
              quantity: 12.708416666666384,
              unit: "%",
            },
          },
          digest: [
            {
              label: "Fat",
              tag: "FAT",
              schemaOrgTag: "fatContent",
              total: 26.898291170568378,
              hasRDI: true,
              daily: 41.38198641625904,
              unit: "g",
              sub: [
                {
                  label: "Saturated",
                  tag: "FASAT",
                  schemaOrgTag: "saturatedFatContent",
                  total: 21.09846873263729,
                  hasRDI: true,
                  daily: 105.49234366318645,
                  unit: "g",
                },
                {
                  label: "Trans",
                  tag: "FATRN",
                  schemaOrgTag: "transFatContent",
                  total: 0.00084,
                  hasRDI: false,
                  daily: 0,
                  unit: "g",
                },
                {
                  label: "Monounsaturated",
                  tag: "FAMS",
                  schemaOrgTag: null,
                  total: 2.754568184278841,
                  hasRDI: false,
                  daily: 0,
                  unit: "g",
                },
                {
                  label: "Polyunsaturated",
                  tag: "FAPU",
                  schemaOrgTag: null,
                  total: 1.2226823042181312,
                  hasRDI: false,
                  daily: 0,
                  unit: "g",
                },
              ],
            },
            {
              label: "Carbs",
              tag: "CHOCDF",
              schemaOrgTag: "carbohydrateContent",
              total: 163.40328823684925,
              hasRDI: true,
              daily: 54.46776274561642,
              unit: "g",
              sub: [
                {
                  label: "Carbs (net)",
                  tag: "CHOCDF.net",
                  schemaOrgTag: null,
                  total: 155.01853823686446,
                  hasRDI: false,
                  daily: 0,
                  unit: "g",
                },
                {
                  label: "Fiber",
                  tag: "FIBTG",
                  schemaOrgTag: "fiberContent",
                  total: 8.384749999984786,
                  hasRDI: true,
                  daily: 33.53899999993914,
                  unit: "g",
                },
                {
                  label: "Sugars",
                  tag: "SUGAR",
                  schemaOrgTag: "sugarContent",
                  total: 11.05397499998947,
                  hasRDI: false,
                  daily: 0,
                  unit: "g",
                },
                {
                  label: "Sugars, added",
                  tag: "SUGAR.added",
                  schemaOrgTag: null,
                  total: 3.143700000000001,
                  hasRDI: false,
                  daily: 0,
                  unit: "g",
                },
              ],
            },
            {
              label: "Protein",
              tag: "PROCNT",
              schemaOrgTag: "proteinContent",
              total: 16.600732392806872,
              hasRDI: true,
              daily: 33.201464785613744,
              unit: "g",
            },
            {
              label: "Cholesterol",
              tag: "CHOLE",
              schemaOrgTag: "cholesterolContent",
              total: 0,
              hasRDI: true,
              daily: 0,
              unit: "mg",
            },
            {
              label: "Sodium",
              tag: "NA",
              schemaOrgTag: "sodiumContent",
              total: 1266.683411183232,
              hasRDI: true,
              daily: 52.778475465968,
              unit: "mg",
            },
            {
              label: "Calcium",
              tag: "CA",
              schemaOrgTag: null,
              total: 118.44395647905385,
              hasRDI: true,
              daily: 11.844395647905385,
              unit: "mg",
            },
            {
              label: "Magnesium",
              tag: "MG",
              schemaOrgTag: null,
              total: 139.88508926339705,
              hasRDI: true,
              daily: 33.305973634142156,
              unit: "mg",
            },
            {
              label: "Potassium",
              tag: "K",
              schemaOrgTag: null,
              total: 1274.1433397945075,
              hasRDI: true,
              daily: 27.109432761585264,
              unit: "mg",
            },
            {
              label: "Iron",
              tag: "FE",
              schemaOrgTag: null,
              total: 7.360440777247271,
              hasRDI: true,
              daily: 40.89133765137373,
              unit: "mg",
            },
            {
              label: "Zinc",
              tag: "ZN",
              schemaOrgTag: null,
              total: 2.9835047207182557,
              hasRDI: true,
              daily: 27.122770188347776,
              unit: "mg",
            },
            {
              label: "Phosphorus",
              tag: "P",
              schemaOrgTag: null,
              total: 352.06592487480896,
              hasRDI: true,
              daily: 50.29513212497271,
              unit: "mg",
            },
            {
              label: "Vitamin A",
              tag: "VITA_RAE",
              schemaOrgTag: null,
              total: 38.461,
              hasRDI: true,
              daily: 4.273444444444444,
              unit: "µg",
            },
            {
              label: "Vitamin C",
              tag: "VITC",
              schemaOrgTag: null,
              total: 157.37854999999442,
              hasRDI: true,
              daily: 174.86505555554933,
              unit: "mg",
            },
            {
              label: "Thiamin (B1)",
              tag: "THIA",
              schemaOrgTag: null,
              total: 0.36626533093738844,
              hasRDI: true,
              daily: 30.522110911449037,
              unit: "mg",
            },
            {
              label: "Riboflavin (B2)",
              tag: "RIBF",
              schemaOrgTag: null,
              total: 0.2164628554999662,
              hasRDI: true,
              daily: 16.650988884612783,
              unit: "mg",
            },
            {
              label: "Niacin (B3)",
              tag: "NIA",
              schemaOrgTag: null,
              total: 4.990225349999088,
              hasRDI: true,
              daily: 31.1889084374943,
              unit: "mg",
            },
            {
              label: "Vitamin B6",
              tag: "VITB6A",
              schemaOrgTag: null,
              total: 0.9886865426561586,
              hasRDI: true,
              daily: 76.05281097355066,
              unit: "mg",
            },
            {
              label: "Folate equivalent (total)",
              tag: "FOLDFE",
              schemaOrgTag: null,
              total: 76.90728540620603,
              hasRDI: true,
              daily: 19.226821351551507,
              unit: "µg",
            },
            {
              label: "Folate (food)",
              tag: "FOLFD",
              schemaOrgTag: null,
              total: 76.90728540620603,
              hasRDI: false,
              daily: 0,
              unit: "µg",
            },
            {
              label: "Folic acid",
              tag: "FOLAC",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "µg",
            },
            {
              label: "Vitamin B12",
              tag: "VITB12",
              schemaOrgTag: null,
              total: 0,
              hasRDI: true,
              daily: 0,
              unit: "µg",
            },
            {
              label: "Vitamin D",
              tag: "VITD",
              schemaOrgTag: null,
              total: 0,
              hasRDI: true,
              daily: 0,
              unit: "µg",
            },
            {
              label: "Vitamin E",
              tag: "TOCPHA",
              schemaOrgTag: null,
              total: 0.7665549999995944,
              hasRDI: true,
              daily: 5.110366666663963,
              unit: "mg",
            },
            {
              label: "Vitamin K",
              tag: "VITK1",
              schemaOrgTag: null,
              total: 15.250099999999662,
              hasRDI: true,
              daily: 12.708416666666384,
              unit: "µg",
            },
            {
              label: "Sugar alcohols",
              tag: "Sugar.alcohol",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Water",
              tag: "WATER",
              schemaOrgTag: null,
              total: 333.8776224129233,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        bookmarked: false,
        bought: false,
      },
    };
    let recipe = y["0"];

    let image = recipe.recipe.image && (
      <Image src={recipe.recipe.image} wrapped ui={false} />
    );
    let recipelabelcolor;
    switch (recipe.recipe.recipelabelcolor) {
      case "High Protein":
        recipelabelcolor = "red";
        break;
      case "High Carb":
        recipelabelcolor = "red";
        break;
      case "Balanced":
        recipelabelcolor = "green";
        break;
      case "Regular":
        recipelabelcolor = "yellow";
        break;
    }

    return (
      <Card >
        {image}
        <Card.Content>
          <Card.Header>
            <>{recipe.recipe.label}</>
            <Statistic size='mini' color='green' floated="right">
              <Statistic.Value>{recipe.recipe.yield}</Statistic.Value>
              <Statistic.Label>servings</Statistic.Label>
            </Statistic>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <b>
              Energy:{" "}
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              kcal
            </b>
            <br />
            <b>Protein:</b>{" "}
            {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g<br />
            <b>Fat:</b> {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}{" "}
            g<br />
            <b>Carbohydrates:</b>{" "}
            {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g <br />
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Label
            attached="bottom"
            style={{ textAlign: "center" }}
            color={recipelabelcolor}
          >
            {recipe.recipe.recipelabel}
          </Label>
        </Card.Content>
      </Card>
    );
  }
}
export default RecipeCard;
