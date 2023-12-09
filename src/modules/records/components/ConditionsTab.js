import { Button } from "@chakra-ui/react";
import spiels from "../../../constants/spiels";

const ConditionsTab = () => {
	return (
		<div>
			Conditions Tab{" "}
			<Button
				colorScheme="blue"
				float="right"
				mt={10}
				size="sm"
				variant="solid"
			>
				{spiels.BUTTON_NEXT}
			</Button>
			<Button
				colorScheme="blue"
				float="right"
				mr={2}
				mt={10}
				size="sm"
				variant="outline"
			>
				{spiels.BUTTON_BACK}
			</Button>
		</div>
	);
};

export default ConditionsTab;
