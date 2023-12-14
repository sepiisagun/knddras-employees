import { useSelector } from "react-redux";

import { userRoleTypeSelector } from "../../auth/engine/auth.selectors";

import ProfileLayout from "../../../layout/ProfileLayout";
import EditRecordDoctorTab from "../components/EditRecordDoctorTab";

import { DENTIST } from "../../../constants/userRoles";
import EditRecordAssistantTab from "../components/EditRecordAssistantTab";

const EditRecordScreen = () => {
	const role = useSelector(userRoleTypeSelector);
	return (
		<ProfileLayout>
			{role === DENTIST ? (
				<EditRecordDoctorTab />
			) : (
				<EditRecordAssistantTab />
			)}
		</ProfileLayout>
	);
};

export default EditRecordScreen;
