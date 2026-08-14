import { Link } from '@inertiajs/react';

export default function Paginator({ items }) {
    const lt = '&laquo; Previous';
    const gt = 'Next &raquo;';

    return (
        <div className="shadow my-3 border dark:border-gray-500 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3">
            <nav aria-label="Pagination" className="">
                <ul className="flex items-center flex-wrap md:flex-nowrap -space-x-px md:h-8 text-sm gap-1 justify-center">
                    {items?.links?.map((link, index) => (
                        <li key={index}>
                            {link.label === lt ? (
                                <span
                                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg rounded-l-3xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <Icon type="arrow-back" />
                                </span>
                            ) : link.label === gt ? (
                                <span
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg rounded-r-3xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <Icon type="arrow-forward" />
                                </span>
                            ) : (
                                <Link
                                    href={link.url}
                                    className={`flex items-center justify-center px-3 h-8 w-8 rounded-full leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white ${
                                        link.active
                                            ? 'z-10 text-secondary-600 border-secondary-300 bg-secondary-50 hover:bg-secondary-100 hover:text-secondary-700 dark:bg-gray-700 dark:text-primary-500'
                                            : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
