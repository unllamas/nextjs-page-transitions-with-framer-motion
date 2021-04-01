import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'

const stagger = {
    animate: {
        transition: {
            staggerChildren: .05
        }
    }
}

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: .6
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6
        }
    }
}

function Product({ product }){

    return(
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <div className="product">
                <motion.div 
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }} 
                    className="preview">
                    <motion.img 
                        src={product.image}
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 70, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}/>
                </motion.div>
                <div className="details">
                    <motion.div variants={stagger} className="inner">
                        <Link href="/">
                            <motion.div variants={fadeInUp} className="go-back">
                                <a>Back to home</a>
                            </motion.div>
                        </Link>
                        <motion.h3 variants={fadeInUp} className="category">{product.category}</motion.h3>
                        <motion.h1 variants={fadeInUp} className="title">{product.title}</motion.h1>
                        <motion.p variants={fadeInUp} className="description">{product.description}</motion.p>
                        <motion.div variants={fadeInUp} className="price">${product.price}</motion.div>
                        <motion.div variants={fadeInUp}>
                            <button className="btn secondary">Suscribe</button>
                            <button className="btn primary">Add to cart</button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

Product.getInitialProps = async ({ query }) => {
    const res = await fetch(`https://fakestoreapi.com/products/${query.id}`)
    const product = await res.json()

    return { product }
}

export default Product