import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from "@chakra-ui/react";

const InputLayout = ({
	errorMessage,
	formLbl,
	handleBlur,
	handleChange,
	invalid,
	name,
	placeholder,
	type,
	value,
}) => {
	return (
		<FormControl isInvalid={invalid} py="16px">
			<FormLabel>{formLbl}</FormLabel>
			<Input
				data-testid={name}
				id={name}
				name={name}
				onBlur={handleBlur}
				onChange={handleChange}
				placeholder={placeholder}
				type={type}
				value={value}
			/>
			<FormErrorMessage>{errorMessage}</FormErrorMessage>
		</FormControl>
	);
};

export default InputLayout;
