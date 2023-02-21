export const JankenButton = ({ text, value, action }) => {
    return (
        <>
        {/* 🔽 `onClick` でクリック時に指定した関数を実行できる */}
        <button type="button" value={value} onClick={action}>
            {text}
        </button>
        </>
    );
};