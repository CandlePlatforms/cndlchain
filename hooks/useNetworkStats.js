import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/clients/supabase';
import { API_URL } from '../utils/constants';

const NetworkStatsContext = createContext();

export const NetworkStatsProvider = (props) => {
    const [loading, setLoading] = useState(true);

    const [totalBlocks, setTotalBlocks] = useState(0);
    const [totalTransactions, setTotalTransactions] = useState(0);

    const fetchTotalBlocks = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_blockNumber',
                    params: [],
                    id: 0, //changed from 1
                }),
            });

            const data = await response.json();
            const totalBlocks = parseInt(data.result, 16);

            setTotalBlocks(totalBlocks);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchTotalTransactions = async () => {
        try {
            const { data, error } = await supabase
                .from('chain-overview')
                .select('latest_block, latest_transactions')
                .single();

            if (error) throw error;

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_gasPrice',
                    params: [],
                    id: 1,
                }),
            });

            const gasPriceData = await response.json();
            const gasPrice = parseInt(gasPriceData.result, 16);

            setTotalTransactions((prevTransactions) => {
                if (gasPrice == null || gasPrice == undefined)
                    return { ...prevTransactions, ...data };
                return { ...prevTransactions, ...data, gas_price: gasPrice };
            });
        } catch (error) {
            console.log(error);
        }
    };

    const updateTotalTransactions = (data) => {
        setTotalTransactions(data);
    };

    useEffect(() => {
        // Refetch data every 5000ms (5 seconds)
        const refetchInterval = 5000; // ms

        // Use Promise.all to fetch all data at once
        Promise.all([fetchTotalBlocks(), fetchTotalTransactions()])
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });

        setInterval(() => {
            fetchTotalBlocks();
            fetchTotalTransactions();
        }, refetchInterval);
    }, []);

    const values = {
        loading,

        totalBlocks,
        totalTransactions,

        updateTotalTransactions,
    };

    return <NetworkStatsContext.Provider value={values} {...props} />;
};

export const useNetworkStats = () => {
    const context = useContext(NetworkStatsContext);

    if (context === undefined)
        throw new Error(
            `useNetworkStats() must be used within a NetworkStatsProvider.`,
        );

    return context;
};
