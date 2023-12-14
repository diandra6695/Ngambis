import { Link } from "@inertiajs/react";

const Paginator = (props) => {
    const meta = props.meta;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="">
            <nav aria-label="Page navigation example">
                <ul className="flex items-center gap-2 -space-x-px h-10 text-base">
                    <li>
                        {prev && (
                            <Link
                                href={prev}
                                className="flex items-center justify-center px-4 rounded-xl h-10 ms-0 leading-tight bg-color-gray text-white"
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="w-3 h-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link className="flex items-center rounded-xl justify-center px-4 h-10 leading-tight bg-color-gray text-white">
                            {current}
                        </Link>
                    </li>
                    <li>
                        {next && (
                            <Link
                                href={next}
                                className="flex items-center rounded-xl justify-center px-4 h-10 leading-tight bg-color-gray text-white"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-3 h-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Paginator;
