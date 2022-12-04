import { useNavigate } from "react-router-dom";
export function NoMatch() {
	const navigate = useNavigate();
	return <div>{navigate("/")}</div>;
}
