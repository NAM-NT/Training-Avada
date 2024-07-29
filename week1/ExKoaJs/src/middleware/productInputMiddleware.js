import yup from 'yup';

const ProductInputMiddleware = async (ctx, next) => {
    try {
        const inputData = ctx.request.body;
        console.log("vaoMiddleware")
        let schema = yup.object().shape({
            id: yup.number().positive().integer().required(),
            name: yup.string().required(),
            price: yup.number().positive().required(),
            description: yup.string().nullable().default(null),
            product: yup.string().nullable().default(null),
            createdAt: yup.string().nullable().default(null),
            color: yup.string().nullable().default(null),
            image: yup.string().nullable().default(null)
        });
        await schema.validate(inputData, { abortEarly: false });
        await next();
    } catch (e) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            errors: e.errors,
            errorName: e.name
        };
    }
};

export { ProductInputMiddleware };
