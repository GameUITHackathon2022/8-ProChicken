import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import { useNavigate } from "react-router-dom";
import { getListEvent } from "../api/user";
import { useUserContext } from "../context/UserContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function YourEventsPage() {
  const [isApproved, setIsApproved] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [allEvents, setAllEvents] = React.useState([]);

  const navigate = useNavigate();
  const { user } = useUserContext();

  React.useEffect(() => {
    const getAllEvents = async () => {
      try {
        const data = await getListEvent();
        setAllEvents(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllEvents();
  }, []);

  let createdEvents = [];
  for (let event of allEvents) {
    for (let eventId of user.listYourEvent) {
      if (event.id === eventId) {
        createdEvents.push(event);
      }
    }
  }

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography variant="h4" textAlign="center">
        Các sự kiện của bạn đã tạo ra
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "40px 0" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên sự kiện</StyledTableCell>
              <StyledTableCell align="right">Địa điểm</StyledTableCell>
              <StyledTableCell align="right">Xem thêm</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createdEvents?.map((row) => (
              <StyledTableRow key={row?.name}>
                <StyledTableCell component="th" scope="row">
                  {row?.name || "Ko có"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.location || "địa điểm"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      navigate(`/your-events/${row.id}`);
                    }}
                  >
                    Chi tiết
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
