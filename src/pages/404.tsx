import Head from 'next/head'
import { Button, Card, CardMedia, CardContent, CardActions, Typography, Grid} from "@material-ui/core";
import {Product} from "../models";
import Link from 'next/link'
import {GetServerSideProps, NextPage} from "next";
import http from "../http";

interface ProductsListPageProps{
    products: Product[]
}

const Page404: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Página não encontrada</title>
            </Head>

            <Typography component={"h1"} variant={"h2"} color={"textPrimary"} align={"center"} gutterBottom>
                404 - Página não encontrada
            </Typography>
        </div>
    )
}

export default Page404