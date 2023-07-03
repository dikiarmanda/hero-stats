"use client";

import { Card } from "flowbite-react";

export default function CardWithDecorativeImage() {
    return (
        <Card
            imgAlt="Aamon"
            imgSrc="../../public/img/Aamon_Default.png"
        >
            <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
                <p>Aamon</p>
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
                <p>25 PICKS</p>
            </p>
        </Card>
    );
}
