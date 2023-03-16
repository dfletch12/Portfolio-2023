import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray[idx].split('').map((letter, i) => {
                return (
                    <span key={i} className={letterClass}>
                        {letter}
                    </span>

                );
            }
            )}
        </span>
    );
}

export default AnimatedLetters;