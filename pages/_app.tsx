import Providers from '../components/common/Providers';
import Web3Provider from '../providers/web3';

import '../styles/globals.css';

interface Props {
    Component: any;
    pageProps: any;
}

function Application({ Component, pageProps }: Props) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page: any) => page);

    return (
        <Providers>
            <Web3Provider>
                {getLayout(<Component {...pageProps} />)}
            </Web3Provider>
        </Providers>
    );
}

export default Application;
