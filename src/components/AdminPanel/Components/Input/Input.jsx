import styles from "./input.css";

const Input = (props) => {
	const { label, type, className, value, placeholder, onChangeFunction, name, checked, disabled } =
		props;
		function handleFiles() {
			const fileList = this.files; /* now you can work with the file list */
		  }
	return (
		<div className="input">
			<label>{label}</label>
			<input
				type={type || "text"}
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					onChangeFunction(event.target.value)
				}}
				className={className}
				name={name}
				checked={checked || null}
				disabled={disabled}
			/>
		</div>

	);
};

export default Input;