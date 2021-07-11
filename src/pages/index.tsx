import Head from 'next/head'
import { Button, Card, CardMedia, CardContent, CardActions, Typography, Grid} from "@material-ui/core";
import {Product} from "../models";
import Link from 'next/link'
import {GetServerSideProps, NextPage} from "next";
import http from "../http";

interface ProductsListPageProps{
    products: Product[]
}

const ProductsListPage: NextPage<ProductsListPageProps> = ({products}) => {
  return (
    <div>
      <Head>
        <title>Listagem de produtos</title>
      </Head>

    <Typography component={"h1"} variant={"h3"} color={"textPrimary"} gutterBottom>
        Produtos
    </Typography>
        <Grid container spacing={4}>
        {products.map((product, key)  => (
            <Grid key={key} item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia style={{ paddingTop: "56%" }}  image={product.image_url}/>
                    <CardContent>
                        <Typography component={"h2"} variant={"h5"} gutterBottom>
                            {product.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={"/products/[slug]"} as={`/products/${product.slug}`} passHref>
                            <Button size={"small"} color={"primary"} component={"a"}>
                                Detalhes
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default ProductsListPage

export const getServerSideProps: GetServerSideProps<ProductsListPageProps> = async (context) => {
    const {data: products} = await http.get('products')
    console.log(products)
    return {
        props: {
            products: products,
        },
    };
};