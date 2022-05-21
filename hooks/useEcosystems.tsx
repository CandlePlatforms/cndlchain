import { createContext, useContext, useEffect, useState } from 'react';
import Integrations from '../constants/integrations.json'

const EcosystemContext = createContext<any>({});

export const EcosystemProvider = (props: any) => {
    const [loading, setLoading] = useState(true);

    const [ecosystems, setEcosystems] = useState<Array<any>>([]);

    const fetchEcosystems = async () => {
        // Fetch ecosystems
        try {
            setEcosystems(Integrations);

            return Integrations;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // Use Promise.all to fetch all data at once
        fetchEcosystems()
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const values = {
        loading,

        ecosystems,
    };

    return <EcosystemContext.Provider value={values} {...props} />;
};

export const useEcosystems = () => {
    const context = useContext(EcosystemContext);

    if (context === undefined)
        throw new Error(
            `useEcosystems() must be used within a EcosystemsProvider.`,
        );

    return context;
};
