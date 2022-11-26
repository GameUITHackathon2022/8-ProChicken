import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import { approveUser, getUsers } from "../api/user";

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

export default function ParticipantsPage() {
  const [users, setUsers] = React.useState([]);
  const [joinedUsers, setJoinedUsers] = React.useState([]);
  const { eventId } = useParams();
  React.useEffect(() => {
    const getAllUsers = async () => {
      try {
        const allUsers = await getUsers();
        setUsers(allUsers);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUsers();
  }, [joinedUsers]);

  let tempUsers = [];
  for (let user of users) {
    const isBreak = false;
    for (let eventIdByUser of user.listEvent) {
      if (eventIdByUser === parseInt(eventId)) {
        tempUsers.push(user);
      }
    }
  }

  const handleApproved = async (userId, eventId) => {
    try {
      const data = await approveUser(userId, eventId);
      const filteredUser = joinedUsers.filter((user) => user.id !== data.id);
      setJoinedUsers(filteredUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography variant="h4" textAlign="center">
        Tất cả các ứng viên tham gia sự kiện {`name`}
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "40px 0" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên ứng viên</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">MSSV</StyledTableCell>
              <StyledTableCell align="right">Tổ chức</StyledTableCell>
              <StyledTableCell align="right">Xác nhận</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempUsers?.map((user) => (
              <StyledTableRow key={user?.name}>
                <StyledTableCell component="th" scope="row">
                  {user?.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user?.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {user?.studentCode || "Ko có"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {user?.company || "Ko có"}
                </StyledTableCell>

                <StyledTableCell align="right" sx={{ padding: 0 }}>
                  <Button onClick={() => handleApproved(user?.id, eventId)}>
                    <CheckCircleIcon color="#fff" />
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
