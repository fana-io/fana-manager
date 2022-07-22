import { Link } from "react-router-dom"
import moment from "moment";
import { FlagStatusToggle } from "./FlagStatusToggle";
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell";
import MUILink from '@mui/material/Link'

export const FlagRow = ({ flag, refreshFlags }) => {
  const link = "/flags/" + flag.id;

  return (
    <TableRow>
      <TableCell>
        <Link to={link}>
          <MUILink>{flag.displayName}</MUILink>
        </Link>
      </TableCell>
      <TableCell>{flag.key}</TableCell>
      <TableCell>
        <FlagStatusToggle flag={flag} refreshFlags={refreshFlags} />
      </TableCell>
      <TableCell>{moment(flag.CreatedAt).format("MMM Do YY")}</TableCell>
      <TableCell>{moment(flag.UpdatedAt).format("MMM Do YY")}</TableCell>
    </TableRow>
  )
}