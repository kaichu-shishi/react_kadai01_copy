export const JankenButton = ({ text, value, action }) => {
    return (
        <>
        {/* đœ `onClick` ă§ăŻăȘăăŻæă«æćźăăéąæ°ăćźèĄă§ăă */}
        <button type="button" value={value} onClick={action}>
            {text}
        </button>
        </>
    );
};