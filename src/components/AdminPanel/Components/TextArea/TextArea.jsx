

const TextArea = ({ name, value, className, diasble, onChange }) => {

    return (
        <textarea name={name} value={value} onChange={onChange}
            className={className} diasble={diasble}>

        </textarea>
    );
}
export default TextArea;



