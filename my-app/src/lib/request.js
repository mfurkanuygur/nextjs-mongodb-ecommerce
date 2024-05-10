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
    };
    try {
        // , { next: { revalidate: 3600 } }, { cache: 'no-store' }
        const response = await fetch(url, options, { next: { revalidate: 60 } });
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
        const response = await fetch(url, options, { next: { revalidate: 60 } });
        const result = await response.json();
        return result.data
    } catch (error) {
        console.error(error);
    }
}


export const createNewUser = async (newUser) => {
    const url = baseURL + "next_users"
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
    };
    try {
        const response = await fetch(url, options, { next: { revalidate: 60 } });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const users = result?.data
        console.log(users)
        const isUserExists = users?.some(
            user =>
                user.name === newUser.name &&
                user.surname === newUser.surname &&
                user.password === newUser.password
        )
        if (isUserExists) {
            throw new Error("Kullanıcı zaten var.");
        } else {
            const createUserOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': APIKEY,
                },
                body: JSON.stringify([newUser]),
            };

            const createResponse = await fetch(url, createUserOptions);
            const createResult = await createResponse.json();
            document.cookie = `authToken=${newUser.token}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
            console.log("Yeni kullanıcı oluşturuldu:", createResult);
            return createResult;
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const getUniqueUser = async (newUser) => {
    const url = baseURL + "next_users"
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
    };
    try {
        const response = await fetch(url, options, { next: { revalidate: 60 } });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const users = result?.data
        console.log(users)
        const isUserExists = users?.find(
            user =>
                user.name === newUser.name &&
                user.surname === newUser.surname &&
                user.password === newUser.password
        )
        if (isUserExists) {
            document.cookie = `authToken=${isUserExists?.token}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
            console.log(isUserExists,isUserExists?.token)
            return isUserExists;

        }
        else {
            throw new Error("Kullanıcı bulunamadı.")
        }
    } catch (error) {
        throw new Error(error)
    }
}

// export const createNewUser = async (newUser) => {
//     const url = baseURL + "next_users"
//     try {
//         const res = await fetch(url)
//         const users = await res.json()
//         const isUserExists = users.some(
//             user =>
//                 user.name === newUser.name &&
//                 user.surname === newUser.surname &&
//                 user.password === newUser.password
//         )
//         if (isUserExists) {
//             throw new Error("Kullanıcı zaten var")
//         }

//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-API-Key': APIKEY,
//             },
//             body: JSON.stringify(newProduct),
//         };
//         try {
//             // POST isteği
//             const response = await fetch(url, options);
//             const result = await response.json();
//             console.log(result);
//             return result;
//         } catch (error) {
//             console.error(error);
//         }
//         document.cookie = `authToken=${newUser.token}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
//         return addUser
//     }
//     catch (error) {
//         console.log(error)
//         throw error;
//     }
// };