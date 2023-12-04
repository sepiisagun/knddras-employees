import React from "react";
import StrapiTable from "../../../components/Table";

const CTTable = () => {
	return (
		<StrapiTable
			action={["View"]}
			headerTitles={[
				"Procedure",
				"Operated By",
				"Date Operated",
				"Total Fee",
				"Action",
			]}
			title="CTTable"
		/>
	);
};

export default CTTable;
