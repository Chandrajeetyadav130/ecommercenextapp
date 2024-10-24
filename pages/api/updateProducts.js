// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            let product;
            for (let i = 0; i < req.body.length; i++) {
           product=await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
                await product.save()


            }
            return res.status(200).json({ success: true })
        }
        else {
            res.status(400).json({ error: "This method is not allowed" })

        }

    } catch (error) {
        return res.status(500).json({ error: error })
    }


}
export default connectDb(handler)
