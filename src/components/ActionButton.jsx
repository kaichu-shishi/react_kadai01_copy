export const ActionButton = ({ text, action }) => {
    return (
        <>
        {/* đœ `onClick` ă§ăŻăȘăăŻæă«æćźăăéąæ°ăćźèĄă§ăă */}
        <button type="button" onClick={action}>
            {text}
        </button>
        </>
    );
};