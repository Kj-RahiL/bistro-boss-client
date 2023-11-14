

const Cover = ({img, title, description}) => {
    return (
        <div className="hero h-[700px] bg-cover py-44 px-56 bg-blend-overlay bg-[#2f2f2f56]" style={{ backgroundImage: `url(${img})`}}>
            <div className="hero-overlay bg-[#000000] bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-white text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 text-white">{description ? description : 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;