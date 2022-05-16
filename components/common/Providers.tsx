import React from 'react';
import { BlocksProvider } from '../../hooks/useBlocks';
import { NetworkStatsProvider } from '../../hooks/useNetworkStats';

const combinedProviders = [[NetworkStatsProvider], [BlocksProvider]];

const Providers = ({ children }: any) => {
    return combinedProviders.reduceRight(
        (a, c) => React.createElement(c[0], c[1], a),
        children,
    );
};

export default Providers;
