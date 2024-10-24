// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            let product;
            for (let i = 0; i < req.body.length; i++) {
                product = new Product({
                    title: req.body[i].title,
                    slugs: req.body[i].slugs,
                    desc: req.body[i].desc,
                    img: req.body[i].img,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    price: req.body[i].price,
                    availability: req.body[i].availability,

                })
                await product.save()


            }
            return res.status(200).json({ success: true, product })
        }
        else {
            res.status(400).json({ error: "This method is not allowed" })

        }

    } catch (error) {
        return res.status(500).json({ error: error })
    }


}
export default connectDb(handler)
