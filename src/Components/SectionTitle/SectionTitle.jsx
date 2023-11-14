

const SectionTitle = ({heading, subHeading, text}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
        <h3 className={`text-3xl uppercase border-y-4 py-4 ${text ? 'text-white' : '' }`}>{heading}</h3>
    </div>
    );
};

export default SectionTitle;