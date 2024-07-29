import { faker } from '@faker-js/faker';
import fs from 'fs'
const CreateFakeData = (Id)=>{
    return {
        id :Id,
        name : faker.commerce.productName(),
        price: faker.number.float({multipleOf:0.1, min:0 , max: 10}),
        description: faker.commerce.productDescription(),
        product: faker.commerce.productAdjective(),
        color: faker.color.human(),
        createdAt: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
        image: faker.image.url()
    }
};

const LetsGoCreateData = ()=>{
    let result = []
    for(let i = 1; i <=1000; i ++){
        result.push(CreateFakeData(i))
    }
    return result
}

const main = ()=>{
    let data = LetsGoCreateData()
    fs.writeFileSync('products.json', JSON.stringify(data) )
}

main()