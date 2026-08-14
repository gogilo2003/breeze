import { ButtonHTMLAttributes } from 'react';

export default function Button({
    variant = 'primary',
    outline = false,
    className = '',
    disabled,
    children,
    ...props
}) {
    const variantClasses = {
        primary: outline
            ? 'bg-white border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-500'
            : 'bg-gray-800 border-gray-800 text-white hover:bg-gray-700 focus:ring-indigo-500 active:bg-gray-900',
        secondary: outline
            ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-500',
        danger: outline
            ? 'bg-white border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500'
            : 'bg-red-600 border-red-600 text-white hover:bg-red-500 focus:ring-red-500 active:bg-red-700',
        warning: outline
            ? 'bg-white border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500'
            : 'bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-400 focus:ring-yellow-500 active:bg-yellow-600',
        info: outline
            ? 'bg-white border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
            : 'bg-blue-600 border-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500 active:bg-blue-700',
        success: outline
            ? 'bg-white border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500'
            : 'bg-green-600 border-green-600 text-white hover:bg-green-500 focus:ring-green-500 active:bg-green-700',
    };

    const baseClasses =
        'flex gap-2 flex-nowrap px-3 py-2 inline-flex items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-25 disabled:cursor-not-allowed';

    const classes = `${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? 'opacity-25 cursor-not-allowed' : ''
    }`;

    return (
        <button {...props} className={classes} disabled={disabled}>
            {children}
        </button>
    );
}
