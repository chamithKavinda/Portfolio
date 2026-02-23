import 'react';

// eslint-disable-next-line react/prop-types
const Data = ({ title, name, description }) => {
  return (
    <div className="home__data">
      <h1 className="home__subtitle">
        {name}
        <span className="verify-icon"></span>
      </h1>
      <h3 className="home__title">{title}</h3>
      <p className="home__description">{description}</p>
    </div>
  );
};

export default Data;
