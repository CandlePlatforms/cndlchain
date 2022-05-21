import { useEffect, useState } from 'react';

interface Props {
    isNew: boolean;
    description: string;
    img: string;
    title: string;
    type: Array<string>;
    twitter: string;
    website: string;
}
export default function EcosystemItem({
    isNew,
    description,
    img,
    title,
    type,
    twitter,
    website,
}: Props) {
    img = `https://ecosystem.zksync.io/integrations/${img}`;

    return (
        <div className="bg-blue-900 p-5 rounded-lg w-60 hover:drop-shadow-lg">
            {isNew && (
                <span className="rounded bg-green-700 px-2 new-ecosystem">
                    new
                </span>
            )}
            <div className="flex bg-gray-800 rounded-full p-2 overflow-hidden w-48 h-48 img-ecosystem mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} className="rounded-full w-44 h-44" alt="" />
            </div>

            <h2 className="text-2xl text-center text-bold">{title}</h2>
            <div className="text-center mt-3 flex flex-wrap justify-center">
                {type.map((t) => (
                    <span
                        key={t}
                        className="bg-gray-800 p-1 pl-2 pr-2 ml-2 rounded mb-2 text-sm"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
