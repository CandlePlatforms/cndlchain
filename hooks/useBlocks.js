import { createContext, useContext, useState } from 'react';
import { API_URL } from '../utils/constants';

const BlocksContext = createContext();

export const BlocksProvider = (props) => {
    const [blocks, setBlocks] = useState([]);

    const fetchBlockWithNumber = async (number) => {
        // Check if block is already in the list
        const block = blocks?.find((block) => block?.number === number);

        if (block) {
            console.log('Block already in list');
            return block;
        }

        // Convert number to hexadecimal with 0x prefix
        const hexNumber = `0x${number.toString(16)}`;

        // Fetch block
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_getBlockByNumber',
                    params: [hexNumber, true],
                    id: 1,
                }),
            });

            const data = await response.json();
            const block = data.result;

            // Add block to list
            setBlocks((prevBlocks) => [...prevBlocks, block]);

            return block;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchBlockWithHash = async (hash) => {
        // Check if block is already in the list
        const block = blocks?.find((block) => block?.hash === hash);

        if (block) {
            console.log('Block already in list');
            return block;
        }

        // Fetch block
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_getBlockByHash',
                    params: [hash, true],
                    id: 1,
                }),
            });

            const data = await response.json();
            const block = data.result;

            if (!block) throw new Error('Block not found');

            // Add block to list
            setBlocks((prevBlocks) => [...prevBlocks, block]);

            return block;
        } catch (error) {
            console.log(error);
        }
    };

    const getBlockWithNumber = async (number) => {
        if (!number && number !== 0) {
            console.log('No block number provided');
            return;
        }

        // Check if number is a hexadecimal
        if (number.toString().match(/^0x[0-9a-fA-F]{64}$/))
            number = parseInt(number.replace('0x', ''), 16);

        // Check if block is already in cache
        const block = blocks?.find((block) => block?.number === number);
        if (block) return block;

        const fetchedBlock = await fetchBlockWithNumber(number);
        if (fetchedBlock) return fetchedBlock;

        console.log('Block not found');
        return null;
    };

    const getBlockWithHash = async (hash) => {
        if (!hash) {
            console.log('No block hash provided');
            return;
        }

        const block = blocks?.find((block) => block?.hash === hash);
        if (block) return block;

        const fetchedBlock = await fetchBlockWithHash(hash);
        if (fetchedBlock) return fetchedBlock;

        console.log('Block not found');
        return null;
    };

    const addBlock = (block) => {
        // Check if block is not valid
        if (!block) {
            console.log('Block is not valid');
            return;
        }

        setBlocks((prevBlocks) => [
            ...prevBlocks.filter(
                (prevBlock) => prevBlock?.number !== block.number,
            ),
            block,
        ]);
    };

    const removeBlockWithNumber = (block) => {
        setBlocks((prevBlocks) =>
            prevBlocks.filter((prevBlock) => prevBlock.number !== block.number),
        );
    };

    const removeBlockWithHash = (block) => {
        setBlocks((prevBlocks) =>
            prevBlocks.filter((prevBlock) => prevBlock.hash !== block.hash),
        );
    };

    const values = {
        blocks,
        addBlock,
        removeBlockWithNumber,
        removeBlockWithHash,

        getBlockWithNumber,
        getBlockWithHash,
    };

    return <BlocksContext.Provider value={values} {...props} />;
};

export const useBlocks = () => {
    const context = useContext(BlocksContext);

    if (context === undefined)
        throw new Error(`useBlocks() must be used within a BlocksProvider.`);

    return context;
};
