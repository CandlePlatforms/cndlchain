import DefaultLayout from '../../components/layouts/DefaultLayout';
import StatsOverview from '../../components/stats/StatsOverview';
import RecentBlocks from '../../components/stats/RecentBlocks';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MetaMaskIcon from '../../components/icons/metaMaskIcon';
import LogoIcon from '../../components/icons/logoIcon';

AboutPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function AboutPage() {

    const contentStyle = {
        background: 'rgb(24 24 27 / 0.7)',
        color: '#fff',
    };

    const iconStyle={
        background: 'gray',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className="w-full flex items-center justify-center">
            <div className="pt-32 w-2/3 text-center text-white">
                {/* Intro */}
                <div>
                    <h1 className="display-2 mt-3 mb-4 max-w-4xl mx-auto lg:mb-4 md:mb-4 sm:mb-4">
                        <span>
                            A scaleable, efficent place for developers to build
                            on web3
                        </span>
                    </h1>
                    <h2 className="mt-2 font-semibold text-lg text-indigo-300">
                        Candle is a decentralised EVM based scaling platform
                        that enables developers to build scalable user-friendly
                        dApps with zero-to-low transaction fees without ever
                        sacrificing on security.
                    </h2>
                </div>

                {/* Overview */}
                <div className="my-20">
                    <StatsOverview />
                    <div style={{display: 'none'}}>
                        <RecentBlocks  />
                    </div>
                </div>

                {/* People */}
                <div className="my-20">
                    <h2 className="my-4 text-lg leading-6 font-medium text-gray-100">
                        Candle is a team of passionate people around the globe.
                    </h2>
                    <h2 className="my-5 h1 mb-10 lg:mb-8 md:mb-8 sm:mb-5 text-center">
                        Humans of Candle
                    </h2>
                    <div className="grid gap-7 lg:gap-5 md:gap-5 sm:gap-x-5 sm:gap-y-7 mb-12 sm:mb-10 grid-cols-4">
                        <div className="text-center">
                            <img className="rounded-md mb-6 lg:mb-4 md:mb-4 w-full h-auto object-cover"></img>
                            <h4 className="label-lg md:text-md sm:text-xs text-gray-700 font-semibold mb-2">
                                Samuel Safahi
                            </h4>
                            <div className="body-md sm:text-caption text-gray-600 mb-3">
                                CFO
                            </div>
                            <div className="flex justify-center items-center mx-2">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMDQ4MDhDMTMuMjQzNyAyLjMwNzY5IDEyLjczNzUgMi4zOTQyMyAxMi4xNDY5IDIuNDgwNzdDMTIuNzM3NSAyLjEzNDYyIDEzLjE1OTQgMS42MTUzOCAxMy4zMjgxIDAuOTIzMDc3QzEyLjgyMTkgMS4yNjkyMyAxMi4yMzEyIDEuNDQyMzEgMTEuNTU2MiAxLjYxNTM4QzExLjA1IDEuMDk2MTUgMTAuMjkwNiAwLjc1IDkuNTMxMjUgMC43NUM3Ljc1OTM4IDAuNzUgNi40MDkzOCAyLjQ4MDc3IDYuODMxMjUgNC4yMTE1NEM0LjU1MzEyIDQuMTI1IDIuNTI4MTMgMyAxLjA5Mzc1IDEuMjY5MjNDMC4zMzQzNzUgMi41NjczMSAwLjc1NjI1IDQuMjExNTQgMS45Mzc1IDUuMDc2OTJDMS41MTU2MiA1LjA3NjkyIDEuMDkzNzUgNC45MDM4NSAwLjY3MTg3NSA0LjczMDc3QzAuNjcxODc1IDYuMDI4ODUgMS42IDcuMjQwMzggMi44NjU2MyA3LjU4NjU0QzIuNDQzNzUgNy42NzMwOCAyLjAyMTg4IDcuNzU5NjIgMS42IDcuNjczMDhDMS45Mzc1IDguNzk4MDggMi45NSA5LjY2MzQ2IDQuMjE1NjIgOS42NjM0NkMzLjIwMzEyIDEwLjQ0MjMgMS42ODQzOCAxMC44NzUgMC4yNSAxMC43MDE5QzEuNTE1NjIgMTEuNDgwOCAyLjk1IDEyIDQuNDY4NzUgMTJDOS42MTU2MyAxMiAxMi40ODQ0IDcuNTg2NTQgMTIuMzE1NiAzLjUxOTIzQzEyLjkwNjIgMy4xNzMwOCAxMy40MTI1IDIuNjUzODUgMTMuNzUgMi4wNDgwOFoiIGZpbGw9IiM1MjUyNUQiLz4KPC9zdmc+Cg=="
                                        alt="Twitter"
                                    ></img>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNyAxMi4yNUgwLjE0OTk5OFY0LjIyNUgyLjdWMTIuMjVaTTEuNDI1IDMuMUMwLjYwMDAwMSAzLjEgMCAyLjUgMCAxLjY3NUMwIDAuODUgMC42NzUwMDEgMC4yNSAxLjQyNSAwLjI1QzIuMjUgMC4yNSAyLjg1IDAuODUgMi44NSAxLjY3NUMyLjg1IDIuNSAyLjI1IDMuMSAxLjQyNSAzLjFaTTEyIDEyLjI1SDkuNDVWNy45QzkuNDUgNi42MjUgOC45MjUgNi4yNSA4LjE3NSA2LjI1QzcuNDI1IDYuMjUgNi42NzUgNi44NSA2LjY3NSA3Ljk3NVYxMi4yNUg0LjEyNVY0LjIyNUg2LjUyNVY1LjM1QzYuNzUgNC44MjUgNy42NSA0IDguOTI1IDRDMTAuMzUgNCAxMS44NSA0LjgyNSAxMS44NSA3LjNWMTIuMjVIMTJaIiBmaWxsPSIjNTI1MjVEIi8+Cjwvc3ZnPgo="
                                        alt="Twitter"
                                    ></img>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="rounded-md mb-6 lg:mb-4 md:mb-4 w-full h-auto object-cover"></img>
                            <h4 className="label-lg md:text-md sm:text-xs text-gray-700 font-semibold mb-2">
                                Jonathon Kona
                            </h4>
                            <div className="body-md sm:text-caption text-gray-600 mb-3">
                                Co-Founder
                            </div>
                            <div className="flex justify-center items-center mx-2">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMDQ4MDhDMTMuMjQzNyAyLjMwNzY5IDEyLjczNzUgMi4zOTQyMyAxMi4xNDY5IDIuNDgwNzdDMTIuNzM3NSAyLjEzNDYyIDEzLjE1OTQgMS42MTUzOCAxMy4zMjgxIDAuOTIzMDc3QzEyLjgyMTkgMS4yNjkyMyAxMi4yMzEyIDEuNDQyMzEgMTEuNTU2MiAxLjYxNTM4QzExLjA1IDEuMDk2MTUgMTAuMjkwNiAwLjc1IDkuNTMxMjUgMC43NUM3Ljc1OTM4IDAuNzUgNi40MDkzOCAyLjQ4MDc3IDYuODMxMjUgNC4yMTE1NEM0LjU1MzEyIDQuMTI1IDIuNTI4MTMgMyAxLjA5Mzc1IDEuMjY5MjNDMC4zMzQzNzUgMi41NjczMSAwLjc1NjI1IDQuMjExNTQgMS45Mzc1IDUuMDc2OTJDMS41MTU2MiA1LjA3NjkyIDEuMDkzNzUgNC45MDM4NSAwLjY3MTg3NSA0LjczMDc3QzAuNjcxODc1IDYuMDI4ODUgMS42IDcuMjQwMzggMi44NjU2MyA3LjU4NjU0QzIuNDQzNzUgNy42NzMwOCAyLjAyMTg4IDcuNzU5NjIgMS42IDcuNjczMDhDMS45Mzc1IDguNzk4MDggMi45NSA5LjY2MzQ2IDQuMjE1NjIgOS42NjM0NkMzLjIwMzEyIDEwLjQ0MjMgMS42ODQzOCAxMC44NzUgMC4yNSAxMC43MDE5QzEuNTE1NjIgMTEuNDgwOCAyLjk1IDEyIDQuNDY4NzUgMTJDOS42MTU2MyAxMiAxMi40ODQ0IDcuNTg2NTQgMTIuMzE1NiAzLjUxOTIzQzEyLjkwNjIgMy4xNzMwOCAxMy40MTI1IDIuNjUzODUgMTMuNzUgMi4wNDgwOFoiIGZpbGw9IiM1MjUyNUQiLz4KPC9zdmc+Cg=="
                                        alt="Twitter"
                                    ></img>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNyAxMi4yNUgwLjE0OTk5OFY0LjIyNUgyLjdWMTIuMjVaTTEuNDI1IDMuMUMwLjYwMDAwMSAzLjEgMCAyLjUgMCAxLjY3NUMwIDAuODUgMC42NzUwMDEgMC4yNSAxLjQyNSAwLjI1QzIuMjUgMC4yNSAyLjg1IDAuODUgMi44NSAxLjY3NUMyLjg1IDIuNSAyLjI1IDMuMSAxLjQyNSAzLjFaTTEyIDEyLjI1SDkuNDVWNy45QzkuNDUgNi42MjUgOC45MjUgNi4yNSA4LjE3NSA2LjI1QzcuNDI1IDYuMjUgNi42NzUgNi44NSA2LjY3NSA3Ljk3NVYxMi4yNUg0LjEyNVY0LjIyNUg2LjUyNVY1LjM1QzYuNzUgNC44MjUgNy42NSA0IDguOTI1IDRDMTAuMzUgNCAxMS44NSA0LjgyNSAxMS44NSA3LjNWMTIuMjVIMTJaIiBmaWxsPSIjNTI1MjVEIi8+Cjwvc3ZnPgo="
                                        alt="Twitter"
                                    ></img>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="rounded-md mb-6 lg:mb-4 md:mb-4 w-full h-auto object-cover"></img>
                            <h4 className="label-lg md:text-md sm:text-xs text-gray-700 font-semibold mb-2">
                              Patrick Prince
                            </h4>
                            <div className="body-md sm:text-caption text-gray-600 mb-3">
                                Co-Founder
                            </div>
                            <div className="flex justify-center items-center mx-2">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMDQ4MDhDMTMuMjQzNyAyLjMwNzY5IDEyLjczNzUgMi4zOTQyMyAxMi4xNDY5IDIuNDgwNzdDMTIuNzM3NSAyLjEzNDYyIDEzLjE1OTQgMS42MTUzOCAxMy4zMjgxIDAuOTIzMDc3QzEyLjgyMTkgMS4yNjkyMyAxMi4yMzEyIDEuNDQyMzEgMTEuNTU2MiAxLjYxNTM4QzExLjA1IDEuMDk2MTUgMTAuMjkwNiAwLjc1IDkuNTMxMjUgMC43NUM3Ljc1OTM4IDAuNzUgNi40MDkzOCAyLjQ4MDc3IDYuODMxMjUgNC4yMTE1NEM0LjU1MzEyIDQuMTI1IDIuNTI4MTMgMyAxLjA5Mzc1IDEuMjY5MjNDMC4zMzQzNzUgMi41NjczMSAwLjc1NjI1IDQuMjExNTQgMS45Mzc1IDUuMDc2OTJDMS41MTU2MiA1LjA3NjkyIDEuMDkzNzUgNC45MDM4NSAwLjY3MTg3NSA0LjczMDc3QzAuNjcxODc1IDYuMDI4ODUgMS42IDcuMjQwMzggMi44NjU2MyA3LjU4NjU0QzIuNDQzNzUgNy42NzMwOCAyLjAyMTg4IDcuNzU5NjIgMS42IDcuNjczMDhDMS45Mzc1IDguNzk4MDggMi45NSA5LjY2MzQ2IDQuMjE1NjIgOS42NjM0NkMzLjIwMzEyIDEwLjQ0MjMgMS42ODQzOCAxMC44NzUgMC4yNSAxMC43MDE5QzEuNTE1NjIgMTEuNDgwOCAyLjk1IDEyIDQuNDY4NzUgMTJDOS42MTU2MyAxMiAxMi40ODQ0IDcuNTg2NTQgMTIuMzE1NiAzLjUxOTIzQzEyLjkwNjIgMy4xNzMwOCAxMy40MTI1IDIuNjUzODUgMTMuNzUgMi4wNDgwOFoiIGZpbGw9IiM1MjUyNUQiLz4KPC9zdmc+Cg=="
                                        alt="Twitter"
                                    ></img>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNyAxMi4yNUgwLjE0OTk5OFY0LjIyNUgyLjdWMTIuMjVaTTEuNDI1IDMuMUMwLjYwMDAwMSAzLjEgMCAyLjUgMCAxLjY3NUMwIDAuODUgMC42NzUwMDEgMC4yNSAxLjQyNSAwLjI1QzIuMjUgMC4yNSAyLjg1IDAuODUgMi44NSAxLjY3NUMyLjg1IDIuNSAyLjI1IDMuMSAxLjQyNSAzLjFaTTEyIDEyLjI1SDkuNDVWNy45QzkuNDUgNi42MjUgOC45MjUgNi4yNSA4LjE3NSA2LjI1QzcuNDI1IDYuMjUgNi42NzUgNi44NSA2LjY3NSA3Ljk3NVYxMi4yNUg0LjEyNVY0LjIyNUg2LjUyNVY1LjM1QzYuNzUgNC44MjUgNy42NSA0IDguOTI1IDRDMTAuMzUgNCAxMS44NSA0LjgyNSAxMS44NSA3LjNWMTIuMjVIMTJaIiBmaWxsPSIjNTI1MjVEIi8+Cjwvc3ZnPgo="
                                        alt="Twitter"
                                    ></img>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="rounded-md mb-6 lg:mb-4 md:mb-4 w-full h-auto object-cover"></img>
                            <h4 className="label-lg md:text-md sm:text-xs text-gray-700 font-semibold mb-2">
                                Johnny Smallwongß
                            </h4>
                            <div className="body-md sm:text-caption text-gray-600 mb-3">
                                Waterboy
                            </div>
                            <div className="flex justify-center items-center mx-2">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMDQ4MDhDMTMuMjQzNyAyLjMwNzY5IDEyLjczNzUgMi4zOTQyMyAxMi4xNDY5IDIuNDgwNzdDMTIuNzM3NSAyLjEzNDYyIDEzLjE1OTQgMS42MTUzOCAxMy4zMjgxIDAuOTIzMDc3QzEyLjgyMTkgMS4yNjkyMyAxMi4yMzEyIDEuNDQyMzEgMTEuNTU2MiAxLjYxNTM4QzExLjA1IDEuMDk2MTUgMTAuMjkwNiAwLjc1IDkuNTMxMjUgMC43NUM3Ljc1OTM4IDAuNzUgNi40MDkzOCAyLjQ4MDc3IDYuODMxMjUgNC4yMTE1NEM0LjU1MzEyIDQuMTI1IDIuNTI4MTMgMyAxLjA5Mzc1IDEuMjY5MjNDMC4zMzQzNzUgMi41NjczMSAwLjc1NjI1IDQuMjExNTQgMS45Mzc1IDUuMDc2OTJDMS41MTU2MiA1LjA3NjkyIDEuMDkzNzUgNC45MDM4NSAwLjY3MTg3NSA0LjczMDc3QzAuNjcxODc1IDYuMDI4ODUgMS42IDcuMjQwMzggMi44NjU2MyA3LjU4NjU0QzIuNDQzNzUgNy42NzMwOCAyLjAyMTg4IDcuNzU5NjIgMS42IDcuNjczMDhDMS45Mzc1IDguNzk4MDggMi45NSA5LjY2MzQ2IDQuMjE1NjIgOS42NjM0NkMzLjIwMzEyIDEwLjQ0MjMgMS42ODQzOCAxMC44NzUgMC4yNSAxMC43MDE5QzEuNTE1NjIgMTEuNDgwOCAyLjk1IDEyIDQuNDY4NzUgMTJDOS42MTU2MyAxMiAxMi40ODQ0IDcuNTg2NTQgMTIuMzE1NiAzLjUxOTIzQzEyLjkwNjIgMy4xNzMwOCAxMy40MTI1IDIuNjUzODUgMTMuNzUgMi4wNDgwOFoiIGZpbGw9IiM1MjUyNUQiLz4KPC9zdmc+Cg=="
                                        alt="Twitter"
                                    ></img>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex w-7 h-7 justify-center items-center"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNyAxMi4yNUgwLjE0OTk5OFY0LjIyNUgyLjdWMTIuMjVaTTEuNDI1IDMuMUMwLjYwMDAwMSAzLjEgMCAyLjUgMCAxLjY3NUMwIDAuODUgMC42NzUwMDEgMC4yNSAxLjQyNSAwLjI1QzIuMjUgMC4yNSAyLjg1IDAuODUgMi44NSAxLjY3NUMyLjg1IDIuNSAyLjI1IDMuMSAxLjQyNSAzLjFaTTEyIDEyLjI1SDkuNDVWNy45QzkuNDUgNi42MjUgOC45MjUgNi4yNSA4LjE3NSA2LjI1QzcuNDI1IDYuMjUgNi42NzUgNi44NSA2LjY3NSA3Ljk3NVYxMi4yNUg0LjEyNVY0LjIyNUg2LjUyNVY1LjM1QzYuNzUgNC44MjUgNy42NSA0IDguOTI1IDRDMTAuMzUgNCAxMS44NSA0LjgyNSAxMS44NSA3LjNWMTIuMjVIMTJaIiBmaWxsPSIjNTI1MjVEIi8+Cjwvc3ZnPgo="
                                        alt="Twitter"
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Journey */}
                <div className="my-20">
                    <h2 className="my-5 h1 mb-10 lg:mb-8 md:mb-8 sm:mb-5 text-center">
                        Our Journey
                    </h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            contentArrowStyle={{
                                borderRight: '7px solid  rgb(33, 150, 243)',
                            }}
                            date="2022 - present"
                            iconStyle={iconStyle}
                            icon={<LogoIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                CANDLE MAINNET is open for developers 🎉!
                            </h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            date="2020 - 2021"
                            iconStyle={iconStyle}
                            icon={<MetaMaskIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Start work on Candle!
                            </h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            date="2018 - 2019"
                            iconStyle={iconStyle}
                            icon={<MetaMaskIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Launch Beta
                            </h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            date="2017 - 2018"
                            iconStyle={iconStyle}
                            icon={<MetaMaskIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Launch Alpha
                            </h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={contentStyle}
                            date="October 2017"
                            iconStyle={iconStyle}
                            icon={<MetaMaskIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Research on Ethereum
                            </h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={contentStyle}
                            date="March 2017"
                            iconStyle={iconStyle}
                            icon={<MetaMaskIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Meeting in garage
                            </h3>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}
