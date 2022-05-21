import React from 'react';
import { BlocksProvider } from '../../hooks/useBlocks';
import { NetworkStatsProvider } from '../../hooks/useNetworkStats';
import { EcosystemProvider } from '../../hooks/useEcosystems';

const combinedProviders = [[NetworkStatsProvider], [BlocksProvider], [EcosystemProvider]];

const Providers = ({ children }: any) => {
    return combinedProviders.reduceRight(
        (a, c) => React.createElement(c[0], c[1], a),
        children,
    );
};

export default Providers;
