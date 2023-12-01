import PropTypes from 'prop-types'

const TitleList = ({name}) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

TitleList.propTypes ={
    name: PropTypes.string
}

export default TitleList;