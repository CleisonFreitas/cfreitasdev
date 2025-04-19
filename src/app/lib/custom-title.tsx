'use client';
const CustomTitle = ( { title, subtitle } : { title: string, subtitle?: string|null }) => {
    return (
        <div className={`flex flex-col h-auto ${subtitle ? 'justify-between' : 'justify-center'} items-center`}>
            <h3 className="text-4xl text-white mb-4">{title}</h3>
            <h5 className={`text-2xl text-gray-400 ${subtitle ? 'block' : 'hidden'}`}>{subtitle}</h5>
        </div>
    );
}

export default CustomTitle;