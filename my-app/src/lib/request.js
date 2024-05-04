// const APIKEY = import.meta.env.X_API_KEY
const APIKEY = "neurelo_9wKFBp874Z5xFw6ZCfvhXT13/0t/Gp5XWifP5htkUdIgtZxPzUm/xtWPha0m/iENGd2CucXHwgLEQT3tTYe06FN6AUWHeDFuOFFWTYOx4VrwfFPLZGhS3HUYSjxTO7xtK7xwt5ihRmptWnMz0of96AzfSazwI2n4G+sP8wg8UEeu86B+81gAP64NGAC8IQkL_/itNtZhJogjnEmHXDih0tVFf+R0k7pXVRcjhgixB46o="
const baseURL = "https://us-east-2.aws.neurelo.com/rest/"



export const getAllProducts = async () => {
    const url = baseURL + "next_products"
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
        // body: JSON.stringify({
        //     name: 'cake',
        //     tags: 'keto;dairy-free',
        //     includeIngredients: 'egg;butter',
        //     excludeIngredients: 'cinnamon',
        //     maxPrepareTime: 10,
        //     maxCookTime: 20,
        //     maxCalories: 500,
        //     maxNetCarbs: 5,
        //     maxSugar: 3,
        //     maxAddedSugar: 0,
        //     limit: 10
        // })
    };
    try {
        // , { next: { revalidate: 3600 } }, { cache: 'no-store' }
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data.length)
        return result.data
    } catch (error) {
        console.error(error);
    }
}

export const getUniqueProduct = async (slug) => {
    const url = baseURL + `next_products` + `/${slug}`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
        // body: JSON.stringify({
        //     name: 'cake',
        //     tags: 'keto;dairy-free',
        //     includeIngredients: 'egg;butter',
        //     excludeIngredients: 'cinnamon',
        //     maxPrepareTime: 10,
        //     maxCookTime: 20,
        //     maxCalories: 500,
        //     maxNetCarbs: 5,
        //     maxSugar: 3,
        //     maxAddedSugar: 0,
        //     limit: 10
        // })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data
    } catch (error) {
        console.error(error);
    }
}