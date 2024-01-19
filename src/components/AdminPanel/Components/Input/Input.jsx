import styles from "./input.css";

const Input = (props) => {
	const { label, type, className, value, placeholder, onChangeFunction, name, checked } =
		props;
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
				/>
		</div>
		
	);
};

export default Input;